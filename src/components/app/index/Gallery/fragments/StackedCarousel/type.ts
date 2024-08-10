import type { Dispatch, SetStateAction } from 'react';
import type { ProductsStructure } from '@/hooks/products/type';
import type { ImageEntity } from '@/types/data';

export type StackedCarouselProps = {
  className?: string;
  content: ProductsStructure['galleries'];
  state: Dispatch<SetStateAction<ImageEntity | null>>;
};
export type CarouselProps = {
  name: string;
  className?: string;
  content: ProductsStructure['galleries'];
  state: Dispatch<SetStateAction<ImageEntity | null>>;
};
