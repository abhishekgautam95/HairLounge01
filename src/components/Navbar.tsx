import { useEffect, useState } from 'react';
import { Menu, X, Calendar, Scissors } from 'lucide-react';
import { NAV_LINKS } from '@/data/salon';

type NavbarProps = {
  onBookClick: () => void;
};

export function Navbar({ onBookClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map((l) => l.href.substring(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/90 backdrop-blur-xl border-b border-gold-500/15 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Scissors className="w-4.5 h-4.5 text-ink-950" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-display font-bold text-gradient-gold tracking-wide">
              Hair Lounge
            </span>
            <span className="text-[9px] font-light tracking-[0.3em] text-gold-300/60 uppercase">
              Salon
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative text-sm font-light transition-colors duration-300 group ${
                  isActive ? 'text-gold-300' : 'text-neutral-300 hover:text-gold-300'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1.5 left-0 h-px bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onBookClick}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-ink-950 text-sm font-medium hover:from-gold-400 hover:to-gold-500 hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300 hover:scale-105"
          >
            <Calendar className="w-4 h-4" />
            Book Appointment
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-gold-300 hover:text-gold-400 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-ink-950/95 backdrop-blur-xl border-b border-gold-500/15 animate-slide-down">
          <div className="flex flex-col px-6 py-6 gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-3 text-neutral-300 hover:text-gold-300 border-b border-white/5 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                onBookClick();
              }}
              className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-ink-950 text-sm font-medium"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
