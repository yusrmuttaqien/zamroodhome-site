import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from 'framer-motion';
import Image from '@/components/Image';
import Draggable from '@/components/Draggable';
import MonoSeparator from '@/contents/svgs/mono-separator.svg';
import evenSplitArray from '@/utils/evenSplitArray';
import classMerge from '@/utils/classMerge';
import ColorLogoEmblem from '@/contents/images/color-logo-emblem.png';
import type { StackedCarouselProps, CarouselProps } from './type';
import type { ImageEntity } from '@/types/data';

export default function StackedCarousel(props: StackedCarouselProps) {
  const { className, content, state } = props;
  const { firstArray, secondArray } = evenSplitArray({ array: content });

  return (
    <div className={className}>
      <Carousel state={state} content={firstArray} name="top" />
      <div className="wrapper @container">
        <Image
          alt="mono-separator"
          src={MonoSeparator}
          draggable={false}
          wrapper={{ className: 'h-[8.3vw] @[1096px]:h-[6.0475rem] pointer-events-none' }}
        />
      </div>
      <Carousel state={state} content={secondArray} name="bottom" />
    </div>
  );
}

function Carousel(props: CarouselProps) {
  const { className, content, name, state } = props;
  const isDragging = useRef(false);
  const timeout = useRef<NodeJS.Timeout>();

  function _dragIntercept(e: string) {
    switch (e) {
      case 'start':
        isDragging.current = true;
        break;
      case 'end':
        timeout.current = setTimeout(() => {
          isDragging.current = false;
        }, 1500);
        break;
    }
  }
  function _onClick(e: ImageEntity) {
    if (isDragging.current) return;

    state(e);
  }

  useIsomorphicLayoutEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

  return (
    <Draggable
      name={name}
      onDragEnd={() => _dragIntercept('end')}
      onDragStart={() => _dragIntercept('start')}
      className={{
        wrapper: classMerge('wrapper', className),
        dragger: 'flex justify-between gap-6 xl-only:px-9',
      }}
    >
      {content.map(({ src, alt, id }) => (
        <Image
          src={src}
          key={id}
          draggable={false}
          className="object-cover"
          alt={alt || id || `image-of-${src}`}
          onClick={() => _onClick({ src, alt, id })}
          placeholder="blur"
          blurDataURL={ColorLogoEmblem.blurDataURL}
          wrapper={{ className: 'h-[21.8331rem] aspect-square cursor-pointer' }}
        />
      ))}
    </Draggable>
  );
}
