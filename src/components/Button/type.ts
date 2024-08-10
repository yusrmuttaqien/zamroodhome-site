import type { HTMLAttributes, ReactNode } from 'react';

export type ButtonProps = {
  theme?: 'white' | 'green';
  look?: 'outline' | 'solid';
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;
