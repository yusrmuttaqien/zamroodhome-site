import { tv } from 'tailwind-variants';
import classMerge from '@/utils/classMerge';
import type { ButtonProps } from './type';

export const buttonVariants = tv({
  base: classMerge(
    'font-bold font-variation-settings-["wght"_700] leading-[1.2rem]',
    'px-6 py-[1.0938rem] transition-colors rounded-full'
  ),
  variants: {
    theme: { white: '', green: '' },
    look: { outline: 'border-2', solid: '' },
  },
  compoundVariants: [
    {
      look: 'outline',
      theme: 'white',
      class: classMerge(
        'border-white hoverable:hover:bg-green-dark',
        'hoverable:hover:border-green-dark text-white'
      ),
    },
    {
      look: 'outline',
      theme: 'green',
      class: classMerge(
        'border-green-dark hoverable:hover:bg-green-dark',
        'text-green-dark hoverable:hover:text-white'
      ),
    },
    {
      look: 'solid',
      theme: 'green',
      class: 'hoverable:hover:bg-green-light bg-green-dark text-white',
    },
  ],
});

export default function Button(props: ButtonProps) {
  const { children, theme = 'white', look = 'outline', className, ...rest } = props;

  return (
    <button {...rest} className={buttonVariants({ theme, look, className })}>
      {children}
    </button>
  );
}
