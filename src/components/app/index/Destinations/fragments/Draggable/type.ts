import { DRAGGABLE_STYLES } from './';

export type DraggableProps = {
  children: React.ReactNode;
  className?: Partial<typeof DRAGGABLE_STYLES.slots>;
};
