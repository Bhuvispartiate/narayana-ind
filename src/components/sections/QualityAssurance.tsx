"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClipboardCheck, Search, ShieldAlert, FileText } from "lucide-react";

export default function QualityAssurance() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Desktop transforms (smooth staggered slide & fade)
  const desktopStep1Scale = useTransform(scrollYProgress, [0, 0.15], [0.85, 1], { clamp: true });
  const desktopStep1Opacity = useTransform(scrollYProgress, [0, 0.1], [0.3, 1], { clamp: true });

  const desktopStep2X = useTransform(scrollYProgress, [0.15, 0.38], ["40px", "0px"], { clamp: true });
  const desktopStep2Opacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1], { clamp: true });

  const desktopStep3X = useTransform(scrollYProgress, [0.38, 0.62], ["40px", "0px"], { clamp: true });
  const desktopStep3Opacity = useTransform(scrollYProgress, [0.38, 0.58], [0, 1], { clamp: true });

  const desktopStep4X = useTransform(scrollYProgress, [0.62, 0.85], ["40px", "0px"], { clamp: true });
  const desktopStep4Opacity = useTransform(scrollYProgress, [0.62, 0.82], [0, 1], { clamp: true });

  // Mobile transforms (lightweight fade + translateY, avoiding 100vw horizontal overflow)
  const mobileStep1Scale = useTransform(scrollYProgress, [0, 0.15], [0.9, 1], { clamp: true });
  const mobileStep1Opacity = useTransform(scrollYProgress, [0, 0.12], [0.4, 1], { clamp: true });

  const mobileStep2Y = useTransform(scrollYProgress, [0.15, 0.35], ["24px", "0px"], { clamp: true });
  const mobileStep2Opacity = useTransform(scrollYProgress, [0.15, 0.32], [0, 1], { clamp: true });

  const mobileStep3Y = useTransform(scrollYProgress, [0.35, 0.58], ["24px", "0px"], { clamp: true });
  const mobileStep3Opacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1], { clamp: true });

  const mobileStep4Y = useTransform(scrollYProgress, [0.58, 0.8], ["24px", "0px"], { clamp: true });
  const mobileStep4Opacity = useTransform(scrollYProgress, [0.58, 0.78], [0, 1], { clamp: true });

  // Active step highlights (for progress indicator)
  const progressLineWidth = useTransform(scrollYProgress, [0.05, 0.82], ["0%", "100%"]);

  const processSteps = [
    {
      icon: ClipboardCheck,
      title: "Material Receiving",
      desc: "Verification of incoming raw materials & components.",
      desktopStyle: { scale: desktopStep1Scale, opacity: desktopStep1Opacity, x: 0, y: 0 },
      mobileStyle: { scale: mobileStep1Scale, opacity: mobileStep1Opacity, x: 0, y: 0 },
    },
    {
      icon: Search,
      title: "In-Process Checks",
      desc: "Continuous dimensional measurement and inspection.",
      desktopStyle: { scale: 1, opacity: desktopStep2Opacity, x: desktopStep2X, y: 0 },
      mobileStyle: { scale: 1, opacity: mobileStep2Opacity, x: 0, y: mobileStep2Y },
    },
    {
      icon: ShieldAlert,
      title: "Testing Phase",
      desc: "Testing against stringent requirements and standards.",
      desktopStyle: { scale: 1, opacity: desktopStep3Opacity, x: desktopStep3X, y: 0 },
      mobileStyle: { scale: 1, opacity: mobileStep3Opacity, x: 0, y: mobileStep3Y },
    },
    {
      icon: FileText,
      title: "Final Inspection",
      desc: "Complete inspection with comprehensive documentation.",
      desktopStyle: { scale: 1, opacity: desktopStep4Opacity, x: desktopStep4X, y: 0 },
      mobileStyle: { scale: 1, opacity: mobileStep4Opacity, x: 0, y: mobileStep4Y },
    },
  ];

  return (
    <section id="quality" className="bg-surface-light relative overflow-hidden">
      {/* Sticky Scroll Container: tuned height (220vh on mobile, 260vh on desktop) */}
      <div ref={targetRef} className="h-[220vh] md:h-[260vh] relative">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-6 sm:py-10 md:py-16 px-2 sm:px-4">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 md:mb-16">
              <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
                <div className="w-6 sm:w-8 h-1 bg-brand-orange-start rounded-full"></div>
                <span className="text-brand-navy font-bold uppercase tracking-wider text-xs sm:text-sm">
                  Quality Assurance
                </span>
                <div className="w-6 sm:w-8 h-1 bg-brand-orange-start rounded-full"></div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-2 sm:mb-4">
                Uncompromising Quality
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 max-w-xl mx-auto">
                Scroll to see our 4-step framework that ensures every component meets exact specifications.
              </p>
            </div>

            {/* Timeline Flow */}
            <div className="relative max-w-5xl mx-auto">
              
              {/* Desktop Progress Line */}
              <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-1 bg-slate-200/80 rounded-full overflow-hidden z-0">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-orange-start via-brand-blue-light to-brand-navy rounded-full"
                  style={{ width: progressLineWidth }}
                />
              </div>

              {/* Mobile Progress Bar (Top banner style) */}
              <div className="md:hidden w-full max-w-xs mx-auto mb-6 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-orange-start via-brand-blue-light to-brand-navy rounded-full"
                  style={{ width: progressLineWidth }}
                />
              </div>

              {/* Steps Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                {processSteps.map((step, index) => {
                  const animatedStyle = isMobile ? step.mobileStyle : step.desktopStyle;

                  return (
                    <motion.div
                      key={step.title}
                      style={{
                        scale: animatedStyle.scale,
                        opacity: animatedStyle.opacity,
                        x: animatedStyle.x,
                        y: animatedStyle.y,
                        willChange: "transform, opacity",
                      }}
                      className="relative text-center bg-white p-3.5 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-brand-orange-start/60 transition-all duration-300 flex flex-col items-center justify-between"
                    >
                      {/* Step Badge & Icon */}
                      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-slate-50 to-white rounded-full flex items-center justify-center shadow-md border-2 border-surface-light relative z-10 mb-3 sm:mb-4 group hover:border-sky-500 transition-colors duration-300">
                        <step.icon className="text-brand-navy group-hover:text-brand-orange-start transition-colors duration-300 w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
                        
                        <div className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 w-5 h-5 sm:w-7 sm:h-7 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold shadow-md text-[10px] sm:text-xs md:text-sm">
                          0{index + 1}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="w-full">
                        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-brand-dark mb-1 sm:mb-2 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 leading-snug sm:leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
