import Link from '../Link';
import classMerge from '@/utils/classMerge';
import { NAV_LINKS } from '@/components/Navbar/constant';
import type { LinksProps } from './type';

export default function Links(props: LinksProps) {
  const { className } = props;

  return (
    <div className={classMerge('flex gap-6 items-center', className)}>
      {Object.entries(NAV_LINKS).map(([key, value]) => {
        return (
          <Link key={key} {...value}>
            {key}
          </Link>
        );
      })}
    </div>
  );
}
