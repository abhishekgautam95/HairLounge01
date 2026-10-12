import { useEffect, useRef, useState } from 'react';
import { SALON } from '@/data/salon';

type StatBarProps = {
  stats: { value: number; suffix: string; label: string }[];
};

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setCount(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, start }: { stat: { value: number; suffix: string; label: string }; start: boolean }) {
  const count = useCountUp(stat.value, 2000, start);
  return (
    <div className="text-center">
      <div className="font-display text-4xl sm:text-5xl font-bold text-gradient-gold mb-1">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-xs sm:text-sm font-light text-neutral-400 tracking-wide uppercase">{stat.label}</div>
    </div>
  );
}

export function StatsBar({ stats }: StatBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative py-16 border-y border-gold-500/10 bg-ink-900/30 grain">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/5 to-transparent" />
      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={stat.label} className={idx < 3 ? 'lg:border-r lg:border-gold-500/15 lg:pr-8' : ''}>
            <StatCard stat={stat} start={start} />
          </div>
        ))}
      </div>
    </div>
  );
}

export { SALON };
