import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 'up' | 'scale' | 'left' | 'right';
};

export function Reveal({ children, className = '', delay, variant = 'up' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === 'scale' ? 'reveal-scale' : variant === 'left' ? 'reveal-left' : variant === 'right' ? 'reveal-right' : 'reveal';
  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <div ref={ref} className={`${variantClass} ${delayClass} ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
}
