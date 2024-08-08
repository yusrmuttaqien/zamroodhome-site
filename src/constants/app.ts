import localFont from 'next/font/local';
import type { Metadata } from 'next';

export const albertSans = localFont({
  src: '../fonts/albert-sans.woff2',
  style: 'normal',
  display: 'swap',
  variable: '--font-albert-sans',
});
export const unbounded = localFont({
  src: '../fonts/unbounded.woff2',
  style: 'normal',
  display: 'swap',
  variable: '--font-unbounded',
});
export const theSignature = localFont({
  src: '../fonts/the-signature.ttf',
  style: 'normal',
  weight: '400',
  display: 'swap',
  variable: '--font-the-signature',
});
export const metadata: Metadata = {
  title: 'Zamrood by Pandooin | Premium Travel Experiences in Indonesia',
  description:
    "Experience the finest that Indonesia has to offer with Zamrood's curated selection of premium trips, ensuring comfort every step of the way.",
  generator: 'Next.js',
  applicationName: 'Zamrood',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'PT Teknologi Pandu Wisata', url: 'zamrood@pandooin.com' }],
  creator: 'Pandooin',
  publisher: 'Yusril Muttaqien',
  openGraph: {
    type: 'website',
    url: 'https://zamrood.pandooin.com',
    title: 'Zamrood by Pandooin',
    description:
      "Experience the finest that Indonesia has to offer with Zamrood's curated selection of premium trips, ensuring comfort every step of the way.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zamrood by Pandooin',
    description:
      "Experience the finest that Indonesia has to offer with Zamrood's curated selection of premium trips, ensuring comfort every step of the way.",
  },
};
