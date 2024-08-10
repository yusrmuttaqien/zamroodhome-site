import { NAVLOOKSLINK_STYLES } from './';
import type { ReactNode } from 'react';
import type { LinkProps } from '@/components/Link/type';

export type NavLinkLookProps = {
  look?: 'navLinkLook' | 'button';
  children: ReactNode;
  className?: Partial<typeof NAVLOOKSLINK_STYLES.slots>;
} & Omit<LinkProps, 'children' | 'className'>;
