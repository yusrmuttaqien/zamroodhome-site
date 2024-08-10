import type { ImageEntity, GenericResponse } from '@/types/data';

export type ArticleStructure = {
  image: ImageEntity;
  title: string;
  href: string;
};
export type DataStructure = {
  articles: ArticleStructure[];
} & GenericResponse;
