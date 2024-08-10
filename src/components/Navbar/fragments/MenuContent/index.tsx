import { useState, type MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect, motion, AnimatePresence } from 'framer-motion';
import Image from '@/components/Image';
import { NavLooksLink } from '../Links';
import classMerge from '@/utils/classMerge';
import Close from '../../contents/svgs/close.svg';
import { VARIANTS } from './constant';
import untranslated from '../../contents/untranslated';
import type { MenuContentProps, ContentProps } from './type';

export default function MenuContent(props: MenuContentProps) {
  const { state } = props;
  const [isOpen, setIsOpen] = state;
  const [portal, setPortal] = useState<HTMLElement | null>(null);

  function _close() {
    const body = document.body;

    setIsOpen(false);
    body.classList.remove('overflow-hidden');
  }
  function _backdropClick(e: MouseEvent) {
    e.stopPropagation();
    const targetId = (e.target as HTMLElement).id;

    if (targetId === 'menu-backdrop') {
      _close();
    }
  }

  useIsomorphicLayoutEffect(() => {
    setPortal(document.getElementById('portal'));

    function _resize() {
      const width = window.innerWidth;

      width >= 1280 && _close();
    }

    window.addEventListener('resize', _resize);

    return () => {
      window.removeEventListener('resize', _resize);
    };
  }, []);

  const markup = (
    <motion.div
      id="menu-backdrop"
      style={{
        pointerEvents: isOpen ? 'auto' : 'none',
        backdropFilter: isOpen ? 'blur(10px)' : 'blur(0px)',
      }}
      onClick={_backdropClick}
      className={classMerge(
        'size-full bg-transparent transition-[backdrop-filter] grid',
        'place-items-center cursor-alias duration-300'
      )}
    >
      <AnimatePresence>{isOpen && <Content close={_close} />}</AnimatePresence>
    </motion.div>
  );

  return portal ? createPortal(markup, portal) : null;
}

function Content(props: ContentProps) {
  const { close } = props;
  const { navLinks } = untranslated;

  return (
    <motion.div
      className={classMerge(
        'cursor-default h-full w-1/2 ml-auto bg-white p-4',
        'shadow-[0rem_0.25rem_0.625rem_0rem_#0000001A]'
      )}
      {...VARIANTS}
    >
      <button className="h-[3.125rem] aspect-square ml-auto block" onClick={close}>
        <Image src={Close} alt="Sidebar close toggle" draggable={false} loading="eager" />
      </button>
      <div className="flex flex-col items-center justify-center h-[calc(100%_-_3.125rem)]">
        {Object.entries(navLinks).map(([key, value]) => {
          return (
            <NavLooksLink
              {...value}
              key={key}
              onClick={close}
              className={{ link: 'text-green-dark w-max block' }}
            >
              {key}
            </NavLooksLink>
          );
        })}
      </div>
    </motion.div>
  );
}
