import type { Dispatch, SetStateAction } from 'react';
import type { ProductsStructure } from '@/hooks/products/type';
import type { ImageEntity } from '@/types/data';

export type SingleProps = {
  className?: string;
  content: ProductsStructure['galleries'];
  state: [ImageEntity | null, Dispatch<SetStateAction<ImageEntity | null>>];
};
export type InteractiveParams = {
  content: ProductsStructure['galleries'];
  pause?: boolean;
};
