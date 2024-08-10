import Link from '@/components/Link';
import Image from '@/components/Image';
import MonoLogo from '@/contents/images/mono-logo.png';
import ArrowTR from './contents/svgs/arrow-tr.svg';
import classMerge from '@/utils/classMerge';
import BG from './contents/images/bg.jpeg';
import type { MoreBannerProps } from './type';

export default function MoreBanner(props: MoreBannerProps) {
  const { className } = props;

  return (
    <figure className={classMerge('wrapper', className)}>
      <div
        className={classMerge(
          'relative p-6 isolate flex justify-between items-center',
          'md-700-only:flex-col gap-4'
        )}
      >
        <Image
          src={BG}
          alt="More Banner Background"
          className="object-cover brightness-[60%]"
          draggable={false}
          wrapper={{ className: 'absolute inset-0 z-0 pointer-events-none' }}
        />
        <Image
          src={MonoLogo}
          alt="Zamrood Logo"
          draggable={false}
          wrapper={{ className: 'h-[3.375rem] w-[9.1069rem] pointer-events-none' }}
        />
        <figcaption className="relative text-white space-y-2">
          <p
            className={classMerge(
              'text-clamp-[14_16_430_1440] md-700-only:max-w-[18.75rem]',
              'md-700-only:mx-auto text-center'
            )}
          >
            Want to see other destinations? Check us out at our website
          </p>
          <Link
            href="https://pandooin.com/"
            target="_blank"
            className={classMerge(
              'flex items-center gap-2 w-max font-bold underline md-700-only:mx-auto',
              'text-clamp-[16_20_430_1440] lowercase md-700:ml-auto'
            )}
          >
            Pandooin.com
            <Image
              src={ArrowTR}
              alt="Go to Pandooin.com"
              draggable={false}
              wrapper={{ className: 'size-clamp-[16_20_430_1440]' }}
            />
          </Link>
        </figcaption>
      </div>
    </figure>
  );
}
