"use client";

import { m } from "framer-motion";
import Image from "next/image";

interface SubpageHeroProps {
  title: string;
  subtitle?: string;
}

const collageImages = [
  "/images/GalleryImages/facility-1.jpg",
  "/images/GalleryImages/facility-2.jpg",
  "/images/GalleryImages/facility-4.jpg",
  "/images/GalleryImages/facility-5.jpg",
  "/images/GalleryImages/facility-6.jpg",
  "/images/GalleryImages/facility-7.jpg",
  "/images/GalleryImages/facility-8.jpg",
  "/images/GalleryImages/facility-9.jpg",
  "/images/GalleryImages/facility-10.jpg",
  "/images/GalleryImages/facility-11.jpg",
];

export function SubpageHero({ title, subtitle }: SubpageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900 pt-32 pb-16 lg:pt-40 lg:pb-24 flex items-center justify-center text-center border-b border-slate-800">

      {/* ── Seamless Image Collage Background ── */}
      <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-5 opacity-[0.590] filter blur-[1px] select-none pointer-events-none">
        {collageImages.map((src, idx) => (
          <div key={idx} className="relative w-full h-full min-h-[200px]">
            <Image
              src={src}
              alt={`Collage image ${idx + 1}`}
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>
        ))}
        {/* Soft overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="flex flex-col items-center"
        >
          {/* Breadcrumb / Badge (Without Ping Animation) */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="flex h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.8)]"></span>
            <span className="text-[11px] font-semibold tracking-widest text-sky-200 uppercase">
              Narayana Industries
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl font-light leading-relaxed drop-shadow-md">
              {subtitle}
            </p>
          )}
        </m.div>
      </div>
    </section>
  );
}
