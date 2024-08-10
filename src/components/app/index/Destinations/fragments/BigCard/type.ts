import type { ProductsStructure } from '@/hooks/products/type';

export type BigCardProps = {
  className?: string;
  content: ProductsStructure['lists'][0];
};
export type LoopingImageProps = {
  content: ProductsStructure['lists'][0]['images'];
};
export type InteractiveParams = {
  content: ProductsStructure['lists'][0]['images'];
};
