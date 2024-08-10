import IluPI from './images/PERSONAL_ITINERARIES.png';
import IluEE from './images/EXCLUSIVE_EXPERIENCES.png';
import IluBF from './images/Best_Facilities.png';
import type { ListProps } from '../fragments/ExperienceList/type';

export default {
  content: [
    {
      title: 'PERSONAL ITINERARIES',
      description:
        'Our premium travel services offer tailor-made itineraries crafted to suit your unique preferences and desires.',
      ilustration: IluPI,
    },
    {
      title: 'EXCLUSIVE EXPERIENCES',
      description:
        'From private charters to behind-the-scenes tours, we offer access to unique opportunities that are designed to elevate your trip to the next level.',
      ilustration: IluEE,
    },
    {
      title: 'Best Facilities',
      description:
        'Experience the epitome of with our premium facility, designed to provide an unparalleled level of comfort and indulgence.',
      ilustration: IluBF,
    },
  ] as ListProps['content'][],
};
