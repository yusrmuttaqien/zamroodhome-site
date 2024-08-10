import HashHost from '@/components/HashHost';
import Image from '@/components/Image';
import Link from '@/components/Link';
import { buttonVariants } from '@/components/Button';
import classMerge from '@/utils/classMerge';
import IluCE from '../../contents/images/customize.png';
import { ID } from './constant';
import type { CostumizedExperienceProps } from './type';

export default function CostumizedExperience(props: CostumizedExperienceProps) {
  const { className } = props;

  return (
    <div
      id={ID}
      className={classMerge(
        'flex flex-col md:flex-row gap-clamp-[16_24_430_1440] wrapper items-center',
        'justify-center scroll-m-[calc(3rem_+_var(--navbar-height))]',
        className
      )}
    >
      <Image
        alt="customized-experience-ilustration"
        src={IluCE}
        draggable={false}
        wrapper={{ className: 'h-clamp-[188_302_430_1440] md:max-w-[20.5625rem]' }}
      />
      <div className="md-only:text-center md:max-w-clamp-[350_600_768_1440]">
        <h2 className="font-unbounded text-clamp-[22_32_430_1440] font-bold text-green-dark leading-[1.705rem]">
          Discover Tailored Experiences
        </h2>
        <p className="text-clamp-[14_16_430_1440] mt-clamp-[8_16_430_1440] md-only:max-w-[31.25rem] md-only:mx-auto">
          Create your own journey, personalized to suit your preferences and interests, ensuring a
          once-in-a-lifetime adventure awaits.
        </p>
        <Link
          href="https://pandooin.com/id/tailor-made/create?utm_source=zamrood&utm_medium=website&utm_campaign=premium"
          className={buttonVariants({
            theme: 'green',
            look: 'solid',
            class: 'capitalize md-500-only:w-full mt-clamp-[24_16_430_1440] inline-block',
          })}
          target="_blank"
        >
          Customize your trip
        </Link>
      </div>
      <HashHost hash={`#${ID}`} />
    </div>
  );
}
