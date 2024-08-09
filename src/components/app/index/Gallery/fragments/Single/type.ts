import type { ProductsStructure } from '@/hooks/products/type';

export type SingleProps = {
  className?: string;
  content: ProductsStructure['galleries'];
};
export type InteractiveParams = {
  content: ProductsStructure['galleries'];
};
