import type { MotionProps } from 'framer-motion';

// TODO: Smooth out the transition
export const VARIANTS: MotionProps = {
  initial: { opacity: 0, z: 1000, zIndex: 2, filter: 'blur(16px)' },
  animate: { opacity: 1, z: 0, filter: 'blur(0)' },
  exit: { opacity: 0, z: -1000, zIndex: 1, filter: 'blur(16px)' },
  transition: { duration: 0.3, delay: 0.3 },
};
export const LOOP_DURATION = 3000;
