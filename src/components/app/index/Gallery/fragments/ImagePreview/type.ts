import type { Dispatch, ReactNode, SetStateAction } from 'react';
import type { ImageEntity } from '@/types/data';

export type PreviewProps = {
  src: ImageEntity;
};
export type ImagePreviewProps = {
  state: [ImageEntity | null, Dispatch<SetStateAction<ImageEntity | null>>];
};
