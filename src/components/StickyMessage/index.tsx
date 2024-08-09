import { tv } from 'tailwind-variants';
import Image from '@/components/Image';
import ColorLogoEmblem from '@/contents/images/color-logo-emblem.png';
import type { StickyMessageProps } from './type';

export const STICKY_MESSAGE_STYLES = tv({
  slots: {
    wrapper: 'relative',
    sticky: 'sticky top-[calc(50svh_-_var(--navbar-height))] py-6',
  },
});
export default function StickyMessage(props: StickyMessageProps) {
  const { className, children } = props;
  const { wrapper, sticky } = STICKY_MESSAGE_STYLES();

  return (
    <div className={wrapper({ className: className?.wrapper })}>
      <div className={sticky({ className: className?.sticky })}>
        <Image
          src={ColorLogoEmblem}
          alt="Zamrood Logo Emblem"
          draggable={false}
          loading="eager"
          wrapper={{
            className: 'h-32',
          }}
        />
        {children}
      </div>
    </div>
  );
}
