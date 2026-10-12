import { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { TESTIMONIALS } from '@/data/salon';

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(() => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const active = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-radial-glow" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <span className="text-xs font-light tracking-[0.4em] text-gold-400/70 uppercase mb-3 block">
            Client Love
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            What Our <span className="text-gradient-gold italic">Clients Say</span>
          </h2>
          <p className="text-neutral-400 font-light max-w-2xl mx-auto">
            Real stories from real people who trust us with their look.
          </p>
        </Reveal>

        <Reveal delay={1} variant="scale">
          <div
            className="relative glass-card-strong rounded-3xl p-8 sm:p-12 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Quote className="absolute top-6 left-6 w-16 h-16 text-gold-500/10" />

            <div key={current} className="relative animate-fade-in">
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                ))}
              </div>

              <p className="font-display text-xl sm:text-2xl text-white font-light italic leading-relaxed text-center mb-8 max-w-3xl mx-auto">
                "{active.text}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-ink-950 font-display font-bold text-sm">
                  {active.initials}
                </div>
                <div className="text-left">
                  <p className="text-white font-medium text-sm">{active.name}</p>
                  <p className="text-gold-300 font-light text-xs">{active.role}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={prev}
                className="p-2.5 rounded-full glass-card hover:border-gold-400/50 hover:scale-110 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gold-300" />
              </button>

              <div className="flex gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === current
                        ? 'w-8 bg-gradient-to-r from-gold-400 to-gold-600'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2.5 rounded-full glass-card hover:border-gold-400/50 hover:scale-110 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gold-300" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
