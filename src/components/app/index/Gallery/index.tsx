import Single from './fragments/Single';
import StackedCarousel from './fragments/StackedCarousel';
import BG from '@/components/app/index/Hero/contents/images/bg.jpeg';
import type { StaticImageData } from 'next/image';

const DATA_DUMMY: StaticImageData[] = [BG, BG, BG];

export default function Gallery() {
  return (
    <section className="bg-brown py-clamp-[36_72_430_1440] space-y-6">
      <h2 className="text-clamp-[54_72_430_1440] font-the-signature text-green-dark wrapper xl-1096-only:px-9">
        Luxury Footages
      </h2>
      <StackedCarousel content={DATA_DUMMY} className="space-y-6 md-550-only:hidden" />
      <Single content={DATA_DUMMY} className="md-550:hidden" />
    </section>
  );
}
