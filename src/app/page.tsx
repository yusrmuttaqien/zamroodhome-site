import { Fragment } from 'react';
import Image from '@/components/Image';
import Hero from '@/components/app/index/Hero';
import Experiences from '@/components/app/index/Experiences';
import Destinations from '@/components/app/index/Destinations';
import Gallery from '@/components/app/index/Gallery';
import MoreBanner from '@/components/app/index/MoreBanner';
import Articles from '@/components/app/index/Articles';
import ColorSeparator from '@/contents/svgs/color-separator.svg';

export default function Homepage() {
  return (
    <Fragment>
      <Hero />
      <Experiences />
      <Image
        alt="color-separator"
        src={ColorSeparator}
        draggable={false}
        wrapper={{
          className:
            'h-clamp-[36_97_430_1440] wrapper my-clamp-[72_94_430_1440] pointer-events-none',
        }}
      />
      <Destinations className="mb-clamp-[32_72_430_1440]" />
      <Gallery />
      <MoreBanner className="mt-[3.375rem]" />
      <Articles className="my-[4.875rem] md-600:my-[4.5rem]" />
    </Fragment>
  );
}
