"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Target, Zap } from "lucide-react";

export default function Hero() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-24 flex items-center">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      {/* Glowing Orbs for Depth - Changed to Sky Blue/Lighter shades */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-300/40 rounded-full mix-blend-multiply filter blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-400/30 rounded-full mix-blend-multiply filter blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.6)]"></span>
              <span className="text-sm font-medium text-slate-700 tracking-wide uppercase">Precision Engineering Partner</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-[1.1] mb-4 tracking-tight">
              Manufacturing <span className="text-sky-600">Reliability</span>.<br />
              Engineering <span className="text-sky-600">Excellence</span>.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base lg:text-lg text-slate-600 mb-6 max-w-xl leading-relaxed">
              We are an ISO-certified manufacturing partner delivering high-precision components for automotive, railway, and heavy industrial applications.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <Link 
                href="#capabilities"
                className="group relative inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 overflow-hidden shadow-[0_4px_14px_0_rgba(14,165,233,0.39)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.23)]"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Explore Capabilities
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-300 px-8 py-4 rounded-xl font-semibold transition-all"
              >
                Get a Quote
              </Link>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="mt-6 flex items-center gap-4 sm:gap-8 pt-5 border-t border-slate-100 w-full">
              <div className="flex flex-col gap-0.5">
                <span className="text-2xl font-bold text-slate-900">30<span className="text-sky-500">+</span></span>
                <span className="text-xs text-slate-500">Years Experience</span>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="flex flex-col gap-0.5">
                <span className="text-2xl font-bold text-slate-900">100<span className="text-sky-500">%</span></span>
                <span className="text-xs text-slate-500">Quality Tested</span>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="flex flex-col gap-0.5">
                <span className="text-2xl font-bold text-slate-900">ISO</span>
                <span className="text-xs text-slate-500">9001:2015</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[280px] md:h-[350px] lg:h-[450px] w-full mt-8 lg:mt-0 flex items-center justify-center"
          >
            {/* Main Image Container */}
            <div className="group relative w-full h-[90%] lg:h-full rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-2xl z-10">
              <Image
                src="/images/Hero-Image.jpg"
                alt="Heavy Industrial Manufacturing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Decorative Ring */}
            <div className="absolute inset-0 border border-sky-100 rounded-full scale-[1.2] lg:scale-[1.1] z-0 hidden md:block"></div>

            {/* Floating Card 1 - Certifications */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-8 -right-2 lg:-right-6 bg-white/90 backdrop-blur-xl border border-slate-100 p-3 rounded-2xl shadow-xl flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 shadow-sm">
                <ShieldCheck size={20} strokeWidth={2.5} />
              </div>
              <div className="pr-2">
                <p className="text-slate-800 font-bold text-xs">Certified Quality</p>
                <p className="text-slate-500 text-[10px]">EN 15085-2:2020</p>
              </div>
            </motion.div>

            {/* Floating Card 2 - Precision */}
            <motion.div 
              animate={{ y: [12, -12, 12] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-12 -left-2 lg:-left-8 bg-white/90 backdrop-blur-xl border border-slate-100 p-3 rounded-2xl shadow-xl flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500 shadow-sm">
                <Target size={20} />
              </div>
              <div className="pr-2">
                <p className="text-slate-800 font-bold text-xs">Zero Defect</p>
                <p className="text-slate-500 text-[10px]">Micron-level Precision</p>
              </div>
            </motion.div>
            
            {/* Floating Card 3 - Tech */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2.5 }}
              className="absolute -bottom-2 right-6 lg:right-10 bg-white/90 backdrop-blur-xl border border-slate-100 p-3 rounded-2xl shadow-xl flex items-center gap-2 z-20"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                <Zap size={16} />
              </div>
              <p className="text-slate-800 font-bold text-xs pr-1">Advanced CNC</p>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
