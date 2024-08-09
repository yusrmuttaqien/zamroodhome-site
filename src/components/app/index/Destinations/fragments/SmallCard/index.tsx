import Image from '@/components/Image';
import Link from '@/components/Link';
import { buttonVariants } from '@/components/Button';
import classMerge from '@/utils/classMerge';
import type { SmallCardProps } from './type';

export default function SmallCard(props: SmallCardProps) {
  const { content } = props;
  const { images, duration, title, organizeBy, prices, href } = content;
  const { final } = prices;

  return (
    <figure>
      <Image
        alt={`${title}-image`}
        src={images}
        className="object-cover"
        draggable={false}
        wrapper={{ className: 'h-[16rem] aspect-square' }}
      />
      <figcaption className="mt-6 space-y-6">
        <div className="space-y-1">
          <p className="text-green-dark text-xs">{duration}</p>
          <h3
            className={classMerge(
              'font-bold font-unbounded text-green-light leading-[1.24rem]',
              'line-clamp-2'
            )}
            title={title}
          >
            {title}
          </h3>
          <p className="font-bold text-clamp-[12_16_430_1440] text-green-dark">{organizeBy}</p>
        </div>
        <div>
          <p className="text-xs text-green-dark">Start from</p>
          <p className="text-green-light font-unbounded font-medium">{final}</p>
        </div>
        <Link
          className={buttonVariants({
            look: 'outline',
            theme: 'green',
            className: 'px-4 inline-block',
          })}
          href={href}
          draggable={false}
        >
          See Details
        </Link>
      </figcaption>
    </figure>
  );
}
