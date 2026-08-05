"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import Image from "next/image";

function GalleryCard({ item }: { item: { id: number } }) {
  const [imgError, setImgError] = useState(false);

  return (
    <>
      {!imgError && (
        <Image
          src={`/images/GalleryImages/gallery${item.id + 1}.jpg`}
          alt={`Gallery Image ${item.id + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          quality={100}
          onError={() => setImgError(true)}
        />
      )}
      
      {/* Show placeholder if image is missing or errored */}
      {imgError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 group-hover:bg-slate-200/50 transition-colors duration-500 z-10 bg-slate-100/80">
          <ImageIcon 
            strokeWidth={1.5} 
            size={36} 
            className="mb-2 opacity-40 group-hover:scale-110 group-hover:text-sky-500 transition-all duration-500 ease-out" 
          />
          <span className="text-xs font-semibold tracking-widest uppercase text-slate-400 group-hover:text-sky-600 transition-colors duration-500">
            Image {item.id + 1}
          </span>
        </div>
      )}

      {/* Subtle overlay for the actual image */}
      {!imgError && (
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
      )}
    </>
  );
}

export default function Gallery() {
  // Generate 20 placeholder items
  // We use mathematically perfect packing to ensure absolutely zero gaps on any screen size.
  const items = Array.from({ length: 20 }).map((_, i) => {
    // Default to 1x1
    let colSpan = "col-span-1 lg:col-span-1";
    let rowSpan = "row-span-1 lg:row-span-1";
    
    // Item 0 is large on all screens
    if (i === 0) {
      colSpan = "col-span-2 lg:col-span-2";
      rowSpan = "row-span-2 lg:row-span-2";
    } 
    // These are large ONLY on mobile/tablet (to pack perfectly in 2 and 4 columns)
    else if (i === 7 || i === 10 || i === 17) {
      colSpan = "col-span-2 lg:col-span-1";
      rowSpan = "row-span-2 lg:row-span-1";
    }
    // These are large ONLY on desktop (to pack perfectly in 5 columns)
    else if (i === 5 || i === 9 || i === 11 || i === 16) {
      colSpan = "col-span-1 lg:col-span-2";
      rowSpan = "row-span-1 lg:row-span-2";
    }

    return { id: i, colSpan, rowSpan };
  });

  return (
    <section id="gallery" className="relative py-24 bg-white overflow-hidden border-t border-slate-100">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-sky-50/50 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
              Facility <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">Gallery</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              A visual tour of our state-of-the-art manufacturing infrastructure, advanced machinery, and precision-engineered components.
            </p>
          </motion.div>
        </div>

        {/* Collage Grid */}
        <div className="grid grid-flow-dense grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 auto-rows-[160px] md:auto-rows-[220px]">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: (index % 10) * 0.08, 
                ease: [0.215, 0.61, 0.355, 1] 
              }}
              className={`relative rounded-2xl sm:rounded-3xl overflow-hidden group bg-slate-100/80 border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer ${item.colSpan} ${item.rowSpan}`}
            >
              <GalleryCard item={item} />
              
              {/* Hover Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Border Glow on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-sky-500/20 rounded-2xl sm:rounded-3xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
