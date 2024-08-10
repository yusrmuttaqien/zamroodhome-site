'use client';

import { useState, type MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect, motion, AnimatePresence } from 'framer-motion';
import Image from '@/components/Image';
import classMerge from '@/utils/classMerge';
import Maximize from '../../contents/svgs/maximize.svg';
import { ID, VARIANTS } from './constant';
import type { ImagePreviewProps, PreviewProps } from './type';

export default function ImagePreview(props: ImagePreviewProps) {
  const { state } = props;
  const [isOpen, setIsOpen] = state;
  const [portal, setPortal] = useState<HTMLElement | null>(null);

  function _close() {
    const body = document.body;
    const doc = document;

    setIsOpen(null);
    body.classList.remove('overflow-hidden');
    doc.fullscreenElement && doc.exitFullscreen();
  }
  function _open() {
    const body = document.body;

    body.classList.add('overflow-hidden');
  }
  function _backdropClick(e: MouseEvent) {
    e.stopPropagation();
    const targetId = (e.target as HTMLElement).id;

    if (targetId === ID) {
      _close();
    }
  }
  function _fullScreen(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const doc = document.documentElement;

    doc.requestFullscreen();
    target.classList.add('hidden');
  }

  useIsomorphicLayoutEffect(() => {
    setPortal(document.getElementById('portal'));
  }, []);
  useIsomorphicLayoutEffect(() => {
    !!isOpen && _open();
  }, [isOpen]);

  const markup = (
    <motion.div
      id={ID}
      style={{
        pointerEvents: !!isOpen ? 'auto' : 'none',
        backdropFilter: !!isOpen ? 'blur(10px)' : 'blur(0px)',
      }}
      onClick={_backdropClick}
      className={classMerge(
        'absolute inset-0 bg-transparent transition-[backdrop-filter] grid',
        'place-items-center cursor-alias duration-300 perspective-5000'
      )}
    >
      <motion.button
        style={{
          pointerEvents: !!isOpen ? 'auto' : 'none',
          opacity: !!isOpen ? 1 : 0,
        }}
        className={classMerge(
          'absolute right-4 top-4 size-[3.125rem] pointer-events-auto transition-opacity'
        )}
        onClick={_fullScreen}
      >
        <Image src={Maximize} draggable={false} alt="maximize" />
      </motion.button>
      <AnimatePresence>{!!isOpen && <Preview src={isOpen} />}</AnimatePresence>
    </motion.div>
  );

  return portal ? createPortal(markup, portal) : null;
}

function Preview(props: PreviewProps) {
  const { src } = props;
  const { alt, src: href } = src;

  return (
    <motion.div className="size-full pointer-events-none relative py-6 wrapper" {...VARIANTS}>
      <Image src={href} draggable={false} alt={alt} wrapper={{ className: 'size-full' }} />
    </motion.div>
  );
}
