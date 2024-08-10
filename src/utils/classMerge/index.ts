import { tv } from 'tailwind-variants';
import type { ClassMergeParams } from '@/utils/classMerge/type';

export default function classMerge(...classes: ClassMergeParams): string {
  return tv({ base: classes })();
}
