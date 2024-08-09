'use client';

import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import useInteractive from './hooks/interactive';
import Image from '@/components/Image';
import classMerge from '@/utils/classMerge';
import { VARIANTS } from './constant';
import type { SingleProps } from './type';

export default function Single(props: SingleProps) {
  const { className, content } = props;
  const { scope, active } = useInteractive({ content });

  return (
    <div ref={scope} className={classMerge('relative mx-9 perspective-5000', className)}>
      <div className="h-[16rem] w-full transform-preserve3d">
        <AnimatePresence initial={false}>
          <motion.div key={active.key} className="absolute inset-0" {...VARIANTS}>
            <Image
              src={active.content}
              draggable={false}
              className="object-cover"
              alt="image-gallery-single-0"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
