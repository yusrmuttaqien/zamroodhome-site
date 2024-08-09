import type { ProductsStructure } from '@/hooks/products/type';

export type StackedCarouselProps = {
  className?: string;
  content: ProductsStructure['galleries'];
};
export type CarouselProps = {
  name: string;
  className?: string;
  content: ProductsStructure['galleries'];
};
