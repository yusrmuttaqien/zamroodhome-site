'use client';

import useProducts from '@/hooks/products';
import Draggable from '@/components/Draggable';
import StickyMessage from '@/components/StickyMessage';
import ExploreMore from './fragments/ExploreMore';
import BigCard from './fragments/BigCard';
import SmallCard from './fragments/SmallCard';
import classMerge from '@/utils/classMerge';
import arrayOfN from '@/utils/arrayOfN';
import { ID } from './constant';
import type { DestinationsProps } from './type';

export default function Destinations(props: DestinationsProps) {
  const { className } = props;
  const { lists, isLoading } = useProducts();
  const listMin = arrayOfN<(typeof lists)[0]>({ array: lists, length: 8 });
  const isEmpty = listMin.length === 0;
  const isAvailable = !isLoading && !isEmpty;
  const isMore = isAvailable && listMin.length > 4;
  const firstFour = listMin.slice(0, 4);
  const next = listMin.slice(5);

  return (
    <section
      className={classMerge('scroll-m-[calc(3rem_+_var(--navbar-height))]', className)}
      id={ID}
    >
      <div className="wrapper">
        <div className="flex md-500-only:flex-col gap-2 md-500:gap-6 md-500:items-center">
          <h2 className="text-clamp-[22_36_430_1440] font-bold font-unbounded text-green-dark">
            Destinations
          </h2>
          <ExploreMore />
        </div>
        {!isAvailable && (
          <StickyMessage className={{ wrapper: 'h-[calc(100svh_-_var(--navbar-height))]' }}>
            <p className="text-center font-medium mt-6">
              {isLoading && 'Loading destinations'}
              {!isLoading && 'No destinations found'}
            </p>
          </StickyMessage>
        )}
        {isAvailable &&
          firstFour.map((item, idx) => (
            <BigCard
              key={item.title}
              content={item}
              className={classMerge(
                'py-clamp-[24_72_430_1440]',
                idx % 2 !== 0 && 'md-700:flex-row-reverse'
              )}
            />
          ))}
      </div>
      {isMore && (
        <Draggable
          name="destinations"
          className={{
            wrapper: 'py-8 wrapper',
            dragger: classMerge(
              'flex gap-4 min-w-full xl-only:px-4',
              next.length >= 4 && 'justify-between'
            ),
          }}
        >
          {next.map((item) => (
            <SmallCard key={item.title} content={item} />
          ))}
        </Draggable>
      )}
      <div className="wrapper my-clamp-[26_54_430_1440]">
        <ExploreMore className="w-max xl-1096-only:mx-auto xl-1096:ml-auto" />
      </div>
    </section>
  );
}
