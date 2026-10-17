# Hair Lounge Salon — Official Website

> **The Art of Perfect Hair & Beauty**  
> A modern, responsive web experience for **Hair Lounge Salon**, located opposite Acharya Institute of Technology in Thammenahalli, Bengaluru.

---

## ✨ Overview

**Hair Lounge Salon** blends luxury hair and beauty artistry with student-friendly accessibility. This single-page web application showcases the salon's signature services, transparent pricing, senior stylists, lookbook gallery, client reviews, and instant WhatsApp/phone appointment booking.

---

## 🚀 Key Features

- **Interactive Services & Pricing Catalog:** Filterable by category (*Haircuts & Styling*, *Hair Treatments*, *Hair Coloring*, *Beard & Grooming*) with duration estimates, promotional badges (`Trending`, `Signature`, `Offer ₹4K`, `Popular`), and one-click WhatsApp booking per service.
- **Direct WhatsApp & Call Booking Modal:** Pre-fills customer name, selected service, preferred date, and time into a direct WhatsApp message (`+91 79754 13713`) or initiates a phone call.
- **Senior Stylists Showcase:** Highlights Hair Lounge's lead artists — **Mohd** (`@hair_by_mohd`, Senior Hair Stylist & Color Specialist) and **Faizy** (`@faizyluce`, Master Stylist & Barber).
- **Curated Lookbook Gallery:** Category-filtered masonry grid with an interactive full-screen lightbox viewer.
- **Client Testimonials & FAQ:** Auto-advancing review carousel and expandable accordion for common visitor and student questions.
- **Location & Multi-Line Contact Hub:** Embedded Google Maps view, daily operating hours (`9:00 AM – 9:00 PM`), and quick-dial links for primary, secondary, and landline numbers.
- **Refined UI/UX:** Dark-luxury aesthetic (`ink` & `gold` palette), glassmorphism cards, scroll-triggered reveal animations, custom cursor glow, and top scroll progress indicator.

---

## 💇 Signature Services Highlighted

| Category | Featured Offerings | Price Range |
| :--- | :--- | :--- |
| **Haircuts & Styling** | Butterfly Haircut, Wolf Haircut, Layer Cut with Face Framing, Men's Burst / Taper Fade | `₹250 – ₹700` |
| **Hair Treatments** | Signature Hair Botox Treatment (60%–80% smoothing), Botox + Red Mahogany Tint, Keratin Smoothening, Hair Spa | `₹999 – ₹4,999+` |
| **Hair Coloring** | Any Hair Colour (Special Offer), Blonde & Gold Reflect Ombré, Balayage / Highlights, Red Mahogany, Root Touch-Up | `₹800 – ₹4,000` |
| **Beard & Grooming** | Beard Trim & Hot Towel Shape, Haircut + Beard Styling Combo, Herbal Oil Head Massage, Grey Blending | `₹150 – ₹400` |

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 5](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) + Custom CSS utilities
- **Icons:** [Lucide React](https://lucide.dev/)
- **Linting:** ESLint 9 + TypeScript ESLint

---

## 📁 Project Structure

```text
HairLounge01/
├── index.html                  # HTML entry point, SEO & Open Graph metadata
├── package.json                # Scripts and dependencies
├── tailwind.config.js          # Custom color palette (gold, ink, rose), fonts & animations
├── vite.config.ts              # Vite bundler & path alias (@/) configuration
└── src/
    ├── main.tsx                # React DOM root
    ├── App.tsx                 # Main layout, Marquee & Floating WhatsApp button
    ├── index.css               # Global styles, glass-card utilities & keyframes
    ├── data/
    │   └── salon.ts            # Centralized salon info, services, team, gallery & FAQs
    └── components/
        ├── Navbar.tsx          # Responsive sticky navigation bar
        ├── Hero.tsx            # Hero banner with parallax & quick CTAs
        ├── StatsBar.tsx        # Animated counter metrics
        ├── Services.tsx        # Tabbed service menu & direct WhatsApp booking
        ├── About.tsx           # Salon highlights & Senior Stylists showcase
        ├── Gallery.tsx         # Filterable lookbook grid with modal lightbox
        ├── Testimonials.tsx    # Client testimonial carousel
        ├── FAQ.tsx             # Frequently asked questions accordion
        ├── Location.tsx        # Address, hours, contact numbers & Google Map embed
        ├── Footer.tsx          # Quick links, contact details & social links
        ├── BookingModal.tsx    # Interactive appointment reservation modal
        ├── Reveal.tsx          # IntersectionObserver scroll-reveal wrapper
        ├── ScrollProgress.tsx  # Top reading progress bar
        ├── CursorGlow.tsx      # Ambient pointer glow effect
        └── BackToTop.tsx       # Floating scroll-to-top button
```

---

## ⚡ Getting Started

### Prerequisites

- **Node.js** `>= 18.x`
- **npm** `>= 9.x`

### 1. Clone the repository

```bash
git clone https://github.com/abhishekgautam95/HairLounge01.git
cd HairLounge01
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Type-check & build for production

```bash
# Run TypeScript type checking
npm run typecheck

# Create optimized production bundle in dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 📍 Salon Information

- **Address:** Above New Udupi Grand, #5, Opposite Acharya Institute of Technology, Thammenahalli Village, Bengaluru, Karnataka 560107
- **Operating Hours:** 9:00 AM – 9:00 PM (Open Daily)
- **Primary Phone / WhatsApp:** `+91 79754 13713`
- **Secondary Phone:** `+91 98370 88012`
- **Landline:** `080-35537493`
- **Instagram:** [@hairloungesalon](https://www.instagram.com/hairloungesalon)
