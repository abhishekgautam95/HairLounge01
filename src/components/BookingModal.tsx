import { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, Calendar, Clock, Check, Scissors } from 'lucide-react';
import { SALON, SERVICE_CATEGORIES } from '@/data/salon';

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

export function BookingModal({ open, onClose }: BookingModalProps) {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [open, onClose]);

  if (!open) return null;

  const allServices = SERVICE_CATEGORIES.flatMap((cat) =>
    cat.items.map((item) => `${item.name} (${cat.label})`)
  );

  const whatsappNumber = SALON.whatsapp || '917975413713';

  const buildWhatsAppMessage = () => {
    const parts = [
      'Hi Hair Lounge Salon! I would like to book an appointment.',
      name && `Name: ${name}`,
      service && `Service: ${service}`,
      date && `Preferred Date: ${date}`,
      time && `Preferred Time: ${time}`,
    ].filter(Boolean);
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(parts.join('\n'))}`;
  };

  const handleWhatsAppBook = () => {
    window.open(buildWhatsAppMessage(), '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleCall = () => {
    window.location.href = `tel:${SALON.phone}`;
    onClose();
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div
      className="fixed inset-0 z-[200] bg-ink-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-ink-900 rounded-3xl border border-gold-500/25 shadow-2xl shadow-gold-500/10 max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-gold-500/20 to-transparent pointer-events-none" />

        <div className="relative p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gold-500/15 transition-colors"
          >
            <X className="w-5 h-5 text-gold-300" />
          </button>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <Scissors className="w-4 h-4 text-ink-950" />
              </div>
              <span className="text-xs font-light tracking-[0.3em] text-gold-400/70 uppercase">
                Book Your Visit
              </span>
            </div>
            <h3 className="font-display text-3xl font-bold text-white">
              Reserve Your <span className="text-gradient-gold italic">Spot</span>
            </h3>
            <p className="text-sm font-light text-neutral-400 mt-2">
              Fill in your details and we'll confirm via WhatsApp or call.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gold-200/80 mb-1.5 tracking-wide uppercase">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-ink-800 border border-gold-500/15 text-white text-sm placeholder:text-neutral-600 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gold-200/80 mb-1.5 tracking-wide uppercase">
                Service
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-ink-800 border border-gold-500/15 text-white text-sm focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all"
              >
                <option value="">Select a service</option>
                {allServices.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gold-200/80 mb-1.5 tracking-wide uppercase">
                  Preferred Date
                </label>
                <input
                  type="date"
                  min={today}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-ink-800 border border-gold-500/15 text-white text-sm focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all [color-scheme:dark]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gold-200/80 mb-1.5 tracking-wide uppercase">
                  Preferred Time
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-ink-800 border border-gold-500/15 text-white text-sm focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all [color-scheme:dark]"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-ink-800/50 border border-gold-500/10">
              <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <p className="text-xs text-neutral-400 font-light">
                We're open daily from <span className="text-gold-300">{SALON.hours}</span>. We'll confirm your slot within minutes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleWhatsAppBook}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-ink-950 text-sm font-medium hover:from-gold-400 hover:to-gold-500 hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                Book via WhatsApp
              </button>
              <button
                onClick={handleCall}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-gold-500/30 text-gold-200 text-sm font-medium hover:bg-gold-500/10 hover:border-gold-400/50 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call to Book
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 pt-3 text-xs text-neutral-500 font-light">
              <span className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-gold-400" />
                Instant confirmation
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-gold-400" />
                Walk-ins welcome
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
