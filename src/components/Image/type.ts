import type { HTMLAttributes } from 'react';
import type { ImageProps as NextImageProps, StaticImageData } from 'next/image';

export type ImageProps = {
  wrapper?: HTMLAttributes<HTMLDivElement>;
  src: string | StaticImageData;
  alt: string;
} & Omit<NextImageProps, 'src' | 'alt'>;
