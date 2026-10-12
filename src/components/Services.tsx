import { useState } from 'react';
import { Scissors, Palette, Wind, Sparkles, Crown, Check, Clock, ArrowRight, type LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SERVICE_CATEGORIES, SALON, type ServiceItem } from '@/data/salon';

const ICONS: Record<string, LucideIcon> = {
  Scissors,
  Palette,
  Wind,
  Sparkles,
  Crown,
};

type ServicesProps = {
  onBookClick: () => void;
};

export function Services({ onBookClick }: ServicesProps) {
  const [activeTab, setActiveTab] = useState(SERVICE_CATEGORIES[0].id);
  const activeCategory = SERVICE_CATEGORIES.find((c) => c.id === activeTab)!;

  const handleBookService = (item: ServiceItem) => {
    const url = `https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(
      `Hi Hair Lounge Salon! I would like to book: ${item.name} (${activeCategory.label}).`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-radial-glow" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <span className="text-xs font-light tracking-[0.4em] text-gold-400/70 uppercase mb-3 block">
            What We Offer
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Services & <span className="text-gradient-gold italic">Pricing</span>
          </h2>
          <p className="text-neutral-400 font-light max-w-2xl mx-auto">
            Transparent pricing, premium results. Every service includes a consultation
            with our expert stylists.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {SERVICE_CATEGORIES.map((cat) => {
              const Icon = ICONS[cat.icon];
              const isActive = cat.id === activeTab;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`group inline-flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full text-sm font-medium transition-all duration-400 border ${
                    isActive
                      ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-ink-950 border-gold-400 shadow-lg shadow-gold-500/20'
                      : 'glass-card text-neutral-300 hover:text-gold-200 hover:border-gold-500/30 border-gold-500/15'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span className="hidden sm:inline">{cat.label}</span>
                  <span className="sm:hidden">{cat.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={2}>
          <p className="text-center text-sm font-light text-gold-200/60 italic mb-10 max-w-xl mx-auto">
            {activeCategory.tagline}
          </p>
        </Reveal>

        <div key={activeTab} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in">
          {activeCategory.items.map((item, idx) => (
            <div
              key={item.name}
              className="group relative h-full rounded-2xl glass-card p-6 hover:border-gold-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/10 hover:-translate-y-1"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              {item.popular && (
                <div className="absolute -top-2.5 right-5 px-3 py-0.5 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white text-[10px] font-medium tracking-wide uppercase shadow-lg shadow-rose-500/20">
                  Popular
                </div>
              )}
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-display text-lg font-semibold text-white group-hover:text-gold-200 transition-colors">
                  {item.name}
                </h3>
                {item.duration && (
                  <span className="flex-shrink-0 inline-flex items-center gap-1 text-[10px] text-neutral-500 font-light mt-1.5">
                    <Clock className="w-3 h-3" />
                    {item.duration}
                  </span>
                )}
              </div>
              {item.desc && (
                <p className="text-sm font-light text-neutral-400 mb-4 leading-relaxed">
                  {item.desc}
                </p>
              )}
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-2xl font-display font-bold text-gradient-gold">
                  {item.price}
                </span>
                <button
                  onClick={() => handleBookService(item)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-gold-300/70 hover:text-gold-200 transition-colors group/btn"
                >
                  Book
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={2}>
          <div className="text-center mt-12">
            <p className="text-sm text-neutral-500 font-light mb-4">
              Prices may vary based on hair length and complexity.
            </p>
            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold-500/30 text-gold-200 text-sm font-medium hover:bg-gold-500/10 hover:border-gold-400/50 transition-all duration-300"
            >
              <Check className="w-4 h-4" />
              Book Your Appointment
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
