import type { ReactNode, AnchorHTMLAttributes } from 'react';
import type { LinkProps as NextLinkProps } from 'next/link';

export type LinkProps = {
  children: ReactNode;
  className?: string;
  look?: 'navLinkLook' | 'button';
} & Omit<NextLinkProps, 'className' | 'style'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps | 'className' | 'style'>;

export type NavLinkLookProps = {
  children: ReactNode;
  isActive: boolean;
};
