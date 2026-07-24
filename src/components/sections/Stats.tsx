"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Maximize, Settings, Truck, ShieldCheck } from "lucide-react";

const Counter = ({ value, label, icon: Icon, inView }: { value: string, label: string, icon: any, inView: boolean }) => {
  // A simple representation for the stat tile
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center border-b sm:border-b-0 sm:border-r border-white/10 last:border-0 relative group">
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <Icon className="text-brand-orange-start mb-3" size={28} />
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
        {value}
      </div>
      <div className="text-sm text-slate-300 font-medium">{label}</div>
    </div>
  );
};

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    { value: "2,626 m²", label: "Covered Operational Area", icon: Maximize },
    { value: "15+", label: "Machining Centres & Presses", icon: Settings },
    { value: "6+", label: "EOT & Mobile Cranes", icon: Truck },
    { value: "100%", label: "Quality Compliant", icon: ShieldCheck },
  ];

  return (
    <section ref={ref} className="bg-brand-navy border-y-4 border-sky-500 relative z-20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Counter value={stat.value} label={stat.label} icon={stat.icon} inView={isInView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
