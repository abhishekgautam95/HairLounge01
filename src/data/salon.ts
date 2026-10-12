export const SALON = {
  name: 'Hair Lounge Salon',
  phone: '+918000000000',
  phoneDisplay: '+91 80 0000 0000',
  whatsapp: '918000000000',
  email: 'hello@hairloungesalon.in',
  address: {
    line1: 'Above New Udupi Grand, #5',
    line2: 'Opposite Acharya Institute of Technology',
    line3: 'Thammenahalli Village, Thammenahalli',
    city: 'Bengaluru, Karnataka 560107',
  },
  hours: '9:00 AM – 9:00 PM',
  hoursShort: '9 AM – 9 PM',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Hair+Lounge+Salon+Acharya+Institute+of+Technology+Thammenahalli+Bengaluru',
  mapsEmbed:
    'https://www.google.com/maps?q=Acharya+Institute+of+Technology,+Thammenahalli,+Bengaluru,+Karnataka+560107&output=embed',
  instagram: 'https://instagram.com',
};

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export type ServiceItem = {
  name: string;
  price: string;
  desc?: string;
  popular?: boolean;
  duration?: string;
};

export type ServiceCategory = {
  id: string;
  label: string;
  icon: string;
  tagline: string;
  items: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'haircuts',
    label: 'Haircuts & Styling',
    icon: 'Scissors',
    tagline: 'Precision cuts tailored to your face, lifestyle, and personality.',
    items: [
      { name: 'Classic Men\'s Haircut', price: '₹250', desc: 'Precision cut with wash & style', popular: true, duration: '30 min' },
      { name: 'Women\'s Haircut & Blow-Dry', price: '₹500', desc: 'Cut, wash, and blow-dry styling', duration: '45 min' },
      { name: 'Kids Haircut (under 12)', price: '₹180', desc: 'Gentle styling for little ones', duration: '20 min' },
      { name: 'Premium Streaks & Layer Cut', price: '₹800', desc: 'Layered cut with textured finish', duration: '50 min' },
      { name: 'Hair Wash & Blow-Dry', price: '₹200', desc: 'Refresh and style', duration: '20 min' },
      { name: 'Ironing / Smoothening', price: '₹1,500', desc: 'Sleek, frizz-free finish', duration: '90 min' },
    ],
  },
  {
    id: 'coloring',
    label: 'Hair Coloring',
    icon: 'Palette',
    tagline: 'From subtle glosses to bold transformations — premium color, expertly applied.',
    items: [
      { name: 'Global Hair Color', price: '₹1,200', desc: 'Full coverage single tone', popular: true, duration: '90 min' },
      { name: 'Highlights (Streaks)', price: '₹2,500', desc: 'Partial highlights, premium brands', duration: '120 min' },
      { name: 'Balayage / Ombre', price: '₹4,000', desc: 'Graduated color, hand-painted', popular: true, duration: '150 min' },
      { name: 'Root Touch-Up', price: '₹600', desc: 'Cover regrowth seamlessly', duration: '45 min' },
      { name: 'Fashion / Vivid Colors', price: '₹3,000', desc: 'Bold pinks, blues, greens', duration: '120 min' },
      { name: 'Keratin Treatment', price: '₹3,500', desc: 'Smooth, strengthen & shine', duration: '180 min' },
    ],
  },
  {
    id: 'beard',
    label: 'Beard & Grooming',
    icon: 'Wind',
    tagline: 'Sharp lines, clean shaves, and relaxing grooming rituals.',
    items: [
      { name: 'Beard Trim & Shape', price: '₹120', desc: 'Precision shaping with hot towel', popular: true, duration: '20 min' },
      { name: 'Royal Shave', price: '₹200', desc: 'Traditional straight-razor shave', duration: '30 min' },
      { name: 'Beard Coloring', price: '₹400', desc: 'Cover greys, match your style', duration: '25 min' },
      { name: 'Hair & Beard Combo', price: '₹350', desc: 'Haircut + beard trim', popular: true, duration: '45 min' },
      { name: 'Head Massage (30 min)', price: '₹250', desc: 'Relaxing oil head massage', duration: '30 min' },
      { name: 'Full Grooming Package', price: '₹800', desc: 'Haircut, beard, shave & facial', duration: '90 min' },
    ],
  },
  {
    id: 'facial',
    label: 'Facials & Skin Care',
    icon: 'Sparkles',
    tagline: 'Rejuvenate your skin with treatments designed for Indian skin tones.',
    items: [
      { name: 'Classic Cleanup Facial', price: '₹500', desc: 'Cleanse, exfoliate & moisturize', duration: '30 min' },
      { name: 'Gold Glow Facial', price: '₹1,200', desc: '24K gold infusion for radiant skin', popular: true, duration: '60 min' },
      { name: 'Anti-Tan Facial', price: '₹900', desc: 'De-tan and brighten', duration: '45 min' },
      { name: 'Acne Control Facial', price: '₹1,000', desc: 'Targeted treatment for clear skin', duration: '50 min' },
      { name: 'Threading (Eyebrows)', price: '₹50', desc: 'Precision brow shaping', duration: '10 min' },
      { name: 'Waxing (Full Arms)', price: '₹250', desc: 'Smooth, long-lasting results', duration: '20 min' },
    ],
  },
  {
    id: 'bridal',
    label: 'Bridal & Special Events',
    icon: 'Crown',
    tagline: 'Your biggest moments deserve our most luxurious artistry.',
    items: [
      { name: 'Bridal Hair & Makeup', price: '₹8,000', desc: 'Complete bridal transformation', popular: true, duration: '3 hrs' },
      { name: 'Pre-Bridal Package (5 sessions)', price: '₹12,000', desc: 'Skin, hair & body prep sessions', duration: '5 sessions' },
      { name: 'Engagement / Party Makeup', price: '₹3,500', desc: 'Glam look for special occasions', duration: '90 min' },
      { name: 'Hairstyling for Events', price: '₹1,500', desc: 'Updos, curls & statement styles', duration: '60 min' },
      { name: 'Group / Family Booking', price: 'On request', desc: 'Custom packages for groups', duration: 'Custom' },
    ],
  },
];

export type GalleryImage = {
  url: string;
  alt: string;
  category: 'Haircut' | 'Color' | 'Grooming' | 'Facial' | 'Bridal';
  span?: boolean;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  { url: 'https://images.pexels.com/photos/12464847/pexels-photo-12464847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Precision haircut with scissors', category: 'Haircut', span: true },
  { url: 'https://images.pexels.com/photos/8468038/pexels-photo-8468038.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Hair coloring application', category: 'Color' },
  { url: 'https://images.pexels.com/photos/3998402/pexels-photo-3998402.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Beard trim and grooming', category: 'Grooming' },
  { url: 'https://images.pexels.com/photos/36784935/pexels-photo-36784935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Blonde hair transformation', category: 'Color', span: true },
  { url: 'https://images.pexels.com/photos/12115040/pexels-photo-12115040.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Facial skincare treatment', category: 'Facial' },
  { url: 'https://images.pexels.com/photos/9992819/pexels-photo-9992819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Beard styling session', category: 'Grooming' },
  { url: 'https://images.pexels.com/photos/20249093/pexels-photo-20249093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Bridal hairstyle elegance', category: 'Bridal' },
  { url: 'https://images.pexels.com/photos/5509059/pexels-photo-5509059.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Modern clipper haircut', category: 'Haircut' },
  { url: 'https://images.pexels.com/photos/8468126/pexels-photo-8468126.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Hair highlights with foil', category: 'Color' },
  { url: 'https://images.pexels.com/photos/15686774/pexels-photo-15686774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Bridal glam look', category: 'Bridal', span: true },
  { url: 'https://images.pexels.com/photos/32329615/pexels-photo-32329615.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Barber cutting hair', category: 'Haircut' },
  { url: 'https://images.pexels.com/photos/10586305/pexels-photo-10586305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Beard grooming precision', category: 'Grooming' },
];

export type Highlight = {
  icon: string;
  title: string;
  desc: string;
};

export const HIGHLIGHTS: Highlight[] = [
  {
    icon: 'Award',
    title: 'Expert Stylists',
    desc: 'Our team brings years of professional training and industry experience to every cut, color, and style.',
  },
  {
    icon: 'FlaskConical',
    title: 'Premium Products',
    desc: 'We use only top-tier salon brands — gentle on your hair and skin, stunning in results.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Hygienic & Safe',
    desc: 'Sanitized tools, fresh towels, and a spotless environment for every single client.',
  },
  {
    icon: 'GraduationCap',
    title: 'Student-Friendly',
    desc: 'Right opposite Acharya Institute of Technology — walk in between classes or after hours.',
  },
];

export type TeamMember = {
  name: string;
  role: string;
  specialty: string;
  image: string;
  experience: string;
};

export const TEAM: TeamMember[] = [
  {
    name: 'Arjun Reddy',
    role: 'Master Stylist & Founder',
    specialty: 'Precision cuts · Balayage',
    image: 'https://images.pexels.com/photos/11169551/pexels-photo-11169551.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    experience: '12+ years',
  },
  {
    name: 'Priya Sharma',
    role: 'Senior Colorist',
    specialty: 'Vivid colors · Highlights',
    image: 'https://images.pexels.com/photos/8468036/pexels-photo-8468036.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    experience: '8+ years',
  },
  {
    name: 'Vikram Nair',
    role: 'Barber & Grooming Expert',
    specialty: 'Fades · Beard sculpting',
    image: 'https://images.pexels.com/photos/19664892/pexels-photo-19664892.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    experience: '7+ years',
  },
  {
    name: 'Ananya Iyer',
    role: 'Bridal Makeup Artist',
    specialty: 'Bridal glam · Special events',
    image: 'https://images.pexels.com/photos/18063744/pexels-photo-18063744.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    experience: '10+ years',
  },
];

export type Testimonial = {
  name: string;
  role: string;
  rating: number;
  text: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rahul Verma',
    role: 'Student, Acharya Institute',
    rating: 5,
    text: 'Honestly the best haircut I\'ve had in Bengaluru. The vibe is premium but the pricing is totally student-friendly. I walk in between classes and I\'m always out in 30 minutes looking sharp.',
    initials: 'RV',
  },
  {
    name: 'Sneha Gowda',
    role: 'IT Professional',
    rating: 5,
    text: 'Got a balayage here and I\'m obsessed with the result. Priya understood exactly what I wanted from my Pinterest reference. The salon is gorgeous and super hygienic too.',
    initials: 'SG',
  },
  {
    name: 'Karthik Raj',
    role: 'Local Resident',
    rating: 5,
    text: 'Been coming here for over a year now. The beard shaping is on another level — precise, clean, and consistent every single time. The hot towel finish is a game changer.',
    initials: 'KR',
  },
  {
    name: 'Divya Nair',
    role: 'Bride, 2025',
    rating: 5,
    text: 'They did my bridal hair and makeup and I felt like a queen. Ananya listened to every detail and the trial session gave me total confidence. Every guest at my wedding complimented the look!',
    initials: 'DN',
  },
  {
    name: 'Aditya Kumar',
    role: 'Student, Acharya Institute',
    rating: 5,
    text: 'The hair and beard combo for ₹350 is unbeatable value. The stylists actually care about how you want to look, not just a factory-line cut. This is my go-to spot now.',
    initials: 'AK',
  },
  {
    name: 'Lakshmi Prasad',
    role: 'Regular Client',
    rating: 5,
    text: 'The gold glow facial left my skin radiant for days. The ambience is so relaxing — you forget you\'re right next to a busy college. Easily the best salon in Thammenahalli.',
    initials: 'LP',
  },
];

export type FAQItem = {
  q: string;
  a: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    q: 'Do I need an appointment or can I walk in?',
    a: 'Both! We welcome walk-ins and are open daily from 9 AM to 9 PM. However, we recommend booking ahead, especially on weekends and evenings, to avoid wait times. You can book instantly via WhatsApp or phone.',
  },
  {
    q: 'Do you offer student discounts?',
    a: 'Yes! Being right opposite Acharya Institute of Technology, we love our student community. Show your valid student ID and get special pricing on select services. Ask us about our combo deals too.',
  },
  {
    q: 'What hair coloring brands do you use?',
    a: 'We use only premium, ammonia-free brands including L\'Oreal Professionnel, Schwarzkopf, and Wella. Our colorists will recommend the best option for your hair type during your consultation.',
  },
  {
    q: 'How early should I book for bridal services?',
    a: 'For bridal packages, we recommend booking at least 4-6 weeks in advance to ensure availability and schedule pre-bridal prep sessions. We also offer trials so you can feel confident on your big day.',
  },
  {
    q: 'Is parking available near the salon?',
    a: 'Yes, there is street parking available on the road adjacent to New Udupi Grand. The salon is easily accessible — we\'re on the first floor, above the restaurant.',
  },
  {
    q: 'Do you use sanitized tools for every client?',
    a: 'Absolutely. Hygiene is our top priority. All tools are sanitized between every client, we use fresh towels for each service, and our stations are cleaned continuously throughout the day.',
  },
];

export type StatItem = {
  value: number;
  suffix: string;
  label: string;
};

export const STATS: StatItem[] = [
  { value: 5000, suffix: '+', label: 'Happy Clients' },
  { value: 12, suffix: '+', label: 'Years Experience' },
  { value: 30, suffix: '+', label: 'Services Offered' },
  { value: 5, suffix: '', label: 'Star Rating' },
];

export const HERO_IMAGES = {
  main: 'https://images.pexels.com/photos/7195811/pexels-photo-7195811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  secondary: 'https://images.pexels.com/photos/7195803/pexels-photo-7195803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  tertiary: 'https://images.pexels.com/photos/13068377/pexels-photo-13068377.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

export const ABOUT_IMAGE = 'https://images.pexels.com/photos/13068357/pexels-photo-13068357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
