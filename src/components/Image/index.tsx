import NextImage from 'next/image';
import classMerge from '@/utils/classMerge';
import type { ImageProps } from './type';

export default function Image(props: ImageProps) {
  const { wrapper, src, alt, className, ...rest } = props;
  const { className: wrapperClassName, ...restWrapper } = wrapper || {};

  return (
    <div {...restWrapper} className={classMerge('relative h-full w-full', wrapperClassName)}>
      <NextImage
        {...rest}
        className={classMerge('object-contain', className)}
        fill
        src={src}
        alt={alt}
      />
    </div>
  );
}
