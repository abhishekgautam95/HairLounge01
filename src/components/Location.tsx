import { MapPin, Clock, Phone, Navigation, MessageCircle, ExternalLink, Instagram } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SALON } from '@/data/salon';

export function Location() {
  const whatsappUrl = `https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(
    'Hi Hair Lounge Salon! I would like to book an appointment.'
  )}`;

  return (
    <section id="location" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <span className="text-xs font-light tracking-[0.4em] text-gold-400/70 uppercase mb-3 block">
            Find Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Location & <span className="text-gradient-gold italic">Hours</span>
          </h2>
          <p className="text-neutral-400 font-light max-w-2xl mx-auto">
            Conveniently located in Thammenahalli — walk in or book ahead.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          <Reveal variant="left" className="lg:col-span-2" delay={1}>
            <div className="h-full flex flex-col gap-5">
              <div className="glass-card rounded-2xl p-6 flex-1">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white mb-1">Our Address</h3>
                    <p className="text-sm font-light text-neutral-400 leading-relaxed">
                      {SALON.address.line1}<br />
                      {SALON.address.line2}<br />
                      {SALON.address.line3}<br />
                      {SALON.address.city}
                    </p>
                  </div>
                </div>

                <a
                  href={SALON.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-ink-950 text-sm font-medium hover:from-gold-400 hover:to-gold-500 hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300 hover:scale-105"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-rose-600/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-rose-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">Operating Hours</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Open Now
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                    <div key={day} className="flex justify-between text-sm font-light py-1.5 border-b border-white/5 last:border-0">
                      <span className="text-neutral-400">{day}</span>
                      <span className="text-gold-300">{SALON.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <a
                  href={`tel:${SALON.phone}`}
                  className="glass-card rounded-2xl p-4 hover:border-gold-400/40 transition-all duration-300 group hover:-translate-y-1 text-center"
                >
                  <Phone className="w-5 h-5 text-gold-300 mb-2 mx-auto group-hover:scale-110 transition-transform" />
                  <p className="text-[11px] text-neutral-400 font-light">Call</p>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-4 hover:border-gold-400/40 transition-all duration-300 group hover:-translate-y-1 text-center"
                >
                  <MessageCircle className="w-5 h-5 text-gold-300 mb-2 mx-auto group-hover:scale-110 transition-transform" />
                  <p className="text-[11px] text-neutral-400 font-light">WhatsApp</p>
                </a>
                <a
                  href={SALON.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-4 hover:border-gold-400/40 transition-all duration-300 group hover:-translate-y-1 text-center"
                >
                  <Instagram className="w-5 h-5 text-gold-300 mb-2 mx-auto group-hover:scale-110 transition-transform" />
                  <p className="text-[11px] text-neutral-400 font-light">Instagram</p>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" className="lg:col-span-3" delay={2}>
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden border border-gold-500/20 group">
              <iframe
                title="Hair Lounge Salon location map"
                src={SALON.mapsEmbed}
                className="w-full h-full min-h-[500px] grayscale-[40%] contrast-[1.1] invert-[0.92] hue-rotate-[180deg]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 left-4 right-4 glass-card rounded-xl p-3 flex items-center justify-between">
                <p className="text-sm text-neutral-300 font-light truncate">
                  {SALON.address.line1}, {SALON.address.line3}
                </p>
                <a
                  href={SALON.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-1 text-xs text-gold-300 hover:text-gold-200 transition-colors ml-3"
                >
                  Open in Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
