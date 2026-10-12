import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { FAQ_ITEMS, SALON } from '@/data/salon';

type FAQProps = {
  onBookClick: () => void;
};

export function FAQ({ onBookClick }: FAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-radial-rose" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <span className="text-xs font-light tracking-[0.4em] text-gold-400/70 uppercase mb-3 block">
            Questions & Answers
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Frequently <span className="text-gradient-gold italic">Asked</span>
          </h2>
          <p className="text-neutral-400 font-light max-w-2xl mx-auto">
            Everything you need to know before your visit.
          </p>
        </Reveal>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={idx} delay={((idx % 4) + 1) as 1 | 2 | 3 | 4}>
                <div
                  className={`rounded-2xl border transition-all duration-400 overflow-hidden ${
                    isOpen
                      ? 'glass-card-strong border-gold-500/30'
                      : 'glass-card border-gold-500/15 hover:border-gold-500/25'
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className={`font-display text-base sm:text-lg font-semibold transition-colors ${
                      isOpen ? 'text-gold-200' : 'text-white'
                    }`}>
                      {item.q}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-gradient-to-br from-gold-500 to-gold-600 rotate-180' : 'glass-card'
                    }`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-ink-950" />
                      ) : (
                        <Plus className="w-4 h-4 text-gold-300" />
                      )}
                    </div>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-400 ease-out"
                    style={{ maxHeight: isOpen ? 300 : 0, opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="px-6 pb-5 text-sm font-light text-neutral-400 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={3}>
          <div className="text-center mt-10">
            <p className="text-sm text-neutral-500 font-light mb-4">Still have questions?</p>
            <a
              href={`https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent('Hi! I have a question about your services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold-500/30 text-gold-200 text-sm font-medium hover:bg-gold-500/10 hover:border-gold-400/50 transition-all duration-300"
            >
              Ask us on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
