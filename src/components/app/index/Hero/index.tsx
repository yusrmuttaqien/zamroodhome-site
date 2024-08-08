'use client';

import useInteractive from './hooks/interactive';
import Image from '@/components/Image';
import Button from '@/components/Button';
import classMerge from '@/utils/classMerge';
import BG from './contents/images/bg.jpeg';

export default function Hero() {
  const { scope } = useInteractive();

  return (
    <section
      ref={scope}
      className={classMerge(
        'relative h-[100svh] -mt-[var(--navbar-height)] isolate flex items-center xl:items-end',
        'min-h-[31.25rem]'
      )}
    >
      <Image
        src={BG}
        alt="Hero"
        draggable={false}
        className="object-cover"
        loading="eager"
        wrapper={{ className: 'absolute inset-0 z-0' }}
      />
      <div className="relative wrapper xl:mb-[7.9375rem] text-white xl-only:text-center">
        <h1 className="text-clamp-[86_128_430_1440] text-brown font-the-signature">
          Premium Travel
        </h1>
        <h2 className="font-unbounded font-bold text-clamp-[24_54_430_1440] -mt-[2em] xl:-mt-[1.7em]">
          Beyond expectation
        </h2>
        <p className="max-w-[37.5rem] text-clamp-[16_24_430_1440] xl-only:mx-auto">
          Experience the finest that Indonesia has to offer with our curated selection of premium
          trips, ensuring comfort every step of the way
        </p>
        <Button
          theme="white"
          look="outline"
          className="mt-6 hoverable:hover:bg-brown hoverable:hover:border-brown"
        >
          Take me there
        </Button>
      </div>
    </section>
  );
}
