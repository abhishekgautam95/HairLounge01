import { Instagram, MessageCircle, Phone, MapPin, Clock, Scissors, Heart, ArrowUp } from 'lucide-react';
import { SALON, NAV_LINKS } from '@/data/salon';

type FooterProps = {
  onBookClick: () => void;
};

export function Footer({ onBookClick }: FooterProps) {
  const whatsappUrl = `https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(
    'Hi Hair Lounge Salon! I would like to book an appointment.'
  )}`;

  return (
    <footer id="contact" className="relative pt-20 pb-8 border-t border-gold-500/15 overflow-hidden grain">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-radial-glow" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <Scissors className="w-5 h-5 text-ink-950" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-display font-bold text-gradient-gold">Hair Lounge</span>
                <span className="text-[9px] font-light tracking-[0.3em] text-gold-300/60 uppercase">Salon</span>
              </div>
            </div>
            <p className="text-sm font-light text-neutral-400 max-w-md leading-relaxed mb-6">
              Your premium destination for hair, beauty, and grooming in Thammenahalli,
              Bengaluru. Expert stylists, premium products, and a luxurious experience —
              open every day.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SALON.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-gold-400/40 hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gold-300" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-gold-400/40 hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-gold-300" />
              </a>
              <a
                href={`tel:${SALON.phone}`}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-gold-400/40 hover:scale-110 transition-all duration-300"
                aria-label="Call"
              >
                <Phone className="w-4 h-4 text-gold-300" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-gold-200 mb-4 tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm font-light text-neutral-400 hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onBookClick}
                  className="text-sm font-light text-neutral-400 hover:text-gold-300 transition-colors"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-gold-200 mb-4 tracking-wide uppercase">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm font-light text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>
                  {SALON.address.line1}, {SALON.address.line2}, {SALON.address.line3}, {SALON.address.city}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={`tel:${SALON.phone}`} className="hover:text-gold-300 transition-colors">
                  {SALON.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Open Daily · {SALON.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500 font-light">
            © {new Date().getFullYear()} Hair Lounge Salon. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-neutral-500 font-light flex items-center gap-1.5">
              Crafted with <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> in Bengaluru
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1 text-xs text-neutral-500 hover:text-gold-300 transition-colors"
            >
              <ArrowUp className="w-3 h-3" />
              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
