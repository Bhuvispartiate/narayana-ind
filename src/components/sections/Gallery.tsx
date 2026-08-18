"use client";

import { useState, useEffect, useCallback } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Structured dataset based on exact measured image dimensions:
// 10 Landscape (7952x5304, 3:2) & 1 Portrait (5304x7952, 2:3 - facility-9)
const galleryItems = [
  {
    id: 1,
    src: "/images/GalleryImages/facility-1.jpg",
    alt: "Facility Image 1",
    // 2x2 Hero tile on desktop & tablet
    gridClasses: "col-span-1 sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2 min-h-[300px] sm:min-h-[500px]",
  },
  {
    id: 2,
    src: "/images/GalleryImages/facility-2.jpg",
    alt: "Facility Image 2",
    gridClasses: "col-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 min-h-[240px]",
  },
  {
    id: 3,
    src: "/images/GalleryImages/facility-3.jpg",
    alt: "Facility Image 3",
    gridClasses: "col-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 min-h-[240px]",
  },
  {
    id: 4,
    src: "/images/GalleryImages/facility-4.jpg",
    alt: "Facility Image 4",
    gridClasses: "col-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 min-h-[240px]",
  },
  {
    id: 5,
    src: "/images/GalleryImages/facility-5.jpg",
    alt: "Facility Image 5",
    gridClasses: "col-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 min-h-[240px]",
  },
  {
    id: 6,
    src: "/images/GalleryImages/facility-6.jpg",
    alt: "Facility Image 6",
    // Wide 2x1 banner tile
    gridClasses: "col-span-1 sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-1 min-h-[240px]",
  },
  {
    id: 7,
    src: "/images/GalleryImages/facility-7.jpg",
    alt: "Facility Image 7",
    gridClasses: "col-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 min-h-[240px]",
  },
  {
    // facility-9 is the vertical portrait photo (5304x7952, 2:3)
    id: 9,
    src: "/images/GalleryImages/facility-9.jpg",
    alt: "Facility Image 9",
    // 1x2 Tall Portrait tile matching its native 2:3 aspect ratio!
    gridClasses: "col-span-1 sm:col-span-1 sm:row-span-2 md:col-span-1 md:row-span-2 min-h-[300px] sm:min-h-[500px]",
  },
  {
    id: 8,
    src: "/images/GalleryImages/facility-8.jpg",
    alt: "Facility Image 8",
    gridClasses: "col-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 min-h-[240px]",
  },
  {
    id: 10,
    src: "/images/GalleryImages/facility-10.jpg",
    alt: "Facility Image 10",
    gridClasses: "col-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 min-h-[240px]",
  },
  {
    id: 11,
    src: "/images/GalleryImages/facility-11.jpg",
    alt: "Facility Image 11",
    gridClasses: "col-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 min-h-[240px]",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % galleryItems.length));
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + galleryItems.length) % galleryItems.length));
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow || "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <section 
      id="gallery" 
      className="relative py-24 md:py-32 bg-slate-900 text-white overflow-hidden" 
    >
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-[200px] right-0 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 shadow-inner mb-4 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span className="text-[11px] font-bold text-sky-300 tracking-wider uppercase">Infrastructure & Operations</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              A Visual <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-sky-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-normal">
              Explore our state-of-the-art manufacturing infrastructure, advanced machinery, and precision-engineered industrial components.
            </p>
          </m.div>
        </div>

        {/* Hierarchical Bento Grid (Seamless 4x4 on Desktop, 2-Col on Tablet, 1-Col on Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[240px] sm:auto-rows-[250px] md:auto-rows-[260px] lg:auto-rows-[280px] gap-4 sm:gap-5 lg:gap-6">
          {galleryItems.map((item, index) => (
            <m.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              role="button"
              tabIndex={0}
              aria-label={`View full image for ${item.alt}`}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer bg-slate-800/60 shadow-lg hover:shadow-2xl hover:shadow-sky-500/10 transition-[box-shadow,border-color] duration-500 border border-slate-700/60 ${item.gridClasses}`}
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedIndex(index);
                }
              }}
            >
              {/* Image Container with Smooth Zoom */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                quality={90}
              />

              {/* Gradient Scrim on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Hover Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl text-white">
                  <Maximize2 size={22} strokeWidth={2} />
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 sm:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Top Toolbar */}
            <div className="absolute top-5 inset-x-5 flex items-center justify-between z-[110] pointer-events-none">
              <div className="pointer-events-auto bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-slate-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                {selectedIndex + 1} / {galleryItems.length}
              </div>
              <button 
                className="pointer-events-auto w-11 h-11 flex items-center justify-center rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white transition-colors duration-200 shadow-lg"
                onClick={() => setSelectedIndex(null)}
                aria-label="Close"
              >
                <X size={20} strokeWidth={2} />
              </button>
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-white flex items-center justify-center transition-[background-color,transform] duration-200 shadow-xl hover:scale-105 z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-white flex items-center justify-center transition-[background-color,transform] duration-200 shadow-xl hover:scale-105 z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Modal Image Box */}
            <m.div
              key={selectedIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
              className="relative w-full max-w-5xl max-h-[85vh] aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryItems[selectedIndex].src}
                alt={galleryItems[selectedIndex].alt}
                fill
                className="object-contain bg-slate-950/60"
                sizes="100vw"
                quality={100}
                priority
              />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
