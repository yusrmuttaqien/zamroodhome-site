import Image from '@/components/Image';
import Draggable from '@/components/Draggable';
import MonoSeparator from '@/contents/svgs/mono-separator.svg';
import evenSplitArray from '@/utils/evenSplitArray';
import classMerge from '@/utils/classMerge';
import type { StackedCarouselProps, CarouselProps } from './type';

export default function StackedCarousel(props: StackedCarouselProps) {
  const { className, content } = props;
  const { firstArray, secondArray } = evenSplitArray({ array: content });

  return (
    <div className={className}>
      <Carousel content={firstArray} name="top" />
      <div className="wrapper @container">
        <Image
          alt="mono-separator"
          src={MonoSeparator}
          draggable={false}
          wrapper={{ className: 'h-[8.3vw] @[1096px]:h-[6.0475rem]' }}
        />
      </div>
      <Carousel content={secondArray} name="bottom" />
    </div>
  );
}

function Carousel(props: CarouselProps) {
  const { className, content, name } = props;

  return (
    <Draggable
      name={name}
      className={{
        wrapper: classMerge('wrapper', className),
        dragger: 'flex justify-between gap-6 xl-only:px-9',
      }}
    >
      {content.map(({ src, alt, id }) => (
        <Image
          src={src}
          draggable={false}
          className="object-cover"
          alt={alt}
          key={id}
          wrapper={{ className: 'h-[21.8331rem] aspect-square' }}
        />
      ))}
    </Draggable>
  );
}
