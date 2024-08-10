'use client';

import { motion } from 'framer-motion';
import useInteractive from './hooks/interactive';
import HashHost from '@/components/HashHost';
import Image from '@/components/Image';
import Link from '@/components/Link';
import { buttonVariants } from '@/components/Button';
import classMerge from '@/utils/classMerge';
import BG from './contents/images/bg.jpeg';
import { ID } from './constant';

export default function Hero() {
  const { scope, bgStyle } = useInteractive();

  return (
    <section
      id={ID}
      ref={scope}
      className={classMerge(
        'relative h-[100svh] -mt-[var(--navbar-height)] isolate flex items-center xl:items-end',
        'min-h-[31.25rem]'
      )}
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div style={bgStyle} className="size-full">
          <Image
            src={BG}
            alt="Hero"
            draggable={false}
            className="object-cover"
            placeholder="blur"
            loading="eager"
          />
        </motion.div>
      </div>
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
        <Link
          href="/#destinations"
          className={buttonVariants({
            theme: 'white',
            look: 'outline',
            className: 'mt-6 hoverable:hover:bg-brown hoverable:hover:border-brown inline-block',
          })}
        >
          Take me there
        </Link>
        <HashHost hash={`#${ID}`} applyPathnameOnly />
      </div>
    </section>
  );
}
