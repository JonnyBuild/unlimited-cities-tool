import { motion, useReducedMotion } from 'motion/react';

interface Props {
  className?: string;
  delay?: number;
  duration?: number;
  thickness?: 'soft' | 'strong';
}

/**
 * A horizontal rule that draws itself from left to right when entering view.
 */
export default function DrawRule({
  className,
  delay = 0,
  duration = 1.1,
  thickness = 'strong',
}: Props) {
  const reduced = useReducedMotion();
  const color = thickness === 'strong' ? 'var(--color-uc-ink)' : 'var(--color-uc-line)';

  if (reduced) {
    return <hr className={className} style={{ border: 0, borderTop: `1px solid ${color}` }} />;
  }

  return (
    <motion.div
      className={className}
      style={{ height: 1, background: color, transformOrigin: 'left' }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration, delay, ease: [0.76, 0, 0.24, 1] }}
    />
  );
}
