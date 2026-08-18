"use client";

import { m, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Phone,
  Sparkles, 
  Factory, 
  Settings, 
  Weight,
  Target
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-white text-slate-900 pt-24 pb-16 lg:pt-28 lg:pb-20 flex items-center">
      
      {/* ── Light Blueprint Grid & Subdued Mesh Gradient ── */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none bg-[linear-gradient(to_right,#0284c70d_1px,transparent_1px),linear-gradient(to_bottom,#0284c70d_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_70%,transparent_100%)]" 
      />

      {/* ── Soft Vibrant Light Orbs ── */}
      <m.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute -top-16 left-1/4 w-[480px] h-[480px] bg-sky-100/70 rounded-full filter blur-[120px] pointer-events-none"
      />
      <m.div 
        animate={{ 
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-indigo-100/60 rounded-full filter blur-[130px] pointer-events-none"
      />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-center">
          
          {/* ── Left Column: Text & Hero Copy ── */}
          <m.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Live Certification Badge Pill */}
            <m.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/90 shadow-sm mb-7 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-slate-700 uppercase">
                Advanced Heavy Fabrication & Machining
              </span>
            </m.div>

            {/* Main Headline */}
            <m.h1 
              variants={itemVariants} 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight"
            >
              Manufacturing{" "}
              <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                Reliability.
              </span>
              <br />
              Engineering{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Excellence.
              </span>
            </m.h1>

            {/* Description Paragraph */}
            <m.p 
              variants={itemVariants} 
              className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed font-normal"
            >
              We are an ISO-certified precision manufacturing partner delivering high-reliability components for railway, automotive, power generation, and heavy industrial applications.
            </m.p>

            {/* CTA Buttons */}
            <m.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
            >
              <Link 
                href="#capabilities"
                className="group relative inline-flex items-center justify-center gap-2.5 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-bold transition-[background-color,box-shadow,transform] duration-300 shadow-[0_6px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_10px_28px_rgba(14,165,233,0.45)] scale-100 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Capabilities
                  <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </Link>
              
              <Link 
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-300 px-8 py-4 rounded-xl font-semibold transition-[background-color,border-color] duration-200 shadow-sm"
              >
                <Phone size={17} className="text-sky-500" />
                <span>Get a Quote</span>
              </Link>
            </m.div>
            
            {/* Key Metrics Strip */}
            <m.div 
              variants={itemVariants} 
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-slate-100 w-full"
            >
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  30<span className="text-sky-500">+</span>
                </span>
                <span className="text-xs font-medium text-slate-500 mt-0.5">Years Legacy</span>
              </div>

              <div className="flex flex-col border-l border-slate-200/80 pl-4 sm:pl-6">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  100<span className="text-sky-500">%</span>
                </span>
                <span className="text-xs font-medium text-slate-500 mt-0.5">Quality Tested</span>
              </div>

              <div className="flex flex-col border-l border-slate-200/80 pl-4 sm:pl-6">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-amber-500">
                  0.005<span className="text-xs font-semibold text-slate-500 ml-0.5">mm</span>
                </span>
                <span className="text-xs font-medium text-slate-500 mt-0.5">Micron Accuracy</span>
              </div>
            </m.div>
          </m.div>

          {/* ── Right Column: Showcase Card Visual ── */}
          <m.div 
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full mt-4 lg:mt-0 flex items-center justify-center"
          >
            {/* Main Visual Container */}
            <div className="relative w-full max-w-lg lg:max-w-none rounded-3xl p-3 bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
              
              {/* Main Image Frame */}
              <div className="relative h-[320px] sm:h-[400px] lg:h-[460px] w-full rounded-2xl overflow-hidden group mb-3 sm:mb-0">
                <Image
                  src="/images/Hero-Image.jpg"
                  alt="Narayana Industries Heavy Manufacturing Facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  quality={100}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Soft Bottom Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Strip (stacked on mobile, overlaid on desktop) */}
              <div className="relative sm:absolute sm:bottom-7 sm:left-7 sm:right-7 p-2 rounded-xl bg-slate-50 sm:bg-white/95 sm:backdrop-blur-md border border-slate-200 sm:border-slate-100 shadow-sm sm:shadow-lg grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/60 z-10">
                  
                  {/* Metric 1 */}
                  <div className="flex items-center gap-3 p-2 sm:px-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                      <Factory size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold text-slate-800 truncate">Production Infrastructure</p>
                      <p className="text-[10px] text-slate-500 truncate">2,626 m² Facility</p>
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="flex items-center gap-3 p-2 sm:px-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 shrink-0">
                      <Weight size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold text-slate-800 truncate">Heavy Lifting Capacity</p>
                      <p className="text-[10px] text-slate-500 truncate">Up to 40 Tonnes</p>
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="flex items-center gap-3 p-2 sm:px-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500 shrink-0">
                      <Target size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold text-slate-800 truncate">Precision Engineering</p>
                      <p className="text-[10px] text-slate-500 truncate">Micron-level Accuracy</p>
                    </div>
                  </div>
              </div>
            </div>

            {/* ── Floating Badge 1: High-Tech Machinery (Top Left) ── */}
            <m.div 
              animate={{ y: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute -top-5 -left-3 sm:-left-6 bg-white/95 backdrop-blur-xl border border-slate-200/90 p-3.5 rounded-2xl shadow-xl flex items-center gap-3.5 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 shadow-sm">
                <Settings size={20} strokeWidth={2.5} />
              </div>
              <div className="pr-2">
                <p className="text-slate-900 font-bold text-xs">High-Tech Machinery</p>
                <p className="text-slate-500 text-[10px]">CNC, Laser & Robotic Welding</p>
              </div>
            </m.div>

            {/* ── Floating Badge 3: Technology Accent ── */}
            <m.div 
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-3 right-8 bg-white/95 backdrop-blur-xl border border-slate-200/90 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 z-20"
            >
              <Sparkles size={15} className="text-sky-500" />
              <span className="text-slate-800 font-semibold text-xs">Advanced CNC Powered</span>
            </m.div>

          </m.div>

        </div>
      </div>
    </section>
  );
}
