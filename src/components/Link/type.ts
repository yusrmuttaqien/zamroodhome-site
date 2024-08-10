import type { ReactNode, AnchorHTMLAttributes } from 'react';
import type { LinkProps as NextLinkProps } from 'next/link';

type ChildrenProps = {
  isActive: boolean;
};
export type LinkProps = {
  children: ReactNode | ((props: ChildrenProps) => ReactNode);
  className?: string;
} & Omit<NextLinkProps, 'className' | 'style' | 'children'> &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof NextLinkProps | 'className' | 'style' | 'children'
  >;
