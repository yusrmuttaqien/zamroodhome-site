import { StaticImageData } from 'next/image';

export type ArticleCardProps = {
  className?: string;
  content: {
    href: string;
    images: string | StaticImageData; // TODO: update this type
    title: string;
  };
};
