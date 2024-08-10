import ColorLogoEmblem from '@/contents/images/color-logo-emblem.png';
import Image from '@/components/Image';
import Link from '@/components/Link';
import classMerge from '@/utils/classMerge';
import type { ArticleCardProps } from './type';

export default function ArticleCard(props: ArticleCardProps) {
  const { className, content } = props;
  const { href, image, title } = content;

  return (
    <Link href={href} className={classMerge('size-full group/card', className)} target="_blank">
      <figure className="size-full relative flex items-end">
        <Image
          alt={image.alt}
          src={image.src}
          draggable={false}
          placeholder="blur"
          blurDataURL={ColorLogoEmblem.blurDataURL}
          className={classMerge(
            'object-cover group-hover/card:hoverable:saturate-100 transition-[filter]',
            'hoverable:saturate-0'
          )}
          wrapper={{ className: 'absolute inset-0' }}
        />
        <figcaption
          className={classMerge(
            'flex flex-col gap-4 p-4 bg-green-dark relative w-full h-[calc(2lh_+_2rem)]',
            'justify-center'
          )}
        >
          <p className="text-white line-clamp-2" title={title}>
            {title}
          </p>
        </figcaption>
      </figure>
    </Link>
  );
}
