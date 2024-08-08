import { metadata as Metadata, unbounded, albertSans, theSignature } from '@/constants/app';
import classMerge from '@/utils/classMerge';
import type { RootLayoutProps } from '@/types/app';
import '@/styles/index.css';

export const metadata = Metadata;
export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={classMerge(unbounded.variable, albertSans.variable, theSignature.variable)}>
        {children}
      </body>
    </html>
  );
}
