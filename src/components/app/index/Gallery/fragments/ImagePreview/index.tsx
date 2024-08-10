'use client';

import { useState, type MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect, motion, AnimatePresence, useMotionValue } from 'framer-motion';
import Image from '@/components/Image';
import classMerge from '@/utils/classMerge';
import ColorLogoEmblem from '@/contents/images/color-logo-emblem.png';
import Maximize from '../../contents/svgs/maximize.svg';
import { ID, VARIANTS } from './constant';
import type { ImagePreviewProps, PreviewProps } from './type';

export default function ImagePreview(props: ImagePreviewProps) {
  const { state } = props;
  const [isOpen, setIsOpen] = state;
  const [portal, setPortal] = useState<HTMLElement | null>(null);
  const buttonOpacity = useMotionValue(0);

  function _close() {
    const body = document.body;
    const doc = document;

    setIsOpen(null);
    body.classList.remove('overflow-hidden');
    doc.fullscreenElement && doc.exitFullscreen();
    buttonOpacity.set(0);
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
  function _fullScreen() {
    const doc = document.documentElement;

    doc.requestFullscreen();
    buttonOpacity.set(0);
  }

  useIsomorphicLayoutEffect(() => {
    setPortal(document.getElementById('portal'));
  }, []);
  useIsomorphicLayoutEffect(() => {
    if (!!isOpen) {
      _open();
      buttonOpacity.set(1);
    }
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
          opacity: buttonOpacity,
        }}
        className={classMerge(
          'absolute right-4 top-4 size-[3.125rem] pointer-events-auto transition-opacity'
        )}
        onClick={_fullScreen}
      >
        <Image
          src={Maximize}
          draggable={false}
          alt="maximize"
          wrapper={{ className: 'pointer-events-none' }}
        />
      </motion.button>
      <AnimatePresence>{!!isOpen && <Preview src={isOpen} />}</AnimatePresence>
    </motion.div>
  );

  return portal ? createPortal(markup, portal) : null;
}

function Preview(props: PreviewProps) {
  const { src } = props;
  const { alt, src: href, id } = src;

  return (
    <motion.div className="size-full pointer-events-none relative py-6 wrapper" {...VARIANTS}>
      <Image
        src={href}
        draggable={false}
        alt={alt || id || `image-of-${src}`}
        wrapper={{ className: 'size-full' }}
        placeholder="blur"
        blurDataURL={ColorLogoEmblem.blurDataURL}
      />
    </motion.div>
  );
}
