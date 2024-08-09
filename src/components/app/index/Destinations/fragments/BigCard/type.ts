import type { StaticImageData } from 'next/image';

export type BigCardProps = {
  className?: string;
  content: {
    images: string | StaticImageData; // TODO: update this type
    duration: string;
    title: string;
    organizeBy: string;
    description: string;
    prices: {
      initial: string;
      final: string;
    };
    href: string;
  };
};
