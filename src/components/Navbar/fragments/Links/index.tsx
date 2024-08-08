import Link from '../Link';
import classMerge from '@/utils/classMerge';
import untranslated from '../../contents/untranslated';
import type { LinksProps } from './type';

export default function Links(props: LinksProps) {
  const { className } = props;
  const { navLinks } = untranslated;

  return (
    <div className={classMerge('flex gap-6 items-center', className)}>
      {Object.entries(navLinks).map(([key, value]) => {
        return (
          <Link key={key} {...value}>
            {key}
          </Link>
        );
      })}
    </div>
  );
}
