import { useRef, useEffect, useState } from 'react';
import { ArrowRight, MessageCircle, Phone, Star, ChevronDown, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SALON, HERO_IMAGES, STATS } from '@/data/salon';

type HeroProps = {
  onBookClick: () => void;
};

export function Hero({ onBookClick }: HeroProps) {
  const bgRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(
    'Hi Hair Lounge Salon! I would like to book an appointment.'
  )}`;

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden grain">
      <div ref={bgRef} className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.4}px)` }}>
        <img
          src={HERO_IMAGES.main}
          alt="Hair Lounge Salon interior"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/85 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/30 to-ink-950/50" />
      </div>

      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-rose-500/8 rounded-full blur-3xl animate-glow" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span className="text-xs font-light text-neutral-300 tracking-wide">
                Rated 5.0 by 500+ happy clients
              </span>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] font-bold leading-[1.02] mb-6 text-shadow-gold">
              <span className="text-white">Elevate Your Style,</span>
              <br />
              <span className="text-gradient-shimmer italic">Redefine Your Look</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="text-base sm:text-lg font-light text-neutral-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Expert stylists. Premium products. A luxurious experience right opposite
              Acharya Institute of Technology — crafted for students, professionals, and
              everyone in between.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <button
                onClick={scrollToServices}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-ink-950 font-medium hover:from-gold-400 hover:to-gold-500 hover:shadow-xl hover:shadow-gold-500/30 transition-all duration-300 hover:scale-105"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-gold-500/40 text-gold-200 font-medium hover:bg-gold-500/10 hover:border-gold-400/60 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Book Appointment
              </button>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-neutral-400">
                <Phone className="w-4 h-4 text-gold-400" />
                <a href={`tel:${SALON.phone}`} className="text-sm hover:text-gold-300 transition-colors">
                  {SALON.phoneDisplay}
                </a>
              </div>
              <div className="h-4 w-px bg-white/15" />
              <span className="text-sm text-neutral-400 font-light">
                Open Daily · <span className="text-gold-300">{SALON.hoursShort}</span>
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2} variant="scale" className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-gold-500/20 via-rose-500/8 to-transparent rounded-3xl blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <HeroImage src={HERO_IMAGES.secondary} alt="Salon styling chair" height="h-48" />
                <HeroImage src={HERO_IMAGES.tertiary} alt="Beauty salon interior" height="h-36" />
              </div>
              <div className="space-y-4">
                <HeroImage src={HERO_IMAGES.main} alt="Premium salon experience" height="h-40" />
                <div className="rounded-2xl glass-card p-5 border-gold-500/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    <span className="text-xs font-light tracking-[0.2em] text-gold-300 uppercase">Walk-ins Welcome</span>
                  </div>
                  <p className="text-sm text-white font-light">No appointment? No problem. Just drop in.</p>
                </div>
                <HeroImage src={HERO_IMAGES.secondary} alt="Modern barber shop" height="h-44" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ink-950 to-transparent pointer-events-none z-10" />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-1 text-neutral-500">
        <span className="text-[10px] tracking-[0.3em] uppercase font-light">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce-subtle text-gold-400/60" />
      </div>
    </section>
  );
}

function HeroImage({ src, alt, height }: { src: string; alt: string; height: string }) {
  return (
    <div className={`rounded-2xl overflow-hidden border border-gold-500/20 hover:border-gold-400/40 transition-all duration-500 hover:scale-[1.03] group ${height}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
    </div>
  );
}

export { STATS };
