import type { MotionProps } from 'framer-motion';

export const ID = 'preview-backdrop';
export const VARIANTS: MotionProps = {
  initial: { z: '-2000px', opacity: 0 },
  animate: { z: '0px', opacity: 1 },
  exit: { z: '-2000px', opacity: 0 },
  transition: { duration: 0.15 },
};
