'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useIsomorphicLayoutEffect, inView } from 'framer-motion';
import type { HashHostProps } from './type';

export default function HashHost(props: HashHostProps) {
  const { hash, applyPathnameOnly } = props;
  const router = useRouter();
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    const watcher = inView(hash, _inView);

    function _inView() {
      const completeEndpoint = applyPathnameOnly ? pathname : pathname + hash;

      router.replace(completeEndpoint, { scroll: false });

      return () => {};
    }

    return () => {
      watcher();
    };
  }, []);

  return null;
}
