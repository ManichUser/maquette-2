import React, { useState, useRef } from 'react';
import { 
  Scissors, Calendar, Clock, Sparkles, Play, Trash2, Plus, Check, Globe, 
  Smartphone, Tablet, Monitor, User, Coffee, MapPin, Phone, ShieldCheck, 
  X, ChevronRight, ChevronLeft, Settings, Image as ImageIcon, Lock, Upload, 
  Star, Eye, Heart, MessageSquare, ArrowRight, CheckCircle2, RefreshCw, Feather, Smile, Gem
} from 'lucide-react';
import hauteCoiffureImg from './assets/image.jpg';
import LookbookSection from './components/LookBookCarousel.jsx';

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
    
    html {
      scroll-behavior: smooth;
    }
    .font-serif-couture {
      font-family: 'Playfair Display', Georgia, serif;
    }
    .font-sans-clean {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    .bg-linen {
      background-color: #FDF9F4;
    }
    .text-linen {
      color: #FDF9F4;
    }
    .text-ink {
      color: #141414;
    }
    .bg-ink {
      background-color: #141414;
    }
    .border-ink {
      border-color: #141414;
    }
    .text-couture-magenta {
      color: #B8336A;
    }
    .bg-couture-magenta {
      background-color: #B8336A;
    }
    .border-couture-magenta {
      border-color: #B8336A;
    }
    .custom-shadow {
      box-shadow: 0 10px 30px -10px rgba(20, 20, 20, 0.08);
    }
  `}</style>
);

const TRANSLATIONS = {
  en: {
    navHome: "L'Origine",
    navAbout: "L'Âme & La Signature",
    navLookbook: "Collections",
    navContact: "Conciergerie",
    heroTag: "Haute Coiffure · Alamo Heights",
    heroTitle: "Zero-Tension Braid Artistry",
    heroSubtitle: "Elevating ancestral hair braiding to an haute couture ritual in San Antonio.",
    bookBtn: "Reserve an Atelier Session",
    exploreStyles: "Explore Lookbook",
    artistTitle: "The Artist & Persona",
    artistName: "Elena Vance",
    artistSubtitle: "Master Braider & Aesthetic Visionary",
    pillarsTitle: "The Three Atelier Pillars",
    pillar1Title: "Zero-Tension Protocol",
    pillar1Desc: "Patented gentle grip technique preserving follicle health and scalp comfort.",
    pillar2Title: "Editorial Micro-Parting",
    pillar2Desc: "Surgical geometric precision for impeccable, long-lasting symmetry.",
    pillar3Title: "Private 1-on-1 Atelier",
    pillar3Desc: "A peaceful sanctuary in Alamo Heights with undivided master attention.",
    lookbookTitle: "Signature Collections",
    lookbookSubtitle: "Handcrafted styles using hypoallergenic organic hair extensions.",
    duration: "Duration",
    from: "From",
    selectStyle: "Select Style",
    viewDetails: "Technical Fiche",
    inclusionsTitle: "Service Inclusions",
    inc1: "Hypoallergenic bio-hair extensions included",
    inc2: "Scalp soothing organic botanical prep",
    inc3: "Signature tea or artisanal espresso beverage",
    inc4: "Post-care luxury scalp elixir kit",
    galleryTitle: "The Work & Motion Reels",
    gallerySubtitle: "Cinematic close-ups and editorial captures from our San Antonio studio.",
    viewReel: "Play Reel",
    conciergeTitle: "Atelier Concierge",
    address: "Broadway St & Sunset Rd, Alamo Heights, San Antonio, TX 78209",
    hours: "Tue - Sat: 9:30 AM - 6:30 PM",
    vipWhatsapp: "VIP Concierge WhatsApp",
    bookingTitle: "VIP Atelier Booking",
    step1: "1. Style & Length",
    step2: "2. Date",
    step3: "3. Time Slot",
    step4: "4. Guest & Beverage",
    step5: "5. Confirmation",
    next: "Continue",
    back: "Back",
    confirmBooking: "Confirm $50 Deposit & Book",
    chooseDrink: "Select Welcome Beverage",
    drinkHibiscus: "Organic Cold-Pressed Hibiscus Infusion",
    drinkEspresso: "Artisanal Espresso & Oat Milk",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Mobile Phone",
    summary: "Reservation Summary",
    depositNotice: "A $50 deposit secures your private 1-on-1 atelier slot.",
    successTitle: "Reservation Confirmed",
    successMsg: "Your private session is reserved. We look forward to welcoming you at Alamo Heights.",
    resCode: "Reservation Code",
    addToCalendar: "Add to Calendar (.ics)",
    mapDirections: "Get Directions",
    done: "Return to Atelier",
    adminDashboard: "Atelier Back-Office",
    tabStyles: "Catalog & Styles",
    tabGallery: "Media & Reels",
    tabSettings: "Salon Settings",
    addStyle: "Add New Style",
    addMedia: "Add Media Asset",
    editStyle: "Edit Style",
    delete: "Delete",
    save: "Save Changes",
    activeStatus: "Active",
    inactiveStatus: "Inactive",
    salonName: "Salon / Brand Name",
    whatsappPhone: "WhatsApp / Concierge Phone",
    operatingHours: "Operating Days & Hours",
    logoText: "Brand Logo Text",
    mediaUrl: "Image / Video URL",
    videoDuration: "Timecode Badge (e.g. 0:18)",
    isVideo: "Is Motion Video Reel",
  },
  fr: {
    navHome: "L'Origine",
    navAbout: "L'Âme & La Signature",
    navLookbook: "Collections",
    navContact: "Conciergerie",
    heroTag: "Haute Coiffure · Alamo Heights",
    heroTitle: "L'Art du Tressage Zéro-Tension",
    heroSubtitle: "Élever le tressage ancestral au rang de rituel haute couture à San Antonio.",
    bookBtn: "Réserver un Atelier",
    exploreStyles: "Découvrir le Lookbook",
    artistTitle: "L'Artisane & Le Portrait",
    artistName: "Elena Vance",
    artistSubtitle: "Maître Coiffeuse & Créatrice Esthétique",
    pillarsTitle: "Les Trois Piliers de l'Atelier",
    pillar1Title: "Protocole Zéro-Tension",
    pillar1Desc: "Technique douce préservant la santé du cuir chevelu et la racine des cheveux.",
    pillar2Title: "Micro-Séparations Géométriques",
    pillar2Desc: "Précision chirurgicale pour une symétrie éditoriale d'exception.",
    pillar3Title: "Atelier Privé 1-sur-1",
    pillar3Desc: "Un havre de paix feutré à Alamo Heights pour un service personnalisé sans distraction.",
    lookbookTitle: "Collections Signature",
    lookbookSubtitle: "Coiffures sur mesure intégrant des mèches bio hypoallergéniques fournies.",
    duration: "Durée",
    from: "À partir de",
    selectStyle: "Choisir ce style",
    viewDetails: "Fiche Technique",
    inclusionsTitle: "Inclusions du Service",
    inc1: "Mèches bio hypoallergéniques haut de gamme incluses",
    inc2: "Préparation botanique apaisante du cuir chevelu",
    inc3: "Boisson d'accueil offerte (Infusion hibiscus bio ou Espresso)",
    inc4: "Kit élixir de soin du cuir chevelu offert",
    galleryTitle: "Galerie & Reels Cinématiques",
    gallerySubtitle: "Captures éditoriales et mouvements en direct de notre salon à San Antonio.",
    viewReel: "Voir le Reel",
    conciergeTitle: "Conciergerie Atelier",
    address: "Broadway St & Sunset Rd, Alamo Heights, San Antonio, TX 78209",
    hours: "Mar - Sam: 9h30 - 18h30",
    vipWhatsapp: "Concierge WhatsApp VIP",
    bookingTitle: "Réservation Atelier VIP",
    step1: "1. Style & Longueur",
    step2: "2. Date",
    step3: "3. Créneau Horaires",
    step4: "4. Coordonnées & Accueil",
    step5: "5. Confirmation",
    next: "Continuer",
    back: "Retour",
    confirmBooking: "Confirmer l'Acompte de $50",
    chooseDrink: "Boisson d'Accueil Offerte",
    drinkHibiscus: "Infusion Hibiscus Bio Glacée",
    drinkEspresso: "Espresso Artisanal & Lait d'Avoine",
    fullName: "Nom Complet",
    email: "Adresse Email",
    phone: "Téléphone Mobile",
    summary: "Récapitulatif de Réservation",
    depositNotice: "Acompte de $50 requis pour réserver votre atelier privé 1-sur-1.",
    successTitle: "Réservation Confirmée",
    successMsg: "Votre atelier est réservé. Nous avons hâte de vous accueillir à Alamo Heights.",
    resCode: "Code de Réservation",
    addToCalendar: "Ajouter au Calendrier (.ics)",
    mapDirections: "Itinéraire Alamo Heights",
    done: "Retour à l'Atelier",
    adminDashboard: "Back-Office Atelier",
    tabStyles: "Catalogue & Styles",
    tabGallery: "Médias & Reels",
    tabSettings: "Configuration Salon",
    addStyle: "Ajouter un Style",
    addMedia: "Ajouter un Média",
    editStyle: "Éditer le Style",
    delete: "Supprimer",
    save: "Enregistrer",
    activeStatus: "Actif",
    inactiveStatus: "Inactif",
    salonName: "Nom du Salon / Marque",
    whatsappPhone: "Téléphone WhatsApp Concierge",
    operatingHours: "Jours & Horaires d'Ouverture",
    logoText: "Texte du Logo",
    mediaUrl: "URL de l'image / vidéo",
    videoDuration: "Badge Timecode (ex: 0:18)",
    isVideo: "Est un Reel Vidéo",
  }
};

const INITIAL_STYLES = [
  {
    id: 's1',
    name: 'Knotless Braids Couture',
    price: 220,
    duration: '3h 30m',
    category: 'Knotless',
    image: 'https://images.unsplash.com/photo-1605980776566-0495564c865f?auto=format&fit=crop&w=800&q=80',
    desc: 'Lightweight, natural scalp tension-free braid installation. Premium hypoallergenic organic bio-extensions included.',
    active: true,
  },
  {
    id: 's2',
    name: 'Box Braids Masterclass',
    price: 260,
    duration: '4h 00m',
    category: 'Box Braids',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    desc: 'Clean geometric square partings with luxurious silky ends. Premium botanical scalp oil treatment included.',
    active: true,
  },
  {
    id: 's3',
    name: 'Fulani Royal Braids',
    price: 195,
    duration: '3h 00m',
    category: 'Fulani',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
    desc: 'Intricate crown braiding adorned with brass beads and fine cowrie accents. Timeless editorial silhouette.',
    active: true,
  },
  {
    id: 's4',
    name: 'Geometric Micro Cornrows',
    price: 150,
    duration: '2h 45m',
    category: 'Cornrows',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    desc: 'Surgical parting with zero pull force. Ideal for active lifestyles and natural hair protective styling.',
    active: true,
  }
];

const INITIAL_GALLERY = [
  {
    id: 'g1',
    title: 'Micro-Parting Precision',
    type: 'video',
    durationBadge: '0:18',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    tag: 'Knotless'
  },
  {
    id: 'g2',
    title: 'Alamo Heights Atelier Ambience',
    type: 'photo',
    durationBadge: null,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    tag: 'Atelier'
  },
  {
    id: 'g3',
    title: 'Tension-Free Braid Fluidity',
    type: 'video',
    durationBadge: '0:12',
    image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80',
    tag: 'Fulani'
  },
  {
    id: 'g4',
    title: 'Editorial Golden Accents',
    type: 'photo',
    durationBadge: null,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    tag: 'Details'
  },
  {
    id: 'g5',
    title: 'Scalp Health & Hair Prep',
    type: 'video',
    durationBadge: '0:24',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    tag: 'Care'
  },
  {
    id: 'g6',
    title: 'Knotless Long Length Finish',
    type: 'photo',
    durationBadge: null,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
    tag: 'Knotless'
  }
];

const INITIAL_SALON_INFO = {
  logoText: 'SAN ANTONIO BRAIDERS',
  subtitle: 'Haute Coiffure & Atelier de Tressage',
  address: 'Broadway St & Sunset Rd, Alamo Heights, San Antonio, TX 78209',
  phone: '+1 (210) 892-3401',
  whatsapp: '+12108923401',
  defaultLang: 'FR',
  hours: {
    Mon: 'Closed',
    Tue: '09:30 - 18:30',
    Wed: '09:30 - 18:30',
    Thu: '09:30 - 18:30',
    Fri: '09:30 - 18:30',
    Sat: '09:00 - 17:00',
    Sun: 'Closed'
  }
};

function GalleryCarouselSection({ gallery, setLightboxItem, text }) {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="galerie" className="w-full bg-stone-100/80 border-t border-stone-200 py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B8336A]">
              Portfolio
            </span>
            <h2 className="font-serif-couture text-2xl md:text-3xl font-bold text-[#141414] mt-1">
              {text.galleryTitle}
            </h2>
            <p className="text-stone-600 text-xs md:text-sm mt-1">{text.gallerySubtitle}</p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => handleScroll('left')}
              className="p-2.5 rounded-full border border-stone-300 bg-white text-[#141414] hover:bg-[#B8336A] hover:text-white hover:border-[#B8336A] transition-all shadow-sm active:scale-95"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-2.5 rounded-full border border-stone-300 bg-white text-[#141414] hover:bg-[#B8336A] hover:text-white hover:border-[#B8336A] transition-all shadow-sm active:scale-95"
              aria-label="Suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {gallery.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setLightboxItem(item)}
              className="flex-none w-[220px] sm:w-[280px] snap-start group relative rounded-xl overflow-hidden aspect-square bg-stone-200 cursor-pointer border border-stone-300 shadow-sm hover:border-[#B8336A] transition-all"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {item.type === 'video' && (
                <div className="absolute top-3 left-3 bg-black/75 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-sm z-10">
                  <Play className="w-3 h-3 fill-current text-[#B8336A]" />
                  <span>REEL {item.durationBadge}</span>
                </div>
              )}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase tracking-widest text-pink-200 font-semibold">{item.tag}</span>
                <p className="font-serif-couture text-xs font-bold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [lang, setLang] = useState('fr');
  const [mode, setMode] = useState('client');

  const [styles, setStyles] = useState(INITIAL_STYLES);
  const [gallery, setGallery] = useState(INITIAL_GALLERY);
  const [salonInfo, setSalonInfo] = useState(INITIAL_SALON_INFO);

  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedStyleDetail, setSelectedStyleDetail] = useState(null);
  const [lightboxItem, setLightboxItem] = useState(null);

  const [bookingData, setBookingData] = useState({
    styleId: INITIAL_STYLES[0].id,
    date: '2026-09-28',
    timeSlot: '09:30 AM',
    fullName: 'Camille Laurent',
    email: 'camille@example.com',
    phone: '+1 (210) 555-0192',
    welcomeDrink: 'Infusion Hibiscus Bio Glacée',
    reservationCode: 'SAB-8921'
  });

  const text = TRANSLATIONS[lang];

  const handleOpenBooking = (styleId = null) => {
    if (styleId) {
      setBookingData(prev => ({ ...prev, styleId }));
    }
    setBookingStep(1);
    setBookingOpen(true);
  };

  const selectedStyleObj = styles.find(s => s.id === bookingData.styleId) || styles[0];

  const buildWhatsAppMessage = () => {
    const lines = [
      `New booking request — ${salonInfo.logoText}`,
      `Style: ${selectedStyleObj.name} ($${selectedStyleObj.price})`,
      `Date: ${bookingData.date} at ${bookingData.timeSlot}`,
      `Guest: ${bookingData.fullName}`,
      `Phone: ${bookingData.phone}`,
      bookingData.email ? `Email: ${bookingData.email}` : null,
      `Reservation Code: ${bookingData.reservationCode}`,
    ].filter(Boolean);
    return lines.join('\n');
  };

  const sendToWhatsApp = () => {
    const digits = salonInfo.whatsapp.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${digits}?text=${encodeURIComponent(buildWhatsAppMessage())}`;
    window.open(url, '_blank', 'noopener');
  };

  return (
    <div className="min-h-screen bg-linen font-sans-clean text-ink flex flex-col items-center">
      <FontLoader />

      <main className="w-full flex-1 relative">
        {mode === 'client' ? (
          <div className="w-full min-h-full bg-linen text-ink selection:bg-couture-magenta selection:text-white">

            {/* NAVBAR AVEC DÉFILEMENT FLUIDE ET BOUTONS ORIGINAUX */}
            <nav className="w-full px-4 sm:px-8 py-4 flex items-center justify-between border-b border-stone-200/80 sticky top-0 bg-linen/95 backdrop-blur-md z-40 gap-4">
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-9 h-9 rounded-full bg-[#141414] text-[#FDF9F4] flex items-center justify-center font-serif-couture font-bold text-sm shadow-md">
                  SA
                </div>
                <div className="hidden sm:block">
                  <h1 className="font-serif-couture font-bold text-sm tracking-widest text-[#141414] uppercase leading-none">
                    {salonInfo.logoText}
                  </h1>
                  <p className="text-[10px] text-stone-500 tracking-wider uppercase font-medium mt-0.5">
                    {salonInfo.subtitle}
                  </p>
                </div>
              </div>

              {/* NAV LINKS - SMOOTH SCROLL */}
              <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-stone-700">
                <a 
                  href="#accueil" 
                  className="hover:text-[#B8336A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B8336A] hover:after:w-full after:transition-all"
                >
                  {text.navHome}
                </a>
                <a 
                  href="#a-propos" 
                  className="hover:text-[#B8336A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B8336A] hover:after:w-full after:transition-all"
                >
                  {text.navAbout}
                </a>
                <a 
                  href="#lookbook" 
                  className="hover:text-[#B8336A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B8336A] hover:after:w-full after:transition-all"
                >
                  {text.navLookbook}
                </a>
                <a 
                  href="#contact" 
                  className="hover:text-[#B8336A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B8336A] hover:after:w-full after:transition-all"
                >
                  {text.navContact}
                </a>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-1 bg-stone-200/60 p-0.5 rounded-md">
                  <button
                    onClick={() => setLang('en')}
                    className={`px-2 py-1 rounded text-[11px] font-bold transition-all ${lang === 'en' ? 'bg-[#141414] text-white' : 'text-stone-500 hover:text-ink'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLang('fr')}
                    className={`px-2 py-1 rounded text-[11px] font-bold transition-all ${lang === 'fr' ? 'bg-[#141414] text-white' : 'text-stone-500 hover:text-ink'}`}
                  >
                    FR
                  </button>
                </div>

                <button
                  onClick={() => handleOpenBooking()}
                  className="bg-[#B8336A] hover:bg-[#9a2855] text-white px-4 sm:px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide transition-all shadow-md flex items-center gap-2 border border-[#B8336A]"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{text.bookBtn}</span>
                </button>

                <button
                  onClick={() => setMode('admin')}
                  title="Admin Back-Office"
                  className="w-9 h-9 rounded-full bg-[#141414] text-[#FDF9F4] flex items-center justify-center hover:bg-stone-800 transition-all shrink-0"
                >
                  <Settings className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </nav>

            {/* SECTION ACCUEIL (HERO) */}
            <section id="accueil" className="group relative w-full px-6 pt-12 pb-16 md:pt-20 md:pb-28 overflow-hidden min-h-[600px] md:min-h-0 flex items-center">
              <div className="absolute inset-0 z-0 md:hidden overflow-hidden">
                <img 
                  src={hauteCoiffureImg} 
                  alt="Haute Coiffure Braid Artistry" 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
              </div>

              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10 w-full">
                <div className="md:col-span-7 space-y-6 md:bg-transparent p-6 md:p-0 md:backdrop-blur-none md:border-none shadow-2xl md:shadow-none">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/90 md:bg-stone-200/60 border border-stone-300 text-stone-800 md:text-stone-700 text-xs font-medium tracking-wide shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8336A] animate-pulse"></span>
                    <span>{text.heroTag}</span>
                  </div>

                  <h1 className="font-serif-couture text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white md:text-[#141414] drop-shadow-sm">
                    {text.heroTitle}
                  </h1>

                  <p className="text-stone-200 md:text-stone-600 text-sm md:text-base max-w-lg leading-relaxed">
                    {text.heroSubtitle}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button 
                      onClick={() => handleOpenBooking()}
                      className="group/btn bg-[#141414] text-[#FDF9F4] px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#B8336A] transition-all duration-300 flex items-center gap-2 shadow-lg border-2 border-[#141414] hover:border-[#B8336A] hover:-translate-y-1 hover:shadow-pink-900/30"
                    >
                      <span>{text.bookBtn}</span>
                      <ArrowRight className="w-4 h-4 text-[#B8336A] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                    </button>

                    <a 
                      href="#lookbook"
                      className="px-5 py-3 rounded-lg text-xs font-bold text-white md:text-[#141414] bg-white/20 md:bg-stone-200/70 hover:bg-white/30 md:hover:bg-stone-300/80 transition-all duration-300 border border-white/30 md:border-stone-300 hover:-translate-y-0.5"
                    >
                      {text.exploreStyles}
                    </a>
                  </div>

                  <div className="pt-6 border-t border-white/20 md:border-stone-200/80 grid grid-cols-3 gap-4 text-xs">
                    <div>
                      <p className="font-bold text-white md:text-ink text-sm font-serif-couture">100% Bio</p>
                      <p className="text-[11px] text-stone-300 md:text-stone-600">Organic Hair Included</p>
                    </div>
                    <div>
                      <p className="font-bold text-white md:text-ink text-sm font-serif-couture">Zero Pull</p>
                      <p className="text-[11px] text-stone-300 md:text-stone-600">Scalp Protection</p>
                    </div>
                    <div>
                      <p className="font-bold text-white md:text-ink text-sm font-serif-couture">1-on-1</p>
                      <p className="text-[11px] text-stone-300 md:text-stone-600">Private Atelier</p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block md:col-span-5 relative group/card">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200 aspect-[4/5]">
                    <img 
                      src={hauteCoiffureImg} 
                      alt="Haute Coiffure Braid Artistry" 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                      <div className="text-white space-y-1 transform transition-transform duration-300 group-hover/card:-translate-y-1">
                        <span className="text-[10px] uppercase tracking-widest text-pink-200 font-semibold">Alamo Heights Studio</span>
                        <p className="font-serif-couture text-lg font-bold">Knotless Braid Perfection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION PRÉSENTATION DE L'ARTISANE (À PROPOS) */}
            <section id="a-propos" className="w-full bg-stone-100/80 border-y border-stone-200 py-20 px-6">
              <div className="max-w-5xl mx-auto space-y-16">
                
                {/* BLOC PRINCIPAL : PHOTO ASSISE (GAUCHE) & PORTRAIT D'ESPRIT (DROITE) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
                  
                  {/* Photo à gauche : Assise dans son studio */}
                  <div className="md:col-span-5 relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-stone-300 bg-stone-200 aspect-[3/4] group">
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                        alt="Elena Vance - Fondatrice & Maître Coiffeuse" 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10">
                        <p className="font-serif-couture text-sm font-bold">Elena Vance</p>
                        <p className="text-[11px] text-pink-200 uppercase tracking-wider font-medium">Fondatrice & Maître Artisane</p>
                      </div>
                    </div>
                  </div>

                  {/* Description de sa personnalité & travail à droite */}
                  <div className="md:col-span-7 space-y-6">
                    <div>
                      <span className="text-xs uppercase tracking-widest font-bold text-couture-magenta">
                        {text.artistTitle}
                      </span>
                      <h2 className="font-serif-couture text-3xl md:text-4xl font-bold text-ink mt-1 leading-tight">
                        L'Âme derrière le Peigne & la Matière
                      </h2>
                    </div>

                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      Chaleureuse, perfectionniste et profondément habitée par la passion de l'artisanat capillaire, <strong>Elena Vance</strong> envisage chaque séance comme une expérience sur mesure où la coiffure rencontre la haute esthétique.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-linen border border-stone-200 space-y-1.5 shadow-sm">
                        <div className="flex items-center gap-2 text-couture-magenta font-serif-couture font-bold text-sm">
                          <Gem className="w-4 h-4 shrink-0" />
                          <span>Rigueur Chirurgicale</span>
                        </div>
                        <p className="text-stone-600 text-xs leading-relaxed">
                          Un minutieux tracé de sections géométriques pour des tresses équilibrées, durables et d'une légèreté incomparable.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-linen border border-stone-200 space-y-1.5 shadow-sm">
                        <div className="flex items-center gap-2 text-couture-magenta font-serif-couture font-bold text-sm">
                          <Feather className="w-4 h-4 shrink-0" />
                          <span>Bienveillance & Douceur</span>
                        </div>
                        <p className="text-stone-600 text-xs leading-relaxed">
                          Son rituel zéro-tension garantit une expérience totalement indolore pour préserver la santé et la vitalité de votre cuir chevelu.
                        </p>
                      </div>
                    </div>

                    <blockquote className="p-4 rounded-xl bg-pink-50/60 border-l-4 border-couture-magenta text-stone-700 text-xs md:text-sm italic font-serif-couture leading-relaxed">
                      "Mon travail ne consiste pas seulement à tresser, mais à sculpter une protection élégante pour votre couronne tout en vous offrant un moment de sérénité absolue."
                    </blockquote>
                  </div>

                </div>

                {/* LES 3 PILIERS DE L'ATELIER */}
                <div className="space-y-6">
                  <h3 className="font-serif-couture text-xl font-bold text-center text-ink">
                    {text.pillarsTitle}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-linen p-6 rounded-xl border border-stone-200 space-y-3 custom-shadow">
                      <div className="w-10 h-10 rounded-full bg-pink-100/80 text-couture-magenta flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif-couture font-bold text-base text-ink">{text.pillar1Title}</h4>
                      <p className="text-stone-600 text-xs leading-relaxed">{text.pillar1Desc}</p>
                    </div>

                    <div className="bg-linen p-6 rounded-xl border border-stone-200 space-y-3 custom-shadow">
                      <div className="w-10 h-10 rounded-full bg-pink-100/80 text-couture-magenta flex items-center justify-center">
                        <Scissors className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif-couture font-bold text-base text-ink">{text.pillar2Title}</h4>
                      <p className="text-stone-600 text-xs leading-relaxed">{text.pillar2Desc}</p>
                    </div>

                    <div className="bg-linen p-6 rounded-xl border border-stone-200 space-y-3 custom-shadow">
                      <div className="w-10 h-10 rounded-full bg-pink-100/80 text-couture-magenta flex items-center justify-center">
                        <Coffee className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif-couture font-bold text-base text-ink">{text.pillar3Title}</h4>
                      <p className="text-stone-600 text-xs leading-relaxed">{text.pillar3Desc}</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* SECTION LOOKBOOK */}
            <div id="lookbook">
              <LookbookSection 
                styles={styles} 
                text={text} 
                setSelectedStyleDetail={setSelectedStyleDetail} 
                handleOpenBooking={handleOpenBooking} 
              />
            </div>

            {/* SECTION GALERIE */}
            <GalleryCarouselSection 
              gallery={gallery} 
              setLightboxItem={setLightboxItem} 
              text={text} 
            />

            {/* FOOTER / CONTACT & CONCIERGERIE */}
            <footer id="contact" className="w-full bg-ink text-stone-300 py-12 px-6 border-t border-stone-800">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-couture-magenta text-white flex items-center justify-center font-serif-couture font-bold text-xs">
                      SA
                    </div>
                    <span className="font-serif-couture font-bold text-sm tracking-widest text-white uppercase">
                      {salonInfo.logoText}
                    </span>
                  </div>
                  <p className="text-stone-400 text-[11px] leading-relaxed">
                    Zero-tension high fashion braiding atelier in Alamo Heights, San Antonio. By private reservation only.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif-couture font-bold text-sm text-white uppercase tracking-wider">{text.conciergeTitle}</h4>
                  <p className="flex items-start gap-2 text-stone-400">
                    <MapPin className="w-4 h-4 text-couture-magenta shrink-0 mt-0.5" />
                    <span>{salonInfo.address}</span>
                  </p>
                  <p className="flex items-center gap-2 text-stone-400">
                    <Clock className="w-4 h-4 text-couture-magenta shrink-0" />
                    <span>{text.hours}</span>
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-serif-couture font-bold text-sm text-white uppercase tracking-wider">VIP Direct Contact</h4>
                  <a 
                    href={`https://wa.me/${salonInfo.whatsapp.replace(/[^0-9]/g, '')}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{text.vipWhatsapp}</span>
                  </a>
                </div>
              </div>
            </footer>

            {/* MODALE DE RÉSERVATION */}
            {bookingOpen && (
              <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-[#FDF9F4] w-full max-w-xl rounded-2xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                  
                  <div className="px-6 py-4 bg-[#141414] text-white flex items-center justify-between border-b border-stone-800">
                    <div className="flex items-center gap-2">
                      <Scissors className="w-4 h-4 text-[#B8336A]" />
                      <h3 className="font-serif-couture font-bold text-sm tracking-wide">{text.bookingTitle}</h3>
                    </div>
                    <button 
                      onClick={() => setBookingOpen(false)}
                      className="text-stone-300 hover:text-white transition-colors p-1"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="px-6 py-3 bg-stone-200/80 border-b border-stone-300 flex items-center gap-4">
                    <img 
                      src={selectedStyleObj.image} 
                      alt={selectedStyleObj.name} 
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1605980776566-0495564c865f?auto=format&fit=crop&w=800&q=80'; }}
                      className="w-14 h-14 rounded-lg object-cover border-2 border-[#141414] shadow-sm shrink-0" 
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#B8336A]">{selectedStyleObj.category}</span>
                        <span className="text-[10px] bg-[#141414] text-white font-bold px-2 py-0.5 rounded-full">${selectedStyleObj.price}</span>
                      </div>
                      <h4 className="font-serif-couture font-bold text-sm text-[#141414] truncate">{selectedStyleObj.name}</h4>
                      <p className="text-xs font-medium text-stone-600 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#B8336A]" /> {selectedStyleObj.duration}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-2.5 bg-stone-100 border-b border-stone-200 flex items-center justify-between text-[11px] font-bold text-stone-500 overflow-x-auto">
                    <span className={bookingStep === 1 ? 'text-[#B8336A] underline underline-offset-4' : ''}>{text.step1}</span>
                    <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" />
                    <span className={bookingStep === 2 ? 'text-[#B8336A] underline underline-offset-4' : ''}>{text.step2}</span>
                    <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" />
                    <span className={bookingStep === 3 ? 'text-[#B8336A] underline underline-offset-4' : ''}>{text.step3}</span>
                    <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" />
                    <span className={bookingStep === 4 ? 'text-[#B8336A] underline underline-offset-4' : ''}>{text.step4}</span>
                    <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" />
                    <span className={bookingStep === 5 ? 'text-[#B8336A] underline underline-offset-4' : ''}>{text.step5}</span>
                  </div>

                  <div className="p-6 overflow-y-auto flex-1 space-y-6">
                    {bookingStep === 1 && (
                      <div className="space-y-4">
                        <h4 className="font-serif-couture font-bold text-base text-[#141414]">Choose or change your braid style</h4>
                        <div className="space-y-3">
                          {styles.filter(s => s.active).map((style) => (
                            <div 
                              key={style.id}
                              onClick={() => setBookingData(prev => ({ ...prev, styleId: style.id }))}
                              className={`p-3 rounded-xl border-2 flex items-center gap-4 cursor-pointer transition-all ${
                                bookingData.styleId === style.id 
                                  ? 'border-[#B8336A] bg-pink-50/80 shadow-md' 
                                  : 'border-stone-300 hover:border-stone-400 bg-white'
                              }`}
                            >
                              <img 
                                src={style.image} 
                                alt={style.name} 
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1605980776566-0495564c865f?auto=format&fit=crop&w=800&q=80'; }}
                                className="w-16 h-16 rounded-lg object-cover border border-stone-200" 
                              />
                              <div className="flex-1">
                                <h5 className="font-serif-couture font-bold text-sm text-[#141414]">{style.name}</h5>
                                <p className="text-xs font-semibold text-stone-600 flex items-center gap-2">
                                  <span className="text-[#B8336A] font-bold">${style.price}</span> · <span>{style.duration}</span>
                                </p>
                              </div>
                              {bookingData.styleId === style.id && (
                                <CheckCircle2 className="w-6 h-6 text-[#B8336A] shrink-0" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {bookingStep === 2 && (
                      <div className="space-y-4">
                        <h4 className="font-serif-couture font-bold text-base text-ink">Select Atelier Date</h4>
                        <p className="text-xs text-stone-500">Our Alamo Heights studio hosts 1 guest at a time for dedicated attention.</p>
                        <input 
                          type="date" 
                          value={bookingData.date}
                          onChange={(e) => setBookingData(prev => ({ ...prev, date: e.target.value }))}
                          className="w-full p-3 rounded-xl border border-stone-300 bg-white text-sm font-medium focus:outline-none focus:border-couture-magenta"
                        />
                        <div className="bg-stone-100 p-3 rounded-xl text-xs text-stone-600 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-couture-magenta" />
                          <span>Available Days: Tuesday through Saturday</span>
                        </div>
                      </div>
                    )}

                    {bookingStep === 3 && (
                      <div className="space-y-4">
                        <h4 className="font-serif-couture font-bold text-base text-ink">Select Preferred Time Slot</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {['09:30 AM', '11:00 AM', '02:00 PM', '04:30 PM'].map((slot) => (
                            <button
                              key={slot}
                              onClick={() => setBookingData(prev => ({ ...prev, timeSlot: slot }))}
                              className={`p-3 rounded-xl text-xs font-semibold border transition-all ${
                                bookingData.timeSlot === slot 
                                  ? 'bg-ink text-white border-ink' 
                                  : 'bg-white border-stone-200 hover:border-stone-400 text-stone-700'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {bookingStep === 4 && (
                      <div className="space-y-4">
                        <h4 className="font-serif-couture font-bold text-base text-ink">Guest Details & Refreshments</h4>
                        
                        <div className="space-y-3 text-xs">
                          <div>
                            <label className="block text-stone-600 mb-1 font-medium">{text.fullName}</label>
                            <input 
                              type="text" 
                              value={bookingData.fullName} 
                              onChange={(e) => setBookingData(prev => ({ ...prev, fullName: e.target.value }))}
                              className="w-full p-2.5 rounded-lg border border-stone-300 bg-white" 
                            />
                          </div>
                          <div>
                            <label className="block text-stone-600 mb-1 font-medium">{text.email}</label>
                            <input 
                              type="email" 
                              value={bookingData.email} 
                              onChange={(e) => setBookingData(prev => ({ ...prev, email: e.target.value }))}
                              className="w-full p-2.5 rounded-lg border border-stone-300 bg-white" 
                            />
                          </div>
                          <div>
                            <label className="block text-stone-600 mb-1 font-medium">{text.phone}</label>
                            <input 
                              type="text" 
                              value={bookingData.phone} 
                              onChange={(e) => setBookingData(prev => ({ ...prev, phone: e.target.value }))}
                              className="w-full p-2.5 rounded-lg border border-stone-300 bg-white" 
                            />
                          </div>

                          <div className="pt-2">
                            <label className="block text-stone-700 font-bold mb-1.5">{text.chooseDrink}</label>
                            <div className="space-y-2">
                              {[text.drinkHibiscus, text.drinkEspresso].map((drink) => (
                                <label key={drink} className="flex items-center gap-2 p-2.5 rounded-lg border border-stone-200 bg-white text-stone-700 cursor-pointer">
                                  <input 
                                    type="radio" 
                                    name="drink" 
                                    checked={bookingData.welcomeDrink === drink}
                                    onChange={() => setBookingData(prev => ({ ...prev, welcomeDrink: drink }))}
                                    className="accent-[#B8336A]"
                                  />
                                  <span>{drink}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-pink-50 border border-pink-200 text-xs text-stone-700 space-y-1">
                          <p className="font-bold text-couture-magenta flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4" /> {text.summary}
                          </p>
                          <p>{selectedStyleObj.name} · ${selectedStyleObj.price}</p>
                          <p className="text-[11px] text-stone-500">{text.depositNotice}</p>
                        </div>
                      </div>
                    )}

                    {bookingStep === 5 && (
                      <div className="text-center space-y-4 py-4">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                          <Check className="w-6 h-6 stroke-[3]" />
                        </div>

                        <h4 className="font-serif-couture font-bold text-xl text-ink">{text.successTitle}</h4>
                        <p className="text-xs text-stone-600 max-w-sm mx-auto">{text.successMsg}</p>

                        <div className="bg-white p-4 rounded-xl border border-stone-200 text-left text-xs space-y-2 font-mono">
                          <div className="flex justify-between border-b pb-2">
                            <span className="text-stone-400">{text.resCode}:</span>
                            <span className="font-bold text-couture-magenta">{bookingData.reservationCode}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-stone-400">Guest:</span>
                            <span>{bookingData.fullName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-stone-400">Style:</span>
                            <span>{selectedStyleObj.name} (${selectedStyleObj.price})</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-stone-400">Date/Time:</span>
                            <span>{bookingData.date} @ {bookingData.timeSlot}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-stone-400">Welcome Beverage:</span>
                            <span className="text-[11px] text-stone-700">{bookingData.welcomeDrink}</span>
                          </div>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={sendToWhatsApp}
                            className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-md"
                          >
                            <MessageSquare className="w-4 h-4" />
                            <span>Send Details via WhatsApp</span>
                          </button>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 pt-2">
                          <button 
                            onClick={() => alert('Calendar event SAB-8921 downloaded!')}
                            className="flex-1 py-2.5 bg-stone-200 text-ink text-xs font-semibold rounded-lg hover:bg-stone-300 transition-all flex items-center justify-center gap-1.5"
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{text.addToCalendar}</span>
                          </button>
                          <a 
                            href="https://maps.google.com" 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex-1 py-2.5 bg-ink text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition-all flex items-center justify-center gap-1.5"
                          >
                            <MapPin className="w-3.5 h-3.5 text-couture-magenta" />
                            <span>{text.mapDirections}</span>
                          </a>
                        </div>
                      </div>
                    )}

                  </div>

                  <div className="px-6 py-4 bg-stone-100 border-t border-stone-200 flex items-center justify-between">
                    {bookingStep > 1 && bookingStep < 5 && (
                      <button 
                        onClick={() => setBookingStep(prev => prev - 1)}
                        className="px-4 py-2.5 text-xs font-bold text-[#141414] bg-stone-200 border border-stone-300 hover:bg-stone-300 rounded-lg transition-all flex items-center gap-1"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>{text.back}</span>
                      </button>
                    )}

                    {bookingStep < 4 && (
                      <button 
                        onClick={() => setBookingStep(prev => prev + 1)}
                        className="ml-auto px-6 py-2.5 bg-[#141414] text-white text-xs font-bold rounded-lg hover:bg-stone-800 transition-all flex items-center gap-1.5 shadow-md"
                      >
                        <span>{text.next}</span>
                        <ChevronRight className="w-4 h-4 text-[#B8336A]" />
                      </button>
                    )}

                    {bookingStep === 4 && (
                      <button 
                        onClick={() => setBookingStep(5)}
                        className="ml-auto px-6 py-2.5 bg-[#B8336A] text-white text-xs font-bold rounded-lg hover:bg-[#9a2855] transition-all shadow-md"
                      >
                        {text.confirmBooking}
                      </button>
                    )}

                    {bookingStep === 5 && (
                      <button 
                        onClick={() => setBookingOpen(false)}
                        className="w-full py-3 bg-[#141414] text-white text-xs font-bold rounded-lg hover:bg-stone-800 transition-all shadow-md"
                      >
                        {text.done}
                      </button>
                    )}
                  </div>

                </div>
              </div>
            )}

            {/* MODALE FICHE TECHNIQUE */}
            {selectedStyleDetail && (
              <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-linen max-w-lg w-full rounded-2xl overflow-hidden border border-stone-200 shadow-2xl space-y-4 p-6 relative">
                  <button 
                    onClick={() => setSelectedStyleDetail(null)}
                    className="absolute top-4 right-4 text-stone-400 hover:text-ink p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <img 
                    src={selectedStyleDetail.image} 
                    alt={selectedStyleDetail.name} 
                    className="w-full h-48 object-cover rounded-xl"
                  />

                  <div>
                    <span className="text-xs uppercase tracking-widest font-semibold text-couture-magenta">
                      {selectedStyleDetail.category}
                    </span>
                    <h3 className="font-serif-couture font-bold text-xl text-ink mt-0.5">
                      {selectedStyleDetail.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      ${selectedStyleDetail.price} · {selectedStyleDetail.duration}
                    </p>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {selectedStyleDetail.desc}
                  </p>

                  <div className="space-y-2 border-t pt-3">
                    <h4 className="font-serif-couture font-bold text-xs uppercase tracking-wider text-ink">{text.inclusionsTitle}</h4>
                    <ul className="text-xs text-stone-600 space-y-1.5">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-couture-magenta shrink-0" /> {text.inc1}</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-couture-magenta shrink-0" /> {text.inc2}</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-couture-magenta shrink-0" /> {text.inc3}</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-couture-magenta shrink-0" /> {text.inc4}</li>
                    </ul>
                  </div>

                  <button 
                    onClick={() => {
                      const styleId = selectedStyleDetail.id;
                      setSelectedStyleDetail(null);
                      handleOpenBooking(styleId);
                    }}
                    className="w-full py-3 bg-[#B8336A] text-white text-xs font-bold rounded-lg hover:bg-[#9a2855] transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{text.selectStyle}</span>
                  </button>
                </div>
              </div>
            )}

            {/* LIGHTBOX DE LA GALERIE */}
            {lightboxItem && (
              <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl relative text-white">
                  <button 
                    onClick={() => setLightboxItem(null)}
                    className="absolute top-4 right-4 text-stone-400 hover:text-white z-10 p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="relative aspect-square">
                    <img src={lightboxItem.image} alt={lightboxItem.title} className="w-full h-full object-cover" />
                    {lightboxItem.type === 'video' && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-couture-magenta text-white flex items-center justify-center shadow-lg animate-pulse">
                          <Play className="w-6 h-6 fill-current ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-4 space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-couture-magenta font-semibold">{lightboxItem.tag}</span>
                    <h4 className="font-serif-couture font-bold text-base">{lightboxItem.title}</h4>
                  </div>
                </div>
              </div>
            )}

          </div>
        ) : (
          <div>
            <div className="w-full bg-stone-950 text-stone-200 px-4 py-3 flex items-center justify-between border-b border-stone-800">
              <button onClick={() => setMode('client')} className="flex items-center gap-2 text-xs font-medium text-stone-300 hover:text-white">
                <ChevronLeft className="w-4 h-4" /> Back to Site
              </button>
              <span className="text-[11px] text-stone-500">{salonInfo.logoText} · Back-Office</span>
            </div>
            <AdminDashboard 
              styles={styles} 
              setStyles={setStyles} 
              gallery={gallery} 
              setGallery={setGallery} 
              salonInfo={salonInfo} 
              setSalonInfo={setSalonInfo} 
              text={text} 
              lang={lang} 
            />
          </div>
        )}

      </main>
    </div>
  );
}

function AdminDashboard({ styles, setStyles, gallery, setGallery, salonInfo, setSalonInfo, text, lang }) {
  const [activeTab, setActiveTab] = useState('styles');
  const [newStyleForm, setNewStyleForm] = useState({
    name: '', price: 200, duration: '3h 00m', category: 'Knotless', image: 'https://images.unsplash.com/photo-1605980776566-0495564c865f?auto=format&fit=crop&w=800&q=80', desc: '', active: true
  });
  const [newMediaForm, setNewMediaForm] = useState({
    title: '', type: 'photo', durationBadge: '0:15', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80', tag: 'Knotless'
  });

  const handleToggleStyleActive = (id) => {
    setStyles(styles.map(s => s.id === id ? { ...s, active: !s.active } : s));
  };

  const handleDeleteStyle = (id) => {
    if (confirm('Delete style from catalog?')) {
      setStyles(styles.filter(s => s.id !== id));
    }
  };

  const handleAddStyle = (e) => {
    e.preventDefault();
    if (!newStyleForm.name) return;
    const created = { ...newStyleForm, id: 's_' + Date.now() };
    setStyles([...styles, created]);
    setNewStyleForm({ name: '', price: 200, duration: '3h 00m', category: 'Knotless', image: 'https://images.unsplash.com/photo-1605980776566-0495564c865f?auto=format&fit=crop&w=800&q=80', desc: '', active: true });
  };

  const handleDeleteMedia = (id) => {
    setGallery(gallery.filter(g => g.id !== id));
  };

  const handleAddMedia = (e) => {
    e.preventDefault();
    if (!newMediaForm.title) return;
    const created = { ...newMediaForm, id: 'g_' + Date.now(), durationBadge: newMediaForm.type === 'video' ? newMediaForm.durationBadge : null };
    setGallery([created, ...gallery]);
    setNewMediaForm({ title: '', type: 'photo', durationBadge: '0:15', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80', tag: 'Knotless' });
  };

  return (
    <div className="w-full min-h-full bg-stone-900 text-stone-100 p-6 space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-1">
            <Lock className="w-3 h-3" /> Elena Vance Back-Office
          </div>
          <h2 className="font-serif-couture text-2xl font-bold">{text.adminDashboard}</h2>
        </div>

        <div className="flex items-center gap-2 bg-stone-800 p-1 rounded-xl border border-stone-700 text-xs">
          <button 
            onClick={() => setActiveTab('styles')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'styles' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400 hover:text-white'}`}
          >
            {text.tabStyles}
          </button>
          <button 
            onClick={() => setActiveTab('gallery')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'gallery' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400 hover:text-white'}`}
          >
            {text.tabGallery}
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'settings' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400 hover:text-white'}`}
          >
            {text.tabSettings}
          </button>
        </div>
      </div>

      {activeTab === 'styles' && (
        <div className="space-y-6">
          <form onSubmit={handleAddStyle} className="bg-stone-800 p-4 rounded-xl border border-stone-700 space-y-4">
            <h3 className="font-serif-couture font-bold text-sm text-amber-400 flex items-center gap-2">
              <Plus className="w-4 h-4" /> {text.addStyle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <input 
                type="text" 
                placeholder="Style Name" 
                value={newStyleForm.name} 
                onChange={e => setNewStyleForm({ ...newStyleForm, name: e.target.value })} 
                className="p-2 rounded bg-stone-900 border border-stone-700 text-white" 
              />
              <input 
                type="number" 
                placeholder="Rate ($)" 
                value={newStyleForm.price} 
                onChange={e => setNewStyleForm({ ...newStyleForm, price: Number(e.target.value) })} 
                className="p-2 rounded bg-stone-900 border border-stone-700 text-white" 
              />
              <input 
                type="text" 
                placeholder="Duration (e.g. 3h 30m)" 
                value={newStyleForm.duration} 
                onChange={e => setNewStyleForm({ ...newStyleForm, duration: e.target.value })} 
                className="p-2 rounded bg-stone-900 border border-stone-700 text-white" 
              />
              <input 
                type="text" 
                placeholder="Image URL" 
                value={newStyleForm.image} 
                onChange={e => setNewStyleForm({ ...newStyleForm, image: e.target.value })} 
                className="sm:col-span-2 p-2 rounded bg-stone-900 border border-stone-700 text-white" 
              />
              <input 
                type="text" 
                placeholder="Category (Knotless, Fulani...)" 
                value={newStyleForm.category} 
                onChange={e => setNewStyleForm({ ...newStyleForm, category: e.target.value })} 
                className="p-2 rounded bg-stone-900 border border-stone-700 text-white" 
              />
              <textarea 
                placeholder="Style description & inclusions" 
                value={newStyleForm.desc} 
                onChange={e => setNewStyleForm({ ...newStyleForm, desc: e.target.value })} 
                className="sm:col-span-3 p-2 rounded bg-stone-900 border border-stone-700 text-white h-16" 
              />
            </div>
            <button type="submit" className="px-4 py-1.5 bg-amber-500 text-stone-950 font-bold text-xs rounded hover:bg-amber-400">
              {text.addStyle}
            </button>
          </form>

          <div className="bg-stone-800 rounded-xl border border-stone-700 overflow-hidden text-xs">
            <table className="w-full text-left">
              <thead className="bg-stone-950 text-stone-400 border-b border-stone-700">
                <tr>
                  <th className="p-3">Style</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-700">
                {styles.map(s => (
                  <tr key={s.id} className="hover:bg-stone-700/50">
                    <td className="p-3 font-medium flex items-center gap-3">
                      <img src={s.image} alt={s.name} className="w-10 h-10 rounded object-cover" />
                      <div>
                        <p className="text-white font-bold">{s.name}</p>
                        <p className="text-stone-400 text-[10px]">{s.category}</p>
                      </div>
                    </td>
                    <td className="p-3 font-mono">${s.price}</td>
                    <td className="p-3">{s.duration}</td>
                    <td className="p-3">
                      <button 
                        onClick={() => handleToggleStyleActive(s.id)}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${s.active ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}
                      >
                        {s.active ? text.activeStatus : text.inactiveStatus}
                      </button>
                    </td>
                    <td className="p-3 text-right space-x-2">
                      <button 
                        onClick={() => handleDeleteStyle(s.id)} 
                        className="text-stone-400 hover:text-red-400" 
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'gallery' && (
        <div className="space-y-6">
          <form onSubmit={handleAddMedia} className="bg-stone-800 p-4 rounded-xl border border-stone-700 space-y-4 text-xs">
            <h3 className="font-serif-couture font-bold text-amber-400 flex items-center gap-2">
              <Upload className="w-4 h-4" /> {text.addMedia}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input 
                type="text" 
                placeholder="Title / Description" 
                value={newMediaForm.title} 
                onChange={e => setNewMediaForm({ ...newMediaForm, title: e.target.value })} 
                className="p-2 rounded bg-stone-900 border border-stone-700 text-white" 
              />
              <input 
                type="text" 
                placeholder="Image/Video URL" 
                value={newMediaForm.image} 
                onChange={e => setNewMediaForm({ ...newMediaForm, image: e.target.value })} 
                className="p-2 rounded bg-stone-900 border border-stone-700 text-white" 
              />
              <select 
                value={newMediaForm.type} 
                onChange={e => setNewMediaForm({ ...newMediaForm, type: e.target.value })} 
                className="p-2 rounded bg-stone-900 border border-stone-700 text-white"
              >
                <option value="photo">Photo</option>
                <option value="video">Motion Video Reel MP4</option>
              </select>
              {newMediaForm.type === 'video' && (
                <input 
                  type="text" 
                  placeholder={text.videoDuration} 
                  value={newMediaForm.durationBadge} 
                  onChange={e => setNewMediaForm({ ...newMediaForm, durationBadge: e.target.value })} 
                  className="p-2 rounded bg-stone-900 border border-stone-700 text-white" 
                />
              )}
            </div>
            <button type="submit" className="px-4 py-1.5 bg-amber-500 text-stone-950 font-bold rounded hover:bg-amber-400">
              {text.addMedia}
            </button>
          </form>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {gallery.map(g => (
              <div key={g.id} className="relative rounded-xl overflow-hidden border border-stone-700 bg-stone-800 p-2 space-y-2 text-xs">
                <img src={g.image} alt={g.title} className="w-full h-28 object-cover rounded" />
                <div>
                  <p className="font-bold text-white truncate">{g.title}</p>
                  <p className="text-[10px] text-stone-400">{g.type} {g.durationBadge ? `(${g.durationBadge})` : ''}</p>
                </div>
                <button 
                  onClick={() => handleDeleteMedia(g.id)}
                  className="absolute top-3 right-3 bg-red-600/80 text-white p-1 rounded-full hover:bg-red-600"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="bg-stone-800 p-6 rounded-xl border border-stone-700 space-y-4 text-xs">
          <h3 className="font-serif-couture font-bold text-base text-amber-400">{text.tabSettings}</h3>
          
          <div className="space-y-3 max-w-md">
            <div>
              <label className="block text-stone-400 mb-1">{text.logoText}</label>
              <input 
                type="text" 
                value={salonInfo.logoText} 
                onChange={e => setSalonInfo({ ...salonInfo, logoText: e.target.value })} 
                className="w-full p-2.5 rounded bg-stone-900 border border-stone-700 text-white" 
              />
            </div>
            <div>
              <label className="block text-stone-400 mb-1">{text.whatsappPhone}</label>
              <input 
                type="text" 
                value={salonInfo.whatsapp} 
                onChange={e => setSalonInfo({ ...salonInfo, whatsapp: e.target.value })} 
                className="w-full p-2.5 rounded bg-stone-900 border border-stone-700 text-white" 
              />
            </div>
            <div>
              <label className="block text-stone-400 mb-1">Alamo Heights Address</label>
              <input 
                type="text" 
                value={salonInfo.address} 
                onChange={e => setSalonInfo({ ...salonInfo, address: e.target.value })} 
                className="w-full p-2.5 rounded bg-stone-900 border border-stone-700 text-white" 
              />
            </div>
          </div>

          <div className="pt-4">
            <button 
              onClick={() => alert('Settings saved successfully!')}
              className="px-5 py-2 bg-amber-500 text-stone-950 font-bold rounded-lg hover:bg-amber-400"
            >
              {text.save}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}