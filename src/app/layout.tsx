import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/providers';
import classMerge from '@/utils/classMerge';
import { metadata as Metadata, unbounded, albertSans, theSignature } from '@/constants/app';
import type { RootLayoutProps } from '@/types/app';
import '@/styles/index.css';

export const metadata = Metadata;
export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={classMerge(unbounded.variable, albertSans.variable, theSignature.variable)}>
        <Providers>
          <div id="portal" className="z-30 fixed inset-0 pointer-events-none" />
          <Navbar className="z-20" />
          <main className="z-10">{children}</main>
          <Footer className="z-10" />
        </Providers>
      </body>
    </html>
  );
}
