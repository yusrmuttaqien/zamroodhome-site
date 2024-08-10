'use client';

import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import useInteractive from './hooks/interactive';
import Image from '@/components/Image';
import classMerge from '@/utils/classMerge';
import { VARIANTS } from './constant';
import type { SingleProps } from './type';

export default function Single(props: SingleProps) {
  const { className, content, state } = props;
  const [isOpen, setIsOpen] = state;
  const { scope, active } = useInteractive({ content, pause: !!isOpen });

  return (
    <div ref={scope} className={classMerge('relative mx-9 perspective-5000', className)}>
      <div className="h-[16rem] w-full transform-preserve3d">
        <AnimatePresence initial={false}>
          <motion.div key={active.key} className="absolute inset-0 cursor-pointer" {...VARIANTS}>
            <Image
              src={active.content.src}
              draggable={false}
              className="object-cover"
              alt={active.content.alt}
              onClick={() => setIsOpen(active.content)}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
