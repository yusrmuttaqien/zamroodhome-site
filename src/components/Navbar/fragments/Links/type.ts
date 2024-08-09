import type { ReactNode } from 'react';
import type { LinkProps } from '@/components/Link/type';

export type LinksProps = {
  className?: string;
};
export type NavLinkLookProps = {
  look?: 'navLinkLook' | 'button';
  children: ReactNode;
} & Omit<LinkProps, 'children'>;
