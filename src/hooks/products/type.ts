import type { ImageEntity, GenericResponse } from '@/types/data';

export type ProductsStructure = {
  galleries: ImageEntity[];
  lists: {
    images: ImageEntity[];
    duration: string;
    title: string;
    organizedBy: string;
    description: string;
    prices: {
      initial: string;
      discount: string;
    };
    href: string;
  }[];
};
export type DataStructure = {
  galleries: ProductsStructure['galleries'];
  lists: ProductsStructure['lists'];
} & GenericResponse;
