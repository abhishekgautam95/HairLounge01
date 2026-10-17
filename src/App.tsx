import { useState, useCallback } from 'react';
import { Scissors, Sparkles, Crown, Palette, Wind } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StatsBar } from '@/components/StatsBar';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Location } from '@/components/Location';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';
import { ScrollProgress } from '@/components/ScrollProgress';
import { BackToTop } from '@/components/BackToTop';
import { CursorGlow } from '@/components/CursorGlow';
import { SALON, STATS } from '@/data/salon';

const MARQUEE_ITEMS = [
  { icon: Scissors, text: 'Butterfly & Wolf Haircuts' },
  { icon: Sparkles, text: 'Signature Hair Botox' },
  { icon: Palette, text: 'Any Hair Colour @ ₹4,000' },
  { icon: Wind, text: 'Burst Fades & Beard Grooming' },
  { icon: Crown, text: 'Balayage & Ombré Makeovers' },
];

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="relative py-5 border-y border-gold-500/10 bg-ink-900/50 overflow-hidden">
      <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 flex-shrink-0">
            <item.icon className="w-4 h-4 text-gold-400" />
            <span className="font-display text-lg italic text-neutral-300">{item.text}</span>
            <span className="text-gold-500/40 text-2xl">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(
    'Hi Hair Lounge Salon! I would like to book an appointment.'
  )}`;
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = useCallback(() => setBookingOpen(true), []);
  const closeBooking = useCallback(() => setBookingOpen(false), []);

  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <ScrollProgress />
      <CursorGlow />
      <Navbar onBookClick={openBooking} />
      <main>
        <Hero onBookClick={openBooking} />
        <Marquee />
        <StatsBar stats={STATS} />
        <Services onBookClick={openBooking} />
        <About />
        <Gallery />
        <Testimonials />
        <FAQ onBookClick={openBooking} />
        <Location />
      </main>
      <Footer onBookClick={openBooking} />
      <BookingModal open={bookingOpen} onClose={closeBooking} />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}
