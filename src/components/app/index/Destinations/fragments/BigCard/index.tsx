import Image from '@/components/Image';
import Link from '@/components/Link';
import { buttonVariants } from '@/components/Button';
import classMerge from '@/utils/classMerge';
import type { BigCardProps } from './type';

export default function BigCard(props: BigCardProps) {
  const { className, content } = props;
  const { images, duration, title, organizeBy, description, prices, href } = content;
  const { initial, final } = prices;

  return (
    <figure
      className={classMerge(
        'flex gap-clamp-[16_24_430_1440] items-center md-700-only:flex-col',
        className
      )}
    >
      <Image
        alt={`${title}-image`}
        src={images}
        className="object-cover"
        wrapper={{ className: 'h-clamp-[256_374_430_1440] md-700:flex-1' }}
      />
      <div className="flex flex-col justify-between flex-1 self-stretch md-700-only:gap-6">
        <div className="space-y-2">
          <p className="text-clamp-[12_16_430_1440] text-green-dark md-700-only:-mb-1">
            {duration}
          </p>
          {/* TODO: Inspect why next styles not working with classMerge */}
          <h3
            className="font-bold font-unbounded leading-clamp-[20_45_430_1440] text-clamp-[16_36_430_1440] text-green-light"
            title={title}
          >
            {title}
          </h3>
          <div className="flex flex-col gap-2 md-700-only:flex-col-reverse">
            <p className="font-bold text-clamp-[12_16_430_1440] text-green-dark">{organizeBy}</p>
            <p
              className="text-clamp-[12_16_430_1440] text-green-light line-clamp-4"
              title={description}
            >
              {description}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-clamp-[12_16_430_1440] text-green-dark">Start from</p>
            <p className="line-through text-grey font-unbounded font-medium md-700-only:hidden">
              {initial}
            </p>
            <p className="text-green-light font-unbounded font-bold text-clamp-[18_28_430_1440]">
              {final}
            </p>
          </div>
          <Link
            className={buttonVariants({ look: 'outline', theme: 'green', className: 'px-4' })}
            href={href}
          >
            See Details
          </Link>
        </div>
      </div>
    </figure>
  );
}
