import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

interface Props {
  value: string;
  duration?: number;
  className?: string;
  /** Disable thousand-separator grouping (e.g. for years like "2011"). */
  noGrouping?: boolean;
}

const NBSP = ' ';

/**
 * Animated counter that ticks up from 0 to the parsed numeric value
 * once it enters the viewport. Falls back to static text for non-numeric values.
 */
export default function Counter({ value, duration = 1.6, className, noGrouping = false }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(value.replace(/\s/g, NBSP));

  // Extract the numeric portion + suffix (e.g. "30+" -> 30, "+")
  const cleaned = value.replace(/\s/g, '');
  const match = cleaned.match(/^(\d+)(.*)$/);
  const isNumeric = !!match && parseInt(match[1], 10) > 0;
  const numericValue = isNumeric ? parseInt(match![1], 10) : 0;
  const suffix = isNumeric ? match![2] : '';

  useEffect(() => {
    if (!inView || !isNumeric || reduced) return;

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * numericValue);
      // Format with non-breaking spaces so the number never wraps.
      // Skip grouping for years and other identifier-like numbers.
      const formatted = !noGrouping && numericValue >= 1000
        ? current.toLocaleString('fr-FR').replace(/[\s,]/g, NBSP)
        : String(current);
      setDisplay(formatted + suffix);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, isNumeric, numericValue, suffix, duration, reduced, noGrouping]);

  if (!isNumeric) {
    return (
      <motion.span
        ref={ref}
        className={className}
        style={{ whiteSpace: 'nowrap' }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {value}
      </motion.span>
    );
  }

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
    >
      {display}
    </span>
  );
}
