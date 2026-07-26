"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClipboardCheck, Search, ShieldAlert, FileText } from "lucide-react";

export default function QualityAssurance() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Reduce height to 300vh so they don't have to scroll for too long after it finishes
  // Spread the animations from 0 to 0.85. The final 0.15 gives a short natural pause before scrolling away.
  
  // Step 1: Pops up
  const step1Scale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1], { clamp: true });

  // Step 2: Slides in from the right
  const step2X = useTransform(scrollYProgress, [0.1, 0.35], ["100vw", "0vw"], { clamp: true });

  // Step 3: Slides in from the right
  const step3X = useTransform(scrollYProgress, [0.35, 0.6], ["100vw", "0vw"], { clamp: true });

  // Step 4: Slides in from the right
  const step4X = useTransform(scrollYProgress, [0.6, 0.85], ["100vw", "0vw"], { clamp: true });



  const processSteps = [
    {
      icon: ClipboardCheck,
      title: "Material Receiving",
      desc: "Verification of incoming raw materials & components.",
      scale: step1Scale,
      x: "0vw", // Step 1 doesn't slide
    },
    {
      icon: Search,
      title: "In-Process Checks",
      desc: "Continuous dimensional measurement and inspection.",
      scale: 1,
      x: step2X,
    },
    {
      icon: ShieldAlert,
      title: "Testing Phase",
      desc: "Testing against stringent requirements and standards.",
      scale: 1,
      x: step3X,
    },
    {
      icon: FileText,
      title: "Final Inspection",
      desc: "Complete inspection with comprehensive documentation.",
      scale: 1,
      x: step4X,
    },
  ];

  return (
    <section id="quality" className="bg-surface-light relative">
      <div ref={targetRef} className="h-auto md:h-[300vh] relative">
        <div className="relative md:sticky top-0 min-h-[100dvh] md:h-screen flex flex-col justify-center overflow-hidden py-16 md:py-24">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-[10px] font-semibold text-slate-700 tracking-wide uppercase">Quality Assurance</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
                Uncompromising Quality
              </h2>
              <p className="text-base md:text-lg text-slate-600">
                Scroll to see our 4-step framework that ensures every component meets exact specifications.
              </p>
            </div>

            {/* Timeline/Flow */}
            <div className="relative">
              {/* Connecting line (desktop) - hidden on mobile, shown on md and up */}
              <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[12%] right-[12%] h-0.5 bg-slate-200 overflow-hidden z-0">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-orange-start via-brand-blue-light to-brand-navy"
                  style={{ width: useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]) }}
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    style={{
                      scale: step.scale,
                      x: step.x,
                    }}
                    className="relative text-center bg-white p-4 md:p-6 rounded-2xl outline outline-1 outline-slate-200/60 hover:outline-brand-orange-start hover:shadow-lg transition-all duration-300 shadow-md"
                  >
                    {/* Connecting line (mobile) - only for odd indices (between row elements in 2-col grid) */}
                    {index % 2 === 0 && (
                      <div className="md:hidden absolute top-8 -right-4 w-4 h-0.5 bg-slate-200"></div>
                    )}
                    {/* Vertical connecting line (mobile) - for rows */}
                    {index < 2 && (
                      <div className="md:hidden absolute -bottom-4 left-1/2 w-0.5 h-4 bg-slate-200 -translate-x-1/2"></div>
                    )}
                    
                    <div className="w-16 h-16 md:w-24 md:h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-surface-light relative z-10 mb-4 md:mb-6 group hover:border-sky-500 transition-colors duration-300">
                      <step.icon className="text-brand-navy group-hover:text-brand-orange-start transition-colors duration-300 w-8 h-8 md:w-10 md:h-10" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold shadow-md text-xs md:text-sm">
                        {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-sm md:text-lg font-bold text-brand-dark mb-2 leading-tight">{step.title}</h3>
                    <p className="text-xs md:text-sm text-slate-600 line-clamp-3 md:line-clamp-none">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
