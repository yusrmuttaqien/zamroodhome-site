import { StaticImageData } from 'next/image';

export type ExperienceListProps = {
  className?: string;
};
export type ListProps = {
  content: {
    title: string;
    description: string;
    ilustration: StaticImageData;
  };
};
