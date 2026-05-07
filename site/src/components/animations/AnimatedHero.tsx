import { motion, useReducedMotion } from 'motion/react';

interface Props {
  /** Lines of the title — each line a string. */
  lines: string[];
  /** Optional final punctuation rendered inline at the end of the last line. */
  trailing?: string;
  className?: string;
  startDelay?: number;
}

/**
 * Hero title that reveals word-by-word with a vertical mask.
 * Trailing punctuation pops in slightly after the last word.
 */
export default function AnimatedHero({
  lines,
  trailing,
  className,
  startDelay = 0,
}: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <h1 className={className}>
        {lines.map((line, i) => (
          <span key={i} style={{ display: 'block' }}>
            {line}
            {i === lines.length - 1 && trailing ? trailing : null}
          </span>
        ))}
      </h1>
    );
  }

  let wordIndex = 0;
  const stagger = 0.08;

  return (
    <h1 className={className}>
      {lines.map((line, lineIdx) => {
        const words = line.split(' ');
        const isLast = lineIdx === lines.length - 1;
        return (
          <span
            key={lineIdx}
            style={{
              display: 'block',
              overflow: 'hidden',
              paddingBottom: '0.08em',
              lineHeight: 'inherit',
            }}
          >
            {words.map((word, i) => {
              const delay = startDelay + wordIndex * stagger;
              wordIndex += 1;
              const lastWord = isLast && i === words.length - 1;
              return (
                <motion.span
                  key={i}
                  style={{ display: 'inline-block', whiteSpace: 'pre' }}
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration: 0.95,
                    delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                  {i < words.length - 1 ? ' ' : ''}
                  {lastWord && trailing ? (
                    <motion.span
                      style={{ display: 'inline-block', fontWeight: 700 }}
                      initial={{ y: '110%' }}
                      animate={{ y: '0%' }}
                      transition={{
                        duration: 0.7,
                        delay: startDelay + wordIndex * stagger + 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {trailing}
                    </motion.span>
                  ) : null}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}
