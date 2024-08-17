import plugin from 'tailwindcss/plugin';
import clamp from './src/utils/clamp';
import {
  COLOR_BLACK,
  COLOR_BROWN,
  COLOR_GREEN,
  COLOR_WHITE,
  COLOR_GREY,
} from './src/constants/tailwind-config';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/svgs/**/*.{js,ts,jsx,tsx,mdx}',
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
        'md-500-only': { max: '499px' },
        'md-500': '500px',
        'md-550-only': { max: '549px' },
        'md-550': '550px',
        'md-600-only': { max: '599px' },
        'md-600': '600px',
        'md-700-only': { max: '699px' },
        'md-700': '700px',
        'md-820-only': { max: '819px' },
        'md-820': '820px',
        'md-only': { max: '767px' },
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
        grey: COLOR_GREY,
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    plugin(({ addComponents, matchUtilities, addUtilities, theme }) => {
      addUtilities({
        '.mask-navbar': {
          maskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, .8) 90%, transparent 100%)',
        },
        '.transform-preserve3d': { transformStyle: 'preserve-3d' },
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
          fontFamily: theme('fontFamily.albert-sans'),
          fontSize: clamp({ minValue: 14, maxValue: 16, minViewport: 430, maxViewport: 1440 }),
        },
        '.wrapper': {
          paddingInline: '1rem',
          width: '100%',
          maxWidth: '68.5rem',
          marginInline: 'auto',
          '@media (min-width:1280px)': {
            paddingInline: '0rem',
            marginInline: 'auto',
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
          'mb-clamp': (size) => {
            const [minValue, maxValue, minViewport, maxViewport] = size.split(' ').map(Number);

            return { marginBottom: clamp({ minValue, maxValue, minViewport, maxViewport }) };
          },
          'h-clamp': (size) => {
            const [minValue, maxValue, minViewport, maxViewport] = size.split(' ').map(Number);

            return { height: clamp({ minValue, maxValue, minViewport, maxViewport }) };
          },
          'max-w-clamp': (size) => {
            const [minValue, maxValue, minViewport, maxViewport] = size.split(' ').map(Number);

            return { maxWidth: clamp({ minValue, maxValue, minViewport, maxViewport }) };
          },
          'my-clamp': (size) => {
            const [minValue, maxValue, minViewport, maxViewport] = size.split(' ').map(Number);

            return { marginBlock: clamp({ minValue, maxValue, minViewport, maxViewport }) };
          },
          'p-clamp': (size) => {
            const [minValue, maxValue, minViewport, maxViewport] = size.split(' ').map(Number);

            return { padding: clamp({ minValue, maxValue, minViewport, maxViewport }) };
          },
          'leading-clamp': (size) => {
            const [minValue, maxValue, minViewport, maxViewport] = size.split(' ').map(Number);

            return { lineHeight: clamp({ minValue, maxValue, minViewport, maxViewport }) };
          },
          'size-clamp': (size) => {
            const [minValue, maxValue, minViewport, maxViewport] = size.split(' ').map(Number);
            const clampString = clamp({ minValue, maxValue, minViewport, maxViewport });

            return { height: clampString, width: clampString };
          },
        },
        { values: { none: '0 0 0 0' } }
      );
      matchUtilities(
        {
          perspective: (value) => {
            return { perspective: value };
          },
        },
        { values: { '5000': '5000px' } }
      );
    }),
  ],
};
export default config;
