'use client';

import { Fragment, useState, memo } from 'react';
import useProducts from '@/hooks/products';
import StickyMessage from '@/components/StickyMessage';
import ImagePreview from './fragments/ImagePreview';
import Single from './fragments/Single';
import StackedCarousel from './fragments/StackedCarousel';
import type { ImageEntity } from '@/types/data';

const MemoizedStackedCarousel = memo(StackedCarousel);

export default function Gallery() {
  const { galleries, isLoading } = useProducts();
  const [isOpen, setIsOpen] = useState<ImageEntity | null>(null);
  const isEmpty = galleries.length === 0;
  const isAvailable = !isLoading && !isEmpty;

  return (
    <section className="bg-brown py-clamp-[36_72_430_1440] space-y-6">
      <h2 className="text-clamp-[54_72_430_1440] font-the-signature text-green-dark wrapper xl-only:px-9">
        Luxury Footages
      </h2>
      {!isAvailable && (
        <StickyMessage className={{ wrapper: 'h-[calc(100svh_-_var(--navbar-height))]' }}>
          <p className="text-center font-medium mt-6 text-white">
            {isLoading && 'Loading galleries'}
            {!isLoading && 'No galleries images found'}
          </p>
        </StickyMessage>
      )}
      {isAvailable && (
        <Fragment>
          <MemoizedStackedCarousel
            state={setIsOpen}
            content={galleries}
            className="space-y-6 md-550-only:hidden"
          />
          <Single
            state={[isOpen, setIsOpen]}
            content={galleries}
            className="space-y-6 md-550:hidden"
          />
          <ImagePreview state={[isOpen, setIsOpen]} />
        </Fragment>
      )}
    </section>
  );
}
