import type { Dispatch, SetStateAction } from 'react';

export type MenuContentProps = {
  state: [boolean, Dispatch<SetStateAction<boolean>>];
};
export type ContentProps = {
  close: () => void;
};
