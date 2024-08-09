import { STICKY_MESSAGE_STYLES } from './';
import type { ReactNode } from 'react';

export type StickyMessageProps = {
  className?: Partial<typeof STICKY_MESSAGE_STYLES.slots>;
  children: ReactNode;
};
