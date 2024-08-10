import { useRef } from 'react';
import {
  useIsomorphicLayoutEffect,
  useScroll,
  useTransform,
  type MotionStyle,
} from 'framer-motion';

export default function useInteractive() {
  const { scrollYProgress } = useScroll();
  const scope = useRef<HTMLElement>(null);
  const BGY = useTransform(scrollYProgress, [0, 0.5], ['0%', '70%']);

  useIsomorphicLayoutEffect(() => {
    const nav = document.querySelector('nav') as HTMLElement;
    const colorLogo = document.querySelector('#color-logo') as HTMLElement;
    const monoLogo = document.querySelector('#mono-logo') as HTMLElement;
    const navLinks = document.querySelectorAll('.nav-link');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            nav.classList.add('xl:before:bg-transparent');
            nav.classList.remove(
              'xl:before:bg-gradient-to-b',
              'xl:before:from-white',
              'xl:before:to-transparent'
            );
            navLinks.forEach((navLink) => {
              navLink.classList.add('text-white', 'border-white');
              navLink.classList.remove('text-green-dark', 'border-green-dark');
            });
            colorLogo.classList.remove('xl:!opacity-100');
            monoLogo.classList.remove('xl:!opacity-0');
          } else {
            nav.classList.remove('xl:before:bg-transparent');
            nav.classList.add(
              'xl:before:bg-gradient-to-b',
              'xl:before:from-white',
              'xl:before:to-transparent'
            );
            navLinks.forEach((navLink) => {
              navLink.classList.remove('text-white', 'border-white');
              navLink.classList.add('text-green-dark', 'border-green-dark');
            });
            monoLogo.classList.add('xl:!opacity-0');
            colorLogo.classList.add('xl:!opacity-100');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(scope.current as Element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { scope, bgStyle: { y: BGY } as MotionStyle };
}
