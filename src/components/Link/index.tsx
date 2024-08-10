'use client';

import NextLink from 'next/link';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useIsomorphicLayoutEffect } from 'framer-motion';
import type { LinkProps } from './type';

export default function Link(props: LinkProps) {
  const { children, href, className, ...rest } = props;
  const params = useParams();
  const [isActive, setIsActive] = useState(false);
  const isChildrenFunction = typeof children === 'function';

  useIsomorphicLayoutEffect(() => {
    const pathHash = window.location.pathname + window.location.hash;

    setIsActive(pathHash === href);
  }, [params]);

  return (
    <NextLink {...rest} href={href} className={className}>
      {isChildrenFunction ? children({ isActive }) : children}
    </NextLink>
  );
}
