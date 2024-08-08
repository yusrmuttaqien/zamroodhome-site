import plugin from 'tailwindcss/plugin';
import clamp from './src/utils/clamp';
import {
  COLOR_BLACK,
  COLOR_BROWN,
  COLOR_GREEN,
  COLOR_WHITE,
} from './src/constants/tailwind-config';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'albert-sans': ['var(--font-albert-sans)', 'sans-serif'],
        unbounded: ['var(--font-unbounded)', 'sans-serif'],
        'the-signature': ['var(--font-the-signature)', 'sans-serif'],
      },
      screens: {
        sm: '430px',
        'xl-1096-only': { max: '1095px' },
        'xl-1096': '1096px',
        'xl-only': { max: '1279px' },
        '2xl-only': { max: '1439px' },
        '2xl': '1440px',
        hoverable: { raw: '(hover: hover)' },
        unhoverable: { raw: '(hover: none)' },
      },
      colors: {
        green: COLOR_GREEN,
        brown: COLOR_BROWN,
        black: COLOR_BLACK,
        white: COLOR_WHITE,
      },
    },
  },
  plugins: [
    plugin(({ addComponents, matchUtilities, addUtilities, theme }) => {
      addUtilities({
        '.transform-preserve3d': { transformStyle: 'preserve-3d' },
        '.mask-navbar': {
          maskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, .8) 90%, transparent 100%)',
        },
      });
      matchUtilities(
        {
          'font-variation-settings': (value) => {
            return { fontVariationSettings: value };
          },
        },
        { values: { none: '' } }
      );
      addComponents({
        '.body': {
          fontFamily: theme('fontFamily.albertSans'),
          fontSize: clamp({ minValue: 14, maxValue: 16, minViewport: 430, maxViewport: 1440 }),
        },
        '.wrapper': {
          paddingInline: '1rem',
          width: '100%',
          '@media (min-width:1280px)': {
            paddingInline: '0rem',
            marginInline: 'auto',
            maxWidth: '68.5rem',
          },
        },
      });
      matchUtilities(
        {
          'gap-clamp': (size) => {
            const [minValue, maxValue, minViewport, maxViewport] = size.split(' ').map(Number);

            return { gap: clamp({ minValue, maxValue, minViewport, maxViewport }) };
          },
          'text-clamp': (size) => {
            const [minValue, maxValue, minViewport, maxViewport] = size.split(' ').map(Number);

            return { fontSize: clamp({ minValue, maxValue, minViewport, maxViewport }) };
          },
          'px-clamp': (size) => {
            const [minValue, maxValue, minViewport, maxViewport] = size.split(' ').map(Number);

            return { paddingInline: clamp({ minValue, maxValue, minViewport, maxViewport }) };
          },
          'py-clamp': (size) => {
            const [minValue, maxValue, minViewport, maxViewport] = size.split(' ').map(Number);

            return { paddingBlock: clamp({ minValue, maxValue, minViewport, maxViewport }) };
          },
          'mt-clamp': (size) => {
            const [minValue, maxValue, minViewport, maxViewport] = size.split(' ').map(Number);

            return { marginTop: clamp({ minValue, maxValue, minViewport, maxViewport }) };
          },
        },
        { values: { none: '0 0 0 0' } }
      );
    }),
  ],
};
export default config;
