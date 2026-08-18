"use client";

import { m, useInView } from "framer-motion";
import { useRef, ComponentType } from "react";
import { Maximize, Settings, Truck, ShieldCheck } from "lucide-react";

type StatItem = {
  value: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
};

const stats: StatItem[] = [
  { value: "2,626 m²", label: "Covered Operational Area", icon: Maximize },
  { value: "15+", label: "Machining Centres & Presses", icon: Settings },
  { value: "6+", label: "EOT & Mobile Cranes", icon: Truck },
  { value: "100%", label: "Quality Compliant", icon: ShieldCheck },
];

function Counter({ value, label, icon: Icon }: { value: string; label: string; icon: ComponentType<{ className?: string }> }) {
  return (
    <div className="flex flex-col items-center justify-center p-3 sm:p-6 text-center sm:border-r border-white/10 relative group h-full">
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <Icon className="text-brand-orange-start mb-2 sm:mb-3 h-6 w-6 sm:h-[28px] sm:w-[28px]" />
      <div className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
        {value}
      </div>
      <div className="text-[10px] sm:text-sm text-slate-300 font-medium leading-tight">{label}</div>
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
              <Counter value={stat.value} label={stat.label} icon={stat.icon} />
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
