import NextImage from 'next/image';
import classMerge from '@/utils/classMerge';
import type { ImageProps } from './type';

export default function Image(props: ImageProps) {
  const { wrapper, src, alt, className, ...rest } = props;
  const { className: wrapperClassName, ...restWrapper } = wrapper || {};

  return (
    <div
      {...restWrapper}
      className={classMerge('relative h-full w-full isolate', wrapperClassName)}
    >
      <NextImage
        {...rest}
        sizes="100%"
        className={classMerge('object-contain z-0', className)}
        fill
        src={src}
        alt={alt}
      />
    </div>
  );
}
