import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  amount?: number;
}

/**
 * Wraps a list of children. Each direct child is staggered.
 * Use <Stagger.Item> as the child wrapper.
 */
export default function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  amount = 0.15,
}: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

interface ItemProps {
  children: ReactNode;
  className?: string;
  y?: number;
}

Stagger.Item = function StaggerItem({ children, className, y = 24 }: ItemProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
};
