import type { MotionProps } from 'framer-motion';

export const VARIANTS: MotionProps = {
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
  transition: { duration: 0.3 },
};
