import React, { useRef } from 'react';
import { Clock, Eye, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LookbookSection({ styles, text, setSelectedStyleDetail, handleOpenBooking }) {
  const scrollContainerRef = useRef(null);

  // Fonction de défilement horizontal
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75; // Défilement de 75% de la largeur du conteneur
      
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="lookbook" className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* En-tête avec titre et commandes du carrousel */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B8336A]">
              Lookbook 2026
            </span>
            <h2 className="font-serif-couture text-2xl md:text-3xl font-bold text-[#141414] mt-1">
              {text.lookbookTitle}
            </h2>
            <p className="text-stone-600 text-xs md:text-sm mt-1">{text.lookbookSubtitle}</p>
          </div>

          {/* Flèches de Navigation Carrousel */}
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

        {/* Carrousel Horizontale Snap-Scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {styles.filter(s => s.active).map((style) => (
            <div 
              key={style.id} 
              className="flex-none w-[280px] sm:w-[320px] snap-start group bg-white rounded-xl overflow-hidden border border-stone-200 flex flex-col justify-between custom-shadow hover:border-[#B8336A] transition-all"
            >
              <div>
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                  <img 
                    src={style.image} 
                    alt={style.name} 
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1605980776566-0495564c865f?auto=format&fit=crop&w=800&q=80'; }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#141414] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                    ${style.price}
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-stone-500">
                    <span className="uppercase tracking-wider font-bold text-[#B8336A]">{style.category}</span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3 text-[#B8336A]" /> {style.duration}
                    </span>
                  </div>

                  <h3 className="font-serif-couture font-bold text-base text-[#141414] group-hover:text-[#B8336A] transition-colors">
                    {style.name}
                  </h3>

                  <p className="text-stone-600 text-xs line-clamp-2 leading-relaxed">
                    {style.desc}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 space-y-2">
                <button 
                  onClick={() => setSelectedStyleDetail(style)}
                  className="w-full py-2 text-xs text-[#141414] font-bold border-2 border-stone-300 rounded-lg hover:bg-stone-100 transition-all flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-stone-600" />
                  <span>{text.viewDetails}</span>
                </button>
                <button 
                  onClick={() => handleOpenBooking(style.id)}
                  className="w-full py-2.5 bg-[#B8336A] text-white text-xs font-bold rounded-lg hover:bg-[#9a2855] transition-all flex items-center justify-center gap-1.5 shadow-md active:scale-98"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{text.selectStyle}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}