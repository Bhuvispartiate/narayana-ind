"use client";

import { motion, Variants } from "framer-motion";
import { Settings, Scissors, MoveDown, Crosshair, Wrench, Search } from "lucide-react";

export default function Capabilities() {
  const capabilities = [
    { id: "01", title: "CNC Turning & Machining Centres", icon: Settings, desc: "High-precision turning and vertical/horizontal machining for complex geometries." },
    { id: "02", title: "Laser Cutting Systems", icon: Scissors, desc: "2KW capacity, cutting 1–16mm thickness with large bed sizes." },
    { id: "03", title: "Hydraulic Presses", icon: MoveDown, desc: "Range from 100 to 400 ton capacities for diverse forming operations." },
    { id: "04", title: "Robotic Welding Stations", icon: Crosshair, desc: "ABB & Panasonic robots with up to 1520mm arm radius and auto touch sensors." },
    { id: "05", title: "Fabrication & Assembly", icon: Wrench, desc: "Complete line production for automobile and structural components." },
    { id: "06", title: "Inspection & Quality", icon: Search, desc: "Dedicated precision surface tables and advanced testing equipment." },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 1.05, y: -40 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 20, 
        mass: 2 
      } 
    }
  };

  return (
    <section id="capabilities" className="py-16 lg:py-12 bg-white relative lg:min-h-[85vh] lg:max-h-[100vh] lg:flex lg:items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 1.1, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 300, damping: 15, mass: 1.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-3">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            <span className="text-[10px] font-semibold text-slate-700 tracking-wide uppercase">Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
            Advanced Manufacturing <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">Infrastructure</span>
          </h2>
          <p className="text-base text-slate-600">
            Equipped with state-of-the-art machinery and heavy-duty EOT cranes across our 2,626 m² facility to handle diverse engineering challenges.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {capabilities.map((cap) => (
            <motion.div 
              key={cap.id}
              variants={itemVariants}
              className="bg-white rounded-xl p-5 lg:p-6 outline outline-1 outline-slate-200/60 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-blue-light/5 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-150"></div>
              
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="w-12 h-12 bg-slate-50 rounded-lg shadow-sm flex items-center justify-center text-brand-navy group-hover:text-brand-orange-start group-hover:bg-brand-navy transition-colors duration-300">
                  <cap.icon size={24} />
                </div>
                <span className="text-3xl font-black text-slate-200 group-hover:text-brand-blue-light/20 transition-colors duration-300">
                  {cap.id}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-brand-dark mb-2 relative z-10">
                {cap.title}
              </h3>
              
              <p className="text-sm text-slate-600 relative z-10">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
