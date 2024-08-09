import { useQuery } from '@tanstack/react-query';
import { getArticles } from '@/apis/articles';
import type { ArticleStructure, DataStructure } from './type';

export default function useArticles() {
  const { data, ...queries } = useQuery<DataStructure>({
    queryKey: ['articles'],
    queryFn: () => getArticles('', _transform),
  });
  const { articles = [] } = data || {};

  function _transform(data: any) {
    const { data: source = [], ...sources } = data;
    let articles = [] as ArticleStructure[];

    source.forEach((data: any) => {
      articles.push({
        image: {
          alt: data.featured_image_caption,
          src: data.featured_image,
          id: data.id,
        },
        title: data.title,
        href: `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/article/${data.slug}`,
      });
    });

    return { ...sources, articles };
  }

  return { ...queries, articles };
}
