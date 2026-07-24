"use client";


import { useState } from "react";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesPortfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);


  const portfolio = [
    {
      id: 1,
      title: "Piston for Air Spring",
      category: "Automotive",
      image: "/images/product-1.svg",
      desc: "Pistons for air spring systems used in commercial load vehicles and buses.",
    },
    {
      id: 2,
      title: "Railway Air Spring System",
      category: "Railway",
      image: "/images/product-2.svg",
      desc: "Precision metal parts for railway air spring systems compliant with EN 15085-2:2020.",
    },
    {
      id: 3,
      title: "Pressure Parts & Steam Equipment",
      category: "Power & Pressure Parts",
      image: "/images/product-3.svg",
      desc: "Air lock vessels, super heater spray assemblies, loose pipe bending, and pressure panels.",
    },
    {
      id: 4,
      title: "Structural Fabrication",
      category: "Structural",
      image: "/images/product-4.svg",
      desc: "Galleries, A-frames, trusses, built-up beams, and elevated platforms.",
    },
    {
      id: 5,
      title: "SPM Panel Bending Machine",
      category: "Machine Building",
      image: "/images/product-5.svg",
      desc: "Custom-built panel bending machines for welded panels, bendable up to 120°.",
    },
  ];



  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          initial={{ opacity: 0, scale: 1.05, y: -40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 400, damping: 20, mass: 2 }}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-1 bg-brand-orange-start rounded-full"></div>
              <span className="text-brand-navy font-bold uppercase tracking-wider text-sm">Our Products</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Services & Product Portfolio
            </h2>
            <p className="text-lg text-slate-600">
              Delivering high-precision components across major industrial sectors.
            </p>
          </div>
          <div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-sky-500 text-brand-dark px-6 py-3 rounded-lg font-bold transition-all shadow-sm hover:shadow-md"
            >
              View All Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-brand-orange-start" />
            </button>
          </div>
        </motion.div>

        {/* Marquee Carousel */}
        <div className="overflow-hidden w-[100vw] relative left-1/2 -translate-x-1/2 pb-8">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex w-max gap-6 md:gap-8 animate-marquee pause-on-hover px-4 sm:px-8 pt-4">
            {Array(8).fill(portfolio).flat().map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                onClick={() => setSelectedProduct(item)}
                className="bg-white rounded-xl overflow-hidden outline outline-1 outline-slate-200/60 shadow-md hover:shadow-xl transition-all duration-300 group w-[85vw] sm:w-[350px] md:w-[380px] shrink-0 hover:scale-[1.03] cursor-pointer"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-brand-navy shadow-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-brand-dark">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View All Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" 
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-slate-50 w-full max-w-6xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="flex justify-between items-center p-6 sm:px-8 border-b border-slate-200 bg-white">
                <h3 className="text-2xl font-bold text-brand-dark">All Products & Services</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
                  <X size={24} />
                </button>
              </div>
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolio.map((item) => (
                  <div key={item.id} 
                    onClick={() => setSelectedProduct(item)}
                    className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full cursor-pointer"
                  >
                      <div className="relative h-48 w-full overflow-hidden shrink-0">
                        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-brand-navy shadow-sm uppercase tracking-wider">
                          {item.category}
                        </div>
                      </div>
                      <div className="p-5 flex flex-col grow justify-center">
                        <h4 className="text-lg font-bold text-brand-dark">{item.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Single Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
              onClick={() => setSelectedProduct(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <div className="relative w-full md:w-1/2 h-64 md:h-auto shrink-0 bg-slate-100">
                <Image src={selectedProduct.image} alt={selectedProduct.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded text-xs font-bold text-brand-navy shadow-sm uppercase tracking-wider">
                  {selectedProduct.category}
                </div>
              </div>
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center overflow-y-auto w-full md:w-1/2">
                <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-colors z-10">
                  <X size={20} />
                </button>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6 pr-8">{selectedProduct.title}</h3>
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <a href="#contact" onClick={() => { setIsModalOpen(false); setSelectedProduct(null); }} className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-brand-orange-start hover:bg-brand-orange-end text-brand-dark px-6 py-3 rounded-lg font-bold transition-all shadow-sm">
                    Inquire About Product
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
