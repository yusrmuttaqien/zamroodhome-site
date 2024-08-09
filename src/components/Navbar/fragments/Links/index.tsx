'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { tv } from 'tailwind-variants';
import Link from '@/components/Link';
import { buttonVariants } from '@/components/Button';
import classMerge from '@/utils/classMerge';
import untranslated from '../../contents/untranslated';
import type { LinksProps, NavLinkLookProps } from './type';

const linkVariants = tv({
  base: classMerge(
    'font-bold font-variation-settings-["wght"_700] capitalize',
    'text-white px-6 py-[1.0938rem] transition-colors nav-link'
  ),
  variants: {
    look: {
      navLinkLook: 'relative',
      button: buttonVariants({
        theme: 'white',
        look: 'outline',
        class: 'hoverable:hover:!text-white',
      }),
    },
  },
});

export default function Links(props: LinksProps) {
  const { className } = props;
  const { navLinks } = untranslated;

  return (
    <div className={classMerge('flex gap-6 items-center', className)}>
      {Object.entries(navLinks).map(([key, value]) => {
        return (
          <NavLooksLink key={key} {...value}>
            {key}
          </NavLooksLink>
        );
      })}
    </div>
  );
}

function NavLooksLink(props: NavLinkLookProps) {
  const { children, look = 'navLinkLook', className, ...rest } = props;
  const isNavLinkLook = look === 'navLinkLook';

  return (
    <Link {...rest} className={linkVariants({ look, className })}>
      {({ isActive }) => {
        return (
          <Fragment>
            {children}
            {isActive && isNavLinkLook && (
              <motion.span
                layoutId="nav-link-active"
                className="absolute bottom-0 left-0 right-0 h-[0.125rem] bg-[currentColor]"
              />
            )}
          </Fragment>
        );
      }}
    </Link>
  );
}
