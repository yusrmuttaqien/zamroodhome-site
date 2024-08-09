import ArticleCard from '../ArticleCard';
import arrayOfN from '@/utils/arrayOfN';
import classMerge from '@/utils/classMerge';
import BG from '@/components/app/index/Hero/contents/images/bg.jpeg';
import type { ArticleCardProps } from '../ArticleCard/type';

const DATA_DUMMY: ArticleCardProps['content'][] = [
  {
    href: '#',
    images: BG,
    title: '7 Best Places to Dive in Indonesia: From Bali to Wakatobi',
  },
  {
    href: '#',
    images: BG,
    title: 'The Phinisi Experience in Labuan Bajo: Sailing the Waters of Komodo National Park',
  },
];
const CARD_PRESET_STYLE = ['md-600:row-span-2', '', '', 'md-600:col-start-2', 'md-600:col-start-3'];

export default function ArticleBoxes() {
  const arrayOf5 = arrayOfN({ length: 5, array: DATA_DUMMY });

  return (
    <div
      className={classMerge(
        'grid gap-4 grid-rows-[repeat(5,_21.375rem)] grid-cols-1',
        'md-600:grid-rows-[repeat(2,_12.5rem)]',
        'md-600:grid-cols-[minmax(9.375rem,_50%)_repeat(2,_minmax(11.25rem,_1fr))]',
        'xl-1096:grid-rows-[repeat(2,_21.6875rem)]'
      )}
    >
      {arrayOf5.map((article, idx) => (
        <ArticleCard key={idx} className={CARD_PRESET_STYLE[idx]} content={article} />
      ))}
    </div>
  );
}
