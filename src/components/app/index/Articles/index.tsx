import ArticleBoxes from './fragments/ArticleBoxes';
import classMerge from '@/utils/classMerge';
import type { ArticlesProps } from './type';

export default function Articles(props: ArticlesProps) {
  const { className } = props;

  return (
    <section
      className={classMerge(
        'wrapper space-y-6 scroll-m-[calc(3rem_+_var(--navbar-height))]',
        className
      )}
      id="article"
    >
      <div className="space-y-2">
        <h2 className="text-clamp-[22_36_430_1440] font-unbounded font-bold text-green-light leading-clamp-[27_44_430_1440">
          Articles
        </h2>
        <p className="text-clamp-[16_24_430_1440] text-green-light leading-clamp-[19_28_430_1440]">
          Our curated writings, offering something for every reader.
        </p>
      </div>
      <ArticleBoxes />
    </section>
  );
}
