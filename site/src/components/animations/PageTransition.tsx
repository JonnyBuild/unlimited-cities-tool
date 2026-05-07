import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Props {
  pageNumber: string;
  pageLabel: string;
}

/**
 * Loading overlay that reveals the page on mount.
 * Black panel covers viewport, then retracts up while a counter counts 0 → 100.
 * Total duration: ~1.4s (count 0.95s + retract 0.85s overlapped).
 */
export default function PageTransition({ pageNumber, pageLabel }: Props) {
  const [done, setDone] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Lock scroll while the overlay is showing
    document.documentElement.style.overflow = 'hidden';

    const total = 950;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / total, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * 100));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);

    const trigger = setTimeout(() => setDone(true), 1100);
    const finalize = setTimeout(() => {
      setRemoved(true);
      document.documentElement.style.overflow = '';
    }, 2050);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(trigger);
      clearTimeout(finalize);
      document.documentElement.style.overflow = '';
    };
  }, []);

  if (removed) return null;

  return (
    <motion.div
      className="uc-page-transition"
      initial={{ y: 0 }}
      animate={{ y: done ? '-101%' : 0 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="uc-page-transition-inner">
        <motion.div
          className="uc-page-transition-meta"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: done ? 0 : 1, y: done ? -10 : 0 }}
          transition={{ duration: 0.5, delay: done ? 0 : 0.05, ease: 'easeOut' }}
        >
          <span className="uc-page-transition-mono">Unlimited Cities</span>
          <span className="uc-page-transition-mono">
            N° {pageNumber} — {pageLabel}
          </span>
        </motion.div>

        <motion.div
          className="uc-page-transition-count"
          initial={{ opacity: 0 }}
          animate={{ opacity: done ? 0 : 1 }}
          transition={{ duration: 0.4, delay: done ? 0 : 0.1 }}
        >
          <span className="uc-page-transition-num">
            {String(count).padStart(3, '0')}
          </span>
          <span className="uc-page-transition-pct">%</span>
        </motion.div>

        <motion.div
          className="uc-page-transition-bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: count / 100 }}
          transition={{ duration: 0.05, ease: 'linear' }}
        />
      </div>
    </motion.div>
  );
}
