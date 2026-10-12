import { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { GALLERY_IMAGES, type GalleryImage } from '@/data/salon';

const FILTERS = ['All', 'Haircut', 'Color', 'Grooming', 'Facial', 'Bridal'] as const;
type Filter = (typeof FILTERS)[number];

export function Gallery() {
  const [filter, setFilter] = useState<Filter>('All');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const images = filter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === filter);

  const openLightbox = (img: GalleryImage) => {
    const idx = images.findIndex((i) => i.url === img.url);
    setLightboxIdx(idx);
  };

  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = () => setLightboxIdx((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  const nextImage = () => setLightboxIdx((prev) => (prev === null ? null : (prev + 1) % images.length));

  const current = lightboxIdx !== null ? images[lightboxIdx] : null;

  return (
    <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gold-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-12">
          <span className="text-xs font-light tracking-[0.4em] text-gold-400/70 uppercase mb-3 block">
            Our Work
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            The <span className="text-gradient-gold italic">Lookbook</span>
          </h2>
          <p className="text-neutral-400 font-light max-w-2xl mx-auto">
            A curated showcase of transformations — cuts, colors, and styles crafted by
            our team.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 border ${
                  filter === f
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-ink-950 border-gold-400'
                    : 'glass-card text-neutral-400 hover:text-gold-200 border-gold-500/15 hover:border-gold-500/30'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={filter} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[260px] animate-fade-in">
          {images.map((img, idx) => (
            <button
              key={`${img.url}-${idx}`}
              onClick={() => openLightbox(img)}
              className={`group relative w-full h-full rounded-2xl overflow-hidden border border-gold-500/15 hover:border-gold-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/10 ${
                img.span ? 'sm:row-span-2' : ''
              }`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span className="text-[10px] tracking-[0.3em] text-gold-300 uppercase mb-1">
                  {img.category}
                </span>
                <p className="text-sm text-white font-light">{img.alt}</p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-ink-950/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4 text-gold-300" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[100] bg-ink-950/95 backdrop-blur-md flex items-center justify-center p-5 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 p-2.5 rounded-full glass-card hover:bg-gold-500/20 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6 text-gold-300" />
          </button>

          <button
            className="absolute left-4 sm:left-8 p-2.5 rounded-full glass-card hover:bg-gold-500/20 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft className="w-6 h-6 text-gold-300" />
          </button>

          <button
            className="absolute right-4 sm:right-8 p-2.5 rounded-full glass-card hover:bg-gold-500/20 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="w-6 h-6 text-gold-300" />
          </button>

          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.url}
              alt={current.alt}
              className="w-full max-h-[80vh] object-contain rounded-2xl border border-gold-500/30"
            />
            <div className="text-center mt-4">
              <span className="text-xs tracking-[0.3em] text-gold-400 uppercase">
                {current.category}
              </span>
              <p className="text-white font-light mt-1">{current.alt}</p>
              <span className="text-xs text-neutral-500 mt-2 block">
                {lightboxIdx! + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
