import ExploreMore from './fragments/ExploreMore';
import BigCard from './fragments/BigCard';
import SmallCard from './fragments/SmallCard';
import Draggable from './fragments/Draggable';
import type { BigCardProps } from './fragments/BigCard/type';
import BG from '@/components/app/index/Hero/contents/images/bg.jpeg';

const DATA_DUMMY: BigCardProps['content'] = {
  images: BG,
  duration: '7 Days 7 Night',
  title: 'Paradise Gateway: Labuan Bajo',
  organizeBy: 'Organized by Pandooin',
  description:
    "Labuan Bajo is a tropical paradise nestled in the westernmost part of Flores Island, Indonesia. With its stunning landscapes, crystal-clear waters, and vibrant marine life, it's a gateway to explore the mesmerizing Komodo National Park.",
  prices: {
    initial: 'IDR 9,999,999',
    final: 'IDR 5,200,000',
  },
  href: '#',
};

export default function Destinations() {
  return (
    <section className="scroll-m-[var(--navbar-height)]" id="destinations">
      <div className="wrapper">
        <div className="flex md-500-only:flex-col gap-2 md-500:gap-6 md-500:items-center">
          <h2 className="text-clamp-[22_36_430_1440] font-bold font-unbounded text-green-dark">
            Destinations
          </h2>
          <ExploreMore />
        </div>
        <BigCard content={DATA_DUMMY} className="py-clamp-[24_72_430_1440]" />
        <BigCard
          content={DATA_DUMMY}
          className="py-clamp-[24_72_430_1440] md-700:flex-row-reverse"
        />
        <BigCard content={DATA_DUMMY} className="py-clamp-[24_72_430_1440]" />
        <BigCard
          content={DATA_DUMMY}
          className="py-clamp-[24_72_430_1440] md-700:flex-row-reverse"
        />
      </div>
      <Draggable
        className={{
          wrapper: 'py-8 wrapper',
          dragger: 'flex justify-between gap-4 wrapper',
        }}
      >
        <SmallCard content={DATA_DUMMY} />
        <SmallCard content={DATA_DUMMY} />
        <SmallCard content={DATA_DUMMY} />
        <SmallCard content={DATA_DUMMY} />
      </Draggable>
      <div className="wrapper my-clamp-[26_54_430_1440]">
        <ExploreMore className="w-max xl-1096-only:mx-auto xl-1096:ml-auto" />
      </div>
    </section>
  );
}
