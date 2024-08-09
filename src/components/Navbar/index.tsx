import Image from '@/components/Image';
import Links from './fragments/Links';
import classMerge from '@/utils/classMerge';
import ColorLogo from '@/contents/images/color-logo.png';
import MonoLogo from '@/contents/images/mono-logo.png';
import Hamburger from './contents/svgs/hamburger.svg';
import type { NavbarProps } from './type';

const LOGO_WRAPPER_STYLES = 'absolute inset-0 transition-opacity';

export default function Navbar(props: NavbarProps) {
  const { className } = props;

  return (
    <nav
      className={classMerge(
        'sticky left-0 top-0 w-full bg-white isolate before:z-0 before:transition-colors',
        'xl:before:absolute xl:before:inset-0 xl:before:bg-transparent',
        'xl:before:backdrop-blur-[8px] xl-only:shadow-[0rem_0.25rem_0.625rem_0rem_#0000001A]',
        'xl:bg-transparent xl:before:mask-navbar',
        className
      )}
    >
      <div className="flex py-4 wrapper justify-between items-center xl:py-6">
        <div className="relative h-[3.125rem] w-[8.4319rem]">
          <Image
            src={ColorLogo}
            alt="Zamrood Logo"
            draggable={false}
            loading="eager"
            wrapper={{
              className: classMerge(LOGO_WRAPPER_STYLES, 'xl:opacity-0'),
              id: 'color-logo',
            }}
          />
          <Image
            src={MonoLogo}
            alt="Zamrood Logo"
            draggable={false}
            loading="eager"
            wrapper={{
              className: classMerge(LOGO_WRAPPER_STYLES, 'xl-only:opacity-0'),
              id: 'mono-logo',
            }}
          />
        </div>
        <Links className="xl-only:hidden z-10" />
        <button className="h-[3.125rem] aspect-square xl:hidden">
          <Image src={Hamburger} alt="Sidebar hamburger toggle" draggable={false} loading="eager" />
        </button>
      </div>
    </nav>
  );
}
