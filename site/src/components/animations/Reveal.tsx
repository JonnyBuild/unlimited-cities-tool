import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode, CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
  as?: 'div' | 'section' | 'article' | 'span' | 'li';
  amount?: number;
  /** When true, plays immediately on mount instead of on scroll */
  immediate?: boolean;
}

/**
 * Generic reveal-on-scroll wrapper.
 * Fades in + slides up. Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  y = 28,
  className,
  style,
  once = true,
  amount = 0.2,
  immediate = false,
}: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const initial = { opacity: 0, y };
  const animate = { opacity: 1, y: 0 };
  const transition = { duration, delay, ease: [0.22, 1, 0.36, 1] as const };

  if (immediate) {
    return (
      <motion.div
        className={className}
        style={style}
        initial={initial}
        animate={animate}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
