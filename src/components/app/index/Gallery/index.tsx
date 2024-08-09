'use client';

import { Fragment } from 'react';
import useProducts from '@/hooks/products';
import StickyMessage from '@/components/StickyMessage';
import Single from './fragments/Single';
import StackedCarousel from './fragments/StackedCarousel';

export default function Gallery() {
  const { galleries, isLoading } = useProducts();
  const isEmpty = galleries.length === 0;
  const isAvailable = !isLoading && !isEmpty;

  return (
    <section className="bg-brown py-clamp-[36_72_430_1440] space-y-6">
      <h2 className="text-clamp-[54_72_430_1440] font-the-signature text-green-dark wrapper xl-only:px-9">
        Luxury Footages
      </h2>
      {!isAvailable && (
        <StickyMessage className={{ wrapper: 'h-[calc(100svh_-_var(--navbar-height))]' }}>
          <p className="text-center font-medium mt-6">
            {isLoading && 'Loading galleries'}
            {!isLoading && 'No galleries images found'}
          </p>
        </StickyMessage>
      )}
      {isAvailable && (
        <Fragment>
          <StackedCarousel content={galleries} className="space-y-6 md-550-only:hidden" />
          <Single content={galleries} className="md-550:hidden" />
        </Fragment>
      )}
    </section>
  );
}
