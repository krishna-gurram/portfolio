import { useEffect, useRef, useState } from 'react';

const TYPING_SPEED_MS   = 90;
const DELETING_SPEED_MS = 48;
const PAUSE_AFTER_MS    = 3000; // pause after fully typed — change this
const PAUSE_BEFORE_MS   = 400;  // pause before typing next word
const INITIAL_DELAY_MS  = 1000;

type Phase = 'typing' | 'pausing' | 'deleting' | 'waiting';

/**
 * Cycles through an array of strings with a typewriter effect.
 * Uses a ref-based state machine so phase transitions are reliable
 * and PAUSE_AFTER_MS actually fires correctly.
 */
export function useTyped(roles: string[]): string {
  const [displayText, setDisplayText] = useState('');

  // All mutable loop state lives in a ref — never stale in closures
  const state = useRef({
    roleIndex: 0,
    charIndex: 0,
    phase: 'waiting' as Phase,
  });

  useEffect(() => {
    if (roles.length === 0) return;

    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const s     = state.current;
      const word  = roles[s.roleIndex];

      if (s.phase === 'waiting') {
        // Initial delay before first word
        s.phase = 'typing';
        timer = setTimeout(tick, INITIAL_DELAY_MS);

      } else if (s.phase === 'typing') {
        s.charIndex += 1;
        setDisplayText(word.slice(0, s.charIndex));

        if (s.charIndex === word.length) {
          // Fully typed — enter pause phase
          s.phase = 'pausing';
          timer = setTimeout(tick, PAUSE_AFTER_MS);
        } else {
          timer = setTimeout(tick, TYPING_SPEED_MS);
        }

      } else if (s.phase === 'pausing') {
        // Pause is over — start deleting
        s.phase = 'deleting';
        timer = setTimeout(tick, DELETING_SPEED_MS);

      } else if (s.phase === 'deleting') {
        s.charIndex -= 1;
        setDisplayText(word.slice(0, s.charIndex));

        if (s.charIndex === 0) {
          // Fully deleted — move to next word
          s.roleIndex = (s.roleIndex + 1) % roles.length;
          s.phase = 'typing';
          timer = setTimeout(tick, PAUSE_BEFORE_MS);
        } else {
          timer = setTimeout(tick, DELETING_SPEED_MS);
        }
      }
    }

    tick();
    return () => clearTimeout(timer);
  // roles is stable — only run once on mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return displayText;
}
