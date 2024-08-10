import Link from '@/components/Link';
import Image from '@/components/Image';
import untranslated from './contents/untranslated';
import classMerge from '@/utils/classMerge';
import type { FooterProps } from './type';

export default function Footer(props: FooterProps) {
  const { className } = props;
  const { contacts } = untranslated;

  return (
    <footer className={classMerge('py-6 bg-green-dark', className)}>
      <div className="wrapper flex items-center justify-between gap-4 md-550-only:flex-col">
        <p className="text-white text-center">© 2023 Zamrood by PT Teknologi Pandu Wisata</p>
        <div className="flex gap-6 items-center">
          {Object.entries(contacts).map(([key, { icon, href }]) => (
            <Link href={href} key={href} target="_blank">
              <Image
                alt={`zamrood-${key}`}
                src={icon}
                draggable={false}
                wrapper={{ className: 'size-6 pointer-events-none' }}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
