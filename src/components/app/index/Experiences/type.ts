import { StaticImageData } from 'next/image';

export type ExperienceProps = {
  content: {
    title: string;
    description: string;
    ilustration: StaticImageData;
  };
};
