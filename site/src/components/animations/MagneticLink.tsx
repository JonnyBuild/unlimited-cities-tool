import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
}

/**
 * Link that magnetically follows the cursor while hovered.
 * Pure black + underline, museum style.
 */
export default function MagneticLink({
  href,
  children,
  className,
  strength = 22,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = ((e.clientX - cx) / rect.width) * strength;
    const dy = ((e.clientY - cy) / rect.height) * strength;
    x.set(dx);
    y.set(dy);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy, display: 'inline-block' }}
    >
      {children}
    </motion.a>
  );
}
