"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageIcon, X, Maximize2 } from "lucide-react";
import Image from "next/image";

function GalleryCard({ id, onClick }: { id: number, onClick: () => void }) {
  const [imgError, setImgError] = useState(false);
  const isPriority = id < 6; // Prioritize first few images

  const getGridClasses = (index: number) => {
    switch (index) {
      case 0:
        // Featured 1: Huge square
        return "col-span-1 sm:col-span-2 md:col-span-2 md:row-span-2";
      case 3:
      case 8:
        // Tall portraits
        return "col-span-1 sm:col-span-1 md:col-span-1 md:row-span-2";
      case 5:
      case 12:
        // Wide landscapes
        return "col-span-1 sm:col-span-2 md:col-span-2 md:row-span-1";
      case 9:
        // Featured 2: Huge square
        return "col-span-1 sm:col-span-2 md:col-span-2 md:row-span-2";
      default:
        // Standard squares
        return "col-span-1 sm:col-span-1 md:col-span-1 md:row-span-1";
    }
  };

  return (
    <div 
      className={`relative w-full h-full overflow-hidden rounded-2xl group bg-slate-900 shadow-xl hover:shadow-2xl hover:shadow-sky-900/20 transition-all duration-700 cursor-pointer ${getGridClasses(id)}`}
      onClick={onClick}
    >
      <div className="absolute inset-0 w-full h-full">
        {!imgError && (
          <Image
            src={`/images/GalleryImages/gallery${id + 1}.jpg`}
            alt={`Gallery Image ${id + 1}`}
            fill
            priority={isPriority}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-90 group-hover:opacity-100"
            quality={100}
            onError={() => setImgError(true)}
          />
        )}
        
        {imgError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 bg-slate-900/80 w-full h-full">
            <ImageIcon size={36} className="mb-2 opacity-40 group-hover:text-sky-500 transition-colors" />
            <span className="text-xs font-semibold uppercase tracking-widest">Image {id + 1}</span>
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-md w-14 h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-2xl border border-white/20 translate-y-4 group-hover:translate-y-0">
          <Maximize2 className="text-white" size={24} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // 14 items total
  const items = Array.from({ length: 14 }).map((_, i) => i);

  return (
    <section 
      id="gallery" 
      className="relative py-24 md:py-32 bg-slate-950 overflow-hidden" 
    >
      {/* Dark Premium Background Ornaments */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sky-900/20 rounded-[100%] blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Styled for Dark Mode */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-sm font-semibold mb-6 shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Inside Our Facility
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              A Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Journey</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              Explore our state-of-the-art manufacturing infrastructure, advanced machinery, and precision-engineered components.
            </p>
          </motion.div>
        </div>

        {/* Hierarchical Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-flow-row-dense auto-rows-[250px] md:auto-rows-[300px] gap-4 md:gap-6">
          {items.map((id) => (
            <GalleryCard key={id} id={id} onClick={() => setSelectedImage(id)} />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-300 z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} strokeWidth={1.5} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/images/GalleryImages/gallery${selectedImage + 1}.jpg`}
                alt={`Expanded Image ${selectedImage + 1}`}
                fill
                className="object-contain bg-black/50"
                sizes="100vw"
                quality={100}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
