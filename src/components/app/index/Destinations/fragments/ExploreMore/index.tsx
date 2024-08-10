import Link from '@/components/Link';
import Chevron from '@/svgs/Chevron';
import classMerge from '@/utils/classMerge';
import type { ExploreMoreProps } from './type';

export default function ExploreMore(props: ExploreMoreProps) {
  const { className } = props;

  return (
    <Link
      href="https://pandooin.com/id/tailor-made/create?utm_source=zamrood&utm_medium=website&utm_campaign=premium"
      className={classMerge(
        'uppercase text-green-dark hoverable:hover:text-brown flex items-center gap-4',
        className
      )}
      target="_blank"
    >
      <Chevron className="h-[2.2em] aspect-square" />
      Explore more
    </Link>
  );
}
