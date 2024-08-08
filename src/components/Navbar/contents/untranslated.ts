export default {
  navLinks: {
    Homepage: { href: '/', look: 'navLinkLook' },
    'Customize your trip': { href: '/#customize-your-trip', look: 'navLinkLook' },
    Destination: {
      href: 'https://www.zamrood.com/destination',
      look: 'navLinkLook',
      target: '_blank',
    },
    Article: { href: '/#article', look: 'navLinkLook' },
    'Need assistance?': {
      href: 'https://wa.me/6283831556160?text=Hi,%20I%20wanna%20ask%20question%20about%20Zamrood',
      look: 'button',
      className: 'ml-6',
      target: '_blank',
    },
  } as const,
};
