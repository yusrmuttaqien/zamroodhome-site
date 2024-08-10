import { useRef, type MouseEvent } from 'react';
import Image from '@/components/Image';
import Draggable from '@/components/Draggable';
import MonoSeparator from '@/contents/svgs/mono-separator.svg';
import evenSplitArray from '@/utils/evenSplitArray';
import classMerge from '@/utils/classMerge';
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
          wrapper={{ className: 'h-[8.3vw] @[1096px]:h-[6.0475rem]' }}
        />
      </div>
      <Carousel state={state} content={secondArray} name="bottom" />
    </div>
  );
}

function Carousel(props: CarouselProps) {
  const { className, content, name, state } = props;
  const gestureEvents = useRef({
    mouseMove: false,
    mouseDown: false,
  });

  function _mouseMoves(e: MouseEvent) {
    // TODO: Enhance interactive outcome
    const event = e.type;

    event === 'mouseenter' && (gestureEvents.current = { mouseDown: false, mouseMove: false });
    event === 'mousedown' && (gestureEvents.current.mouseDown = true);
    event === 'mousemove' &&
      gestureEvents.current.mouseDown &&
      (gestureEvents.current.mouseMove = true);
  }
  function _onClick(e: ImageEntity) {
    const { mouseDown, mouseMove } = gestureEvents.current;

    if (mouseDown && mouseMove) return;
    state(e);
  }

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
          key={id}
          draggable={false}
          className="object-cover"
          alt={alt || id || `image-of-${src}`}
          onClick={() => _onClick({ src, alt, id })}
          onMouseMove={_mouseMoves}
          onMouseEnter={_mouseMoves}
          onMouseDown={_mouseMoves}
          onMouseUp={_mouseMoves}
          wrapper={{ className: 'h-[21.8331rem] aspect-square cursor-pointer' }}
        />
      ))}
    </Draggable>
  );
}
