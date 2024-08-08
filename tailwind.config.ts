import plugin from 'tailwindcss/plugin';
import clamp from './src/utils/clamp';
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
        albertSans: ['var(--font-albert-sans)', 'sans-serif'],
        unbounded: ['var(--font-unbounded)', 'sans-serif'],
        theSignature: ['var(--font-the-signature)', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(({ addComponents, matchUtilities, addUtilities, theme }) => {
      addComponents({
        '.body': {
          fontFamily: theme('fontFamily.albertSans'),
          fontSize: clamp({ minValue: 14, maxValue: 16, minViewport: 430, maxViewport: 1440 }),
        },
      });
    }),
  ],
};
export default config;
