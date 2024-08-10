import { tv } from 'tailwind-variants';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Link from '@/components/Link';
import classMerge from '@/utils/classMerge';
import { buttonVariants } from '@/components/Button';
import type { NavLinkLookProps } from './type';

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

export const NAVLOOKSLINK_STYLES = tv({
  slots: {
    link: '',
    indicator: 'absolute bottom-0 left-0 right-0 h-[0.125rem] bg-[currentColor]',
  },
});
export default function NavLooksLink(props: NavLinkLookProps) {
  const { children, look = 'navLinkLook', className, ...rest } = props;
  const isNavLinkLook = look === 'navLinkLook';
  const { link, indicator } = NAVLOOKSLINK_STYLES();

  return (
    <Link
      {...rest}
      className={linkVariants({ look, className: link({ className: className?.link }) })}
    >
      {({ isActive }) => {
        return (
          <Fragment>
            {children}
            {isActive && isNavLinkLook && (
              <motion.span
                layoutId="nav-link-active"
                className={indicator({ className: className?.indicator })}
              />
            )}
          </Fragment>
        );
      }}
    </Link>
  );
}
