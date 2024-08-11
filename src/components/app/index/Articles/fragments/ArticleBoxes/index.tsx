'use client';

import useArticles from '@/hooks/articles';
import StickyMessage from '@/components/StickyMessage';
import ArticleCard from '../ArticleCard';
import classMerge from '@/utils/classMerge';
import type { CSSProperties } from 'react';

const CARD_PRESET_STYLE = [
  'md-600:row-span-2 md-600:col-span-2',
  '',
  '',
  'md-600:col-start-3',
  'md-600:col-start-4',
];

export default function ArticleBoxes() {
  const { articles, isLoading } = useArticles();
  const isEmpty = articles.length === 0;
  const isAvailable = !isLoading && !isEmpty;
  const isMore = articles.length > 5;
  const firstFive = articles.slice(0, 5);
  const next = articles.slice(6);

  if (!isAvailable) {
    return (
      <StickyMessage className={{ wrapper: 'h-[calc(100svh_-_var(--navbar-height))]' }}>
        <p className="text-center font-medium mt-6">
          {isLoading && 'Loading articles'}
          {!isLoading && 'No articles found'}
        </p>
      </StickyMessage>
    );
  }

  return (
    <div
      style={{ '--left-1': 'calc(9.375rem / 2)', '--left-2': 'calc(50% / 2)' } as CSSProperties}
      className="space-y-4"
    >
      <div
        className={classMerge(
          'grid gap-4 grid-rows-[repeat(5,_21.375rem)] grid-cols-1',
          'md-600:grid-rows-[repeat(2,_12.5rem)]',
          'md-600:grid-cols-[repeat(2,_minmax(calc(var(--left-1)),_calc(var(--left-2))))_repeat(2,_minmax(11.25rem,_1fr))]',
          'xl-1096:grid-rows-[repeat(2,_21.6875rem)]'
        )}
      >
        {firstFive.map((article, idx) => (
          <ArticleCard key={idx} className={CARD_PRESET_STYLE[idx]} content={article} />
        ))}
      </div>
      {isMore && (
        <div
          className={classMerge(
            'grid gap-4 auto-rows-[21.375rem] grid-cols-1',
            'md-700:auto-rows-[12.5rem]',
            'md-700:grid-cols-[repeat(3,_minmax(11.25rem,_1fr))]',
            'md-820:grid-cols-[repeat(2,_minmax(calc(var(--left-1)),_calc(var(--left-2)))),_repeat(2,_minmax(11.25rem,_1fr))]',
            'xl-1096:auto-rows-[21.6875rem]'
          )}
        >
          {next.map((article, idx) => (
            <ArticleCard key={idx} content={article} />
          ))}
        </div>
      )}
    </div>
  );
}
