'use client';

import { useState } from 'react';
import Image from '@/components/Image';
import MenuContent from '../MenuContent';
import Hamburger from '../../contents/svgs/hamburger.svg';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function _open() {
    const body = document.body;

    setIsOpen(true);
    body.classList.add('overflow-hidden');
  }

  return (
    <button className="h-[3.125rem] aspect-square xl:hidden" onClick={_open}>
      <Image
        src={Hamburger}
        alt="Sidebar hamburger toggle"
        draggable={false}
        loading="eager"
        wrapper={{ className: 'pointer-events-none' }}
      />
      <MenuContent state={[isOpen, setIsOpen]} />
    </button>
  );
}
