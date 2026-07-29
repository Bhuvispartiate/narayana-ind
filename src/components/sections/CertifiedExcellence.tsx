"use client";

import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Award, ShieldCheck, FileCheck, X } from "lucide-react";

export default function CertifiedExcellence() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }
    },
  };

  const certificates = [
    {
      title: "ISO 9001:2015",
      subtitle: "Quality Management System (QMS)",
      icon: <Award className="text-sky-500" size={24} />,
      image: "/images/Certificates/cert1.png"
    },
    {
      title: "EN 15085-2:2020+A1:2023",
      subtitle: "Railway Welding Certification",
      icon: <ShieldCheck className="text-emerald-500" size={24} />,
      image: "/images/Certificates/cert2.png"
    },
    {
      title: "ISO 3834-2:2021",
      subtitle: "Welding Quality Requirements",
      icon: <FileCheck className="text-amber-500" size={24} />,
      image: "/images/Certificates/cert3.png"
    }
  ];

  return (
    <section id="certified-excellence" className="relative w-full py-16 lg:py-12 bg-white overflow-hidden flex items-center justify-center lg:min-h-[85vh] lg:max-h-[100vh]">
      
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-6 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-3">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-[10px] font-semibold text-slate-700 tracking-wide uppercase">Globally Recognized</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              Certified <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Our commitment to uncompromising quality is validated by international standards, ensuring precision and reliability in every component we deliver.
            </p>
          </motion.div>

          {/* Certificates Grid - Designed to fit in one frame */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 w-full">
            {certificates.map((cert, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group relative flex flex-col bg-white rounded-xl sm:rounded-3xl p-2 sm:p-4 lg:p-5 border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out"
              >
                {/* Certificate Image Frame */}
                {/* Using a fixed aspect ratio suitable for A4 documents (approx 1:1.414).
                    Setting max-height to ensure they don't stretch the screen too much vertically. */}
                <div 
                  className="relative w-[80%] sm:w-[75%] lg:w-[70%] mx-auto aspect-[1/1.4] max-h-[450px] md:max-h-[35vh] lg:max-h-[40vh] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 mb-4 flex items-center justify-center group-hover:border-sky-300 transition-colors duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  
                  {/* Visual placeholder text if image fails to load */}
                  <span className="absolute text-slate-300 font-semibold uppercase tracking-widest text-sm z-0">
                    Image Placeholder
                  </span>

                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover md:object-contain z-10 transition-transform duration-500 group-hover:scale-[1.03]"
                    // Using object-contain ensures the whole certificate is visible without cutting
                    // if you prefer it to fill the box, you can switch back to object-cover
                  />
                  
                  {/* Subtle glare effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none transform -translate-x-full group-hover:translate-x-full"></div>
                </div>

                {/* Certificate Details */}
                <div className="flex flex-col items-center text-center mt-auto">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-1 sm:mb-2 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <div className="scale-75 sm:scale-100">{cert.icon}</div>
                  </div>
                  <h3 className="text-[10px] sm:text-base font-bold text-slate-900 mb-0.5 leading-tight">{cert.title}</h3>
                  <p className="text-[8px] sm:text-xs font-medium text-slate-500 leading-tight">{cert.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>

      {/* Lightbox / Popup Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors duration-300 z-50 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] aspect-[1/1.4] sm:aspect-auto sm:h-full bg-white rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Certificate full view"
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
