'use client';

import NextLink from 'next/link';
import { tv } from 'tailwind-variants';
import { motion } from 'framer-motion';
import { Fragment, useState } from 'react';
import { useParams } from 'next/navigation';
import { useIsomorphicLayoutEffect } from 'framer-motion';
import { buttonVariants } from '@/components/Button';
import classMerge from '@/utils/classMerge';
import type { LinkProps, NavLinkLookProps } from './type';

const linkVariants = tv({
  base: classMerge(
    'font-bold font-variation-settings-["wght"_700] capitalize',
    'text-white px-6 py-[1.0938rem] transition-colors nav-link'
  ),
  variants: {
    look: {
      navLinkLook: 'relative [--test:1]',
      button: buttonVariants({
        theme: 'white',
        look: 'outline',
        class: 'hoverable:hover:!text-white',
      }),
    },
  },
});

export default function Link(props: LinkProps) {
  const { children, href, look = 'navLinkLook', className, ...rest } = props;
  const params = useParams();
  const [isActive, setIsActive] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const pathHash = window.location.pathname + window.location.hash;

    setIsActive(pathHash === href);
  }, [params]);

  return (
    <NextLink {...rest} scroll={false} href={href} className={linkVariants({ look, className })}>
      {look === 'navLinkLook' ? (
        <NavLinkLook isActive={isActive}>{children}</NavLinkLook>
      ) : (
        children
      )}
    </NextLink>
  );
}

export function NavLinkLook(props: NavLinkLookProps) {
  const { children, isActive } = props;

  return (
    <Fragment>
      {children}
      {isActive && (
        <motion.span
          layoutId="nav-link-active"
          className="absolute bottom-0 left-0 right-0 h-[0.125rem] bg-[currentColor]"
        />
      )}
    </Fragment>
  );
}
