"use client";

import { useState, useEffect, useRef, ComponentType } from "react";
import { m, useInView } from "framer-motion";
import { Maximize, Settings, Truck, ShieldCheck } from "lucide-react";

function AnimatedCounter({ 
  to, 
  duration = 2, 
  useGrouping = false, 
  suffix = "", 
  prefix = "" 
}: { 
  to: number; 
  duration?: number; 
  useGrouping?: boolean; 
  suffix?: string; 
  prefix?: string; 
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutCubic = (x: number): number => {
      return 1 - Math.pow(1 - x, 3);
    };

    const updateCounter = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutCubic(progress);
      const current = Math.round(to * easedProgress);

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, to, duration]);

  const formatted = useGrouping ? count.toLocaleString() : count.toString();

  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  );
}

type StatItem = {
  numericValue: number;
  suffix?: string;
  prefix?: string;
  useGrouping?: boolean;
  duration?: number;
  label: string;
  icon: ComponentType<{ className?: string }>;
};

const stats: StatItem[] = [
  { numericValue: 2626, suffix: " m²", useGrouping: true, duration: 2.2, label: "Covered Operational Area", icon: Maximize },
  { numericValue: 15, suffix: "+", duration: 1.8, label: "Machining Centres & Presses", icon: Settings },
  { numericValue: 6, suffix: "+", duration: 1.5, label: "EOT & Mobile Cranes", icon: Truck },
  { numericValue: 100, suffix: "%", duration: 2.0, label: "Quality Compliant", icon: ShieldCheck },
];

function CounterCard({ item }: { item: StatItem }) {
  const Icon = item.icon;
  return (
    <div className="flex flex-col items-center justify-center p-3 sm:p-6 text-center sm:border-r border-white/10 relative group h-full">
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      <Icon className="text-brand-orange-start mb-2 sm:mb-3 h-6 w-6 sm:h-[28px] sm:w-[28px]" />
      <div className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-1 font-display">
        <AnimatedCounter 
          to={item.numericValue} 
          suffix={item.suffix} 
          prefix={item.prefix}
          useGrouping={item.useGrouping}
          duration={item.duration}
        />
      </div>
      <div className="text-[10px] sm:text-sm text-slate-300 font-medium leading-tight font-sans">{item.label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="bg-brand-navy border-y-4 border-sky-500 relative z-20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-0">
          {stats.map((stat, index) => (
            <m.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CounterCard item={stat} />
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
