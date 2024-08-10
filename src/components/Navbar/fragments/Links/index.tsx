'use client';

import NavLooksLink from '../NavLookLink';
import classMerge from '@/utils/classMerge';
import untranslated from '../../contents/untranslated';
import type { LinksProps } from './type';

export default function Links(props: LinksProps) {
  const { className } = props;
  const { navLinks } = untranslated;

  return (
    <div className={classMerge('flex gap-6 items-center', className)}>
      {Object.entries(navLinks).map(([key, value], idx, arr) => {
        const isLast = arr.length - 1 === idx;

        return (
          <NavLooksLink {...value} key={key} className={{ link: classMerge(isLast && 'ml-6') }}>
            {key}
          </NavLooksLink>
        );
      })}
    </div>
  );
}
