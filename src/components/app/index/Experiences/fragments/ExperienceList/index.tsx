import Image from '@/components/Image';
import untranslated from '../../contents/untranslated';
import classMerge from '@/utils/classMerge';
import type { ListProps, ExperienceListProps } from './type';

export default function ExperienceList(props: ExperienceListProps) {
  const { className } = props;
  const { content } = untranslated;

  return (
    <div className={classMerge('xl-only:wrapper', className)}>
      <div className="text-center mb-clamp-[24_72_430_1440]">
        <h2 className="text-clamp-[54_84_430_1440] font-the-signature text-green-light">
          Beyond Premium
        </h2>
        <p className="text-clamp-[22_32_430_1440] font-unbounded text-green-dark font-bold -mt-[1.6em] xl:-mt-[1.5em]">
          Elevate Your Experience
        </p>
      </div>
      <div className="flex items-center flex-wrap gap-6 justify-center">
        {content.map((experience) => (
          <List key={experience.title} content={experience} />
        ))}
      </div>
    </div>
  );
}

function List(props: ListProps) {
  const { content } = props;
  const { title, description, ilustration } = content;

  return (
    <figure className="w-[21.875rem]">
      <Image
        alt={`$${title}-illustration`}
        src={ilustration}
        draggable={false}
        wrapper={{ className: 'h-clamp-[128_156_430_1440] aspect-square xl:mb-6' }}
      />
      <figcaption className="text-center">
        <h3 className="font-bold text-clamp-[16_24_430_1440] text-green-light uppercase">
          {title}
        </h3>
        <p>{description}</p>
      </figcaption>
    </figure>
  );
}
