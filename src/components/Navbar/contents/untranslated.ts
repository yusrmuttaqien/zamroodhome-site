import type { NavLinkLookProps } from '../fragments/Links/type';

export default {
  navLinks: {
    Homepage: { href: '/', look: 'navLinkLook' } as NavLinkLookProps,
    'Customize your trip': {
      href: '/#customize-your-trip',
      look: 'navLinkLook',
    } as NavLinkLookProps,
    Destination: {
      href: 'https://www.zamrood.com/destination',
      look: 'navLinkLook',
      target: '_blank',
    } as NavLinkLookProps,
    Article: { href: '/#article', look: 'navLinkLook' } as NavLinkLookProps,
    'Need assistance?': {
      href: 'https://wa.me/6283831556160?text=Hi,%20I%20wanna%20ask%20question%20about%20Zamrood',
      look: 'button',
      className: { link: 'ml-6' },
      target: '_blank',
    } as NavLinkLookProps,
  } as const,
};
