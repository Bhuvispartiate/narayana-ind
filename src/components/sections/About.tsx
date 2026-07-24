"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, CheckCircle, Settings, Wrench } from "lucide-react";

export default function About() {
  const certifications = [
    { name: "ISO 9001:2015", icon: "/images/cert-1.svg" },
    { name: "EN 15085-2:2020", icon: "/images/cert-2.svg" },
    { name: "ISO 3834-2", icon: "/images/cert-3.svg" },
  ];

  return (
    <section id="about" className="py-24 bg-surface-light relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-50 skew-x-[-12deg] translate-x-1/4 -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Content (Sheet Metal Fold) */}
          <motion.div
            initial={{ opacity: 0, rotateX: 90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            style={{ transformOrigin: "top", perspective: 1000 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-sky-500 rounded-full"></div>
              <span className="text-sky-600 font-bold uppercase tracking-wider text-sm">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
              A Legacy of Precision & Reliability in Manufacturing
            </h2>

            <div className="space-y-4 text-slate-600 text-lg mb-8 leading-relaxed">
              <p>
                Narayana Industries is a premier precision engineering and manufacturing company specializing in automotive and railway air spring metal components, heavy machining, structural fabrication, and line production for automobile parts.
              </p>
              <p>
                Backed by advanced infrastructure and a highly skilled workforce, we execute large-scale tender and project-based work, serving as a trusted partner for railway, automobile, and industrial manufacturing sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {['Advanced CNC Machining', 'Heavy Fabrication', 'Robotic Welding', 'Strict Quality Control'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-sky-500 shrink-0" size={20} />
                  <span className="font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            {/* Certifications Inline */}
            <div className="pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-4">Our Certifications</p>
              <div className="flex flex-wrap gap-6">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-center gap-2">
                    <Award className="text-sky-600" size={24} />
                    <span className="font-bold text-slate-700">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image Hierarchical Layout */}
          <motion.div
            className="grid grid-cols-4 grid-rows-3 gap-3 sm:gap-4 w-full h-[450px] sm:h-[600px]"
            initial={{ opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            whileInView={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {/* Image 1 - Large, spans 2 cols, 2 rows */}
            <div className="relative rounded-2xl overflow-hidden group shadow-md col-span-2 row-span-2">
              <Image
                src="/images/about4.png"
                alt="Factory Floor"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-sky-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Image 2 - small, 1 col, 1 row */}
            <div className="relative rounded-2xl overflow-hidden group shadow-md col-span-1 row-span-1">
              <Image
                src="/images/about2.png"
                alt="Machining"
                fill
                sizes="(max-width: 768px) 25vw, 16vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Image 3 - small, 1 col, 1 row */}
            <div className="relative rounded-2xl overflow-hidden group shadow-md col-span-1 row-span-1">
              <Image
                src="/images/about3.png"
                alt="Quality Control"
                fill
                sizes="(max-width: 768px) 25vw, 16vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Image 4 - medium, spans 2 cols, 1 row */}
            <div className="relative rounded-2xl overflow-hidden group shadow-md col-span-2 row-span-1">
              <Image
                src="/images/about5.png"
                alt="Manufacturing Process"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Stats Box - spans 1 col, 1 row */}
            <div className="relative rounded-2xl overflow-hidden group bg-white p-2 flex flex-col justify-center items-center text-center col-span-1 row-span-1 border-2 border-sky-100 outline outline-4 outline-sky-50 shadow-lg hover:border-sky-300 hover:outline-sky-100 hover:shadow-sky-500/20 transition-all duration-300">
              {/* Subtle background decoration */}
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500">
                <Settings size={80} className="text-sky-600" />
              </div>
              
              <div className="relative z-10 text-2xl sm:text-3xl font-black text-slate-800 mb-1 group-hover:scale-110 transition-transform duration-300">
                10<span className="text-sky-500">+</span>
              </div>
              <div className="relative z-10 text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-tight">
                Advanced<br />Machining
              </div>
              
              {/* Glowing bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Image 5 - wide, spans 3 cols, 1 row */}
            <div className="relative rounded-2xl overflow-hidden group shadow-md col-span-3 row-span-1">
              <Image
                src="/images/about1.png"
                alt="Heavy Engineering"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
