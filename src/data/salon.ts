export const SALON = {
  name: 'Hair Lounge Salon',
  tagline: 'The Art of Perfect Hair & Beauty',
  phone: '+917975413713',
  phoneDisplay: '+91 79754 13713',
  secondaryPhone: '+919837088012',
  secondaryPhoneDisplay: '+91 98370 88012',
  landline: '080-35537493',
  whatsapp: '917975413713',
  email: 'hello@hairloungesalon.in',
  address: {
    line1: 'Above New Udupi Grand, #5',
    line2: 'Opposite Acharya Institute of Technology',
    line3: 'Thammenahalli Village',
    city: 'Bengaluru, Karnataka 560107',
  },
  hours: '9:00 AM – 9:00 PM',
  hoursShort: '9 AM – 9 PM',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Hair+Lounge+Salon+Acharya+Institute+of+Technology+Thammenahalli+Bengaluru',
  mapsEmbed:
    'https://www.google.com/maps?q=Acharya+Institute+of+Technology,+Thammenahalli,+Bengaluru,+Karnataka+560107&output=embed',
  instagram: 'https://www.instagram.com/hairloungesalon',
  instagramHandle: '@hairloungesalon',
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
  badge?: string;
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
    tagline: 'Trendy & precision haircuts tailored to frame your face and boost volume.',
    items: [
      { name: 'Butterfly Haircut', price: '₹700', desc: 'Voluminous multi-layered cut with face framing', popular: true, duration: '45 min', badge: 'Trending' },
      { name: 'Wolf Haircut', price: '₹650', desc: 'Edgy, textured modern shaggy layers', popular: true, duration: '45 min', badge: 'Popular' },
      { name: 'Layer Cut with Face Framing', price: '₹600', desc: 'Maintains length while maximizing volume and movement', duration: '45 min' },
      { name: 'Men\'s Burst Fade / Taper Fade', price: '₹300', desc: 'Clean, modern fade cut with razor detailing', popular: true, duration: '30 min' },
      { name: 'Classic Men\'s Haircut', price: '₹250', desc: 'Precision cut with wash and quick styling', duration: '30 min' },
      { name: 'Hair Wash & Blow-Dry', price: '₹250', desc: 'Deep refresh, smoothening, and bounce styling', duration: '25 min' },
    ],
  },
  {
    id: 'treatments',
    label: 'Hair Treatments',
    icon: 'Sparkles',
    tagline: 'Deep cuticle repair and non-chemical frizz control.',
    items: [
      { name: 'Hair Botox Treatment', price: 'From ₹3,499', desc: 'Non-chemical repair for dry, damaged hair; controls frizz and provides 60%–80% smoothing shine', popular: true, duration: '120 min', badge: 'Signature' },
      { name: 'Botox + Red Mahogany Tint', price: 'From ₹4,999', desc: 'Intense hydration coupled with rich custom tone enhancement', popular: true, duration: '150 min' },
      { name: 'Keratin Smoothening', price: '₹3,500', desc: 'Silky smooth frizz-free hair finish', duration: '150 min' },
      { name: 'Deep Moisture Hair Spa', price: '₹999', desc: 'Nourishing scalp and hair cuticle revival', duration: '45 min' },
    ],
  },
  {
    id: 'coloring',
    label: 'Hair Coloring',
    icon: 'Palette',
    tagline: 'Signature balayage, pure blondes, and vibrant transformations.',
    items: [
      { name: 'Any Hair Colour (Special Offer)', price: '₹4,000', desc: 'Limited promotional pricing for full hair colour makeovers', popular: true, duration: '120 min', badge: 'Offer ₹4K' },
      { name: 'Blonde & Gold Reflect Ombré', price: '₹4,000', desc: 'Seamless root blend melting into pure warm blonde tones', popular: true, duration: '150 min' },
      { name: 'Blonde Brown Highlights / Balayage', price: '₹4,000', desc: 'Custom dimensional placement matched to your skin tone', popular: true, duration: '150 min' },
      { name: 'Red Mahogany / Chocolate Mocha', price: '₹4,000', desc: 'Lustrous, deep, bold warm hues', duration: '120 min' },
      { name: 'Root Touch-Up', price: '₹800', desc: 'Seamless regrowth coverage', duration: '45 min' },
    ],
  },
  {
    id: 'grooming',
    label: 'Beard & Grooming',
    icon: 'Wind',
    tagline: 'Crisp fades, straight-razor lines, and relaxing massage rituals.',
    items: [
      { name: 'Beard Trim & Shape', price: '₹150', desc: 'Precision edge lining with hot towel finish', popular: true, duration: '20 min' },
      { name: 'Haircut + Beard Styling Combo', price: '₹400', desc: 'Complete men\'s grooming session', popular: true, duration: '45 min' },
      { name: 'Head Massage (30 min)', price: '₹300', desc: 'Stress-relieving herbal oil massage', duration: '30 min' },
      { name: 'Beard Color & Grey Blending', price: '₹400', desc: 'Natural shade match and tint', duration: '25 min' },
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
    title: 'Signature Botox & Color',
    desc: 'Specializing in non-chemical Hair Botox treatments and global transformations starting at ₹4,000.',
  },
  {
    icon: 'Scissors',
    title: 'Trending Haircuts',
    desc: 'From Butterfly cuts to Burst fades, our artists create styles tailored to your face silhouette.',
  },
  {
    icon: 'GraduationCap',
    title: 'Steps from Acharya Campus',
    desc: 'Located right opposite Acharya Institute of Technology in Thammenahalli for easy student access.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Hygienic & Safe',
    desc: 'Clean environment with sanitized instruments and fresh towels for every client.',
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
    name: 'Mohd',
    role: 'Senior Hair Stylist & Color Specialist',
    specialty: 'Balayage · Hair Botox · Layered Makeovers',
    image: 'https://images.pexels.com/photos/11169551/pexels-photo-11169551.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    experience: 'Expert Colorist (@hair_by_mohd)',
  },
  {
    name: 'Faizy',
    role: 'Master Stylist & Barber',
    specialty: 'Butterfly Cuts · Burst Fades · Creative Styling',
    image: 'https://images.pexels.com/photos/19664892/pexels-photo-19664892.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    experience: 'Trend Stylist (@faizyluce)',
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
    text: 'Got a balayage and Hair Botox here and I\'m obsessed with the result. Mohd understood exactly what I wanted from my reference. The salon is gorgeous and super hygienic too.',
    initials: 'SG',
  },
  {
    name: 'Karthik Raj',
    role: 'Local Resident',
    rating: 5,
    text: 'Been coming here for over a year now. The burst fade and beard shaping by Faizy are on another level — precise, clean, and consistent every single time. The hot towel finish is a game changer.',
    initials: 'KR',
  },
  {
    name: 'Divya Nair',
    role: 'Regular Client',
    rating: 5,
    text: 'Got a Butterfly haircut and global hair color @ ₹4,000 offer — my hair has never had this much volume and shine! Every friend complimented the transformation.',
    initials: 'DN',
  },
  {
    name: 'Aditya Kumar',
    role: 'Student, Acharya Institute',
    rating: 5,
    text: 'The haircut and beard styling combo for ₹400 is unbeatable value. The stylists actually care about how you want to look, not just a factory-line cut. This is my go-to spot now.',
    initials: 'AK',
  },
  {
    name: 'Lakshmi Prasad',
    role: 'Regular Client',
    rating: 5,
    text: 'The Hair Botox treatment completely eliminated my frizz and left my hair silky smooth. Easily the best salon in Thammenahalli right opposite Acharya campus.',
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
