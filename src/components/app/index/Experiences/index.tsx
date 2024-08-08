import ExperienceList from './fragments/ExperienceList';
import CostumizedExperience from './fragments/CostumizedExperience';

export default function Experiences() {
  return (
    <section className="mt-clamp-[24_72_430_1440]">
      {/*  mb-[54_97_430_1440] */}
      <ExperienceList className="mb-clamp-[86_168_430_1440]" />
      <CostumizedExperience />
    </section>
  );
}
