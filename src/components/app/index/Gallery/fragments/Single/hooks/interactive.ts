import { useRef, useState } from 'react';
import { useAnimationFrame, useInView } from 'framer-motion';
import { LOOP_DURATION } from '../constant';
import type { InteractiveParams } from '../type';

export default function useInteractive(params: InteractiveParams) {
  const { content, pause } = params;
  const scope = useRef<HTMLDivElement>(null);
  const lastTime = useRef(0);
  const [active, setActive] = useState({ key: 0, content: content[0] });
  const isInView = useInView(scope);

  function _loop(time: number) {
    if (!lastTime.current) lastTime.current = time;
    if (time - lastTime.current >= LOOP_DURATION) {
      setActive((prev) => ({
        key: time,
        content: content[(content.indexOf(prev.content) + 1) % content.length],
      }));

      lastTime.current = time;
    }
  }
  function _void() {}

  useAnimationFrame(isInView && !pause ? _loop : _void);

  return { scope, active, isInView };
}
