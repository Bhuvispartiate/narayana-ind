"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { 
  X, 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Layers,
  ChevronRight,
  Eye
} from "lucide-react";
import { m, AnimatePresence } from "framer-motion";

export type Product = {
  id: number;
  title: string;
  category: "Automotive" | "Railway & Metro" | "Power & Boilers" | "Structural" | "Special Machinery";
  categoryLabel: string;
  image: string;
  tag: string;
  isFeatured?: boolean;
  shortDesc: string;
  fullDesc: string;
  specs: {
    label: string;
    value: string;
  }[];
  keyFeatures: string[];
  applications: string[];
  certifications: string[];
};

const productsData: Product[] = [
  {
    id: 5,
    title: "SPM Panel Bending Machine",
    category: "Special Machinery",
    categoryLabel: "Special Purpose Machinery",
    image: "/images/Products/product1.jpg",
    tag: "Flagship Innovation",
    isFeatured: true,
    shortDesc: "Custom-built hydraulic & PLC-controlled panel bending machine engineered for welded boiler panels with bend capacity up to 120°.",
    fullDesc: "Designed and built in-house, the SPM Panel Bending Machine is a high-performance solution for heavy-duty boiler wall panels and industrial sheet metal. It integrates precision hydraulic cylinders and digital angle encoders to achieve seamless, repetitive bends without micro-cracking.",
    specs: [
      { label: "Bending Angle Range", value: "0° to 120° Continuous" },
      { label: "Max Panel Width", value: "3,200 mm Bed Size" },
      { label: "Control System", value: "PLC Touch Screen Interface" },
      { label: "Drive Mechanism", value: "High-Pressure Hydraulic Powerpack" },
      { label: "Angle Accuracy", value: "±0.2° Repeatability" },
      { label: "Panel Compatibility", value: "Welded Boiler Membrane Walls" },
    ],
    keyFeatures: [
      "Custom tooling setup for varying tube pitch and panel thicknesses",
      "Hydraulic clamping preventing distortion on welded seams",
      "Digital programmable angle sequencing for complex geometries",
      "Robust welded steel frame built for heavy continuous operations"
    ],
    applications: [
      "Thermal Boiler Waterwall Panels",
      "Superheater & Economizer Wall Bending",
      "Industrial Ducting & Heavy Flues",
      "Custom Fabrication Workshops"
    ],
    certifications: ["ISO 9001:2015", "CE Compliant Architecture", "In-House QA Tested"]
  },
  {
    id: 2,
    title: "Railway Air Spring Suspension Metal Parts",
    category: "Railway & Metro",
    categoryLabel: "Railway & Metro Transit",
    image: "/images/Products/product2.jpg",
    tag: "EN 15085-2 Certified",
    isFeatured: true,
    shortDesc: "Precision-machined metal components for railway air spring bogie suspension systems meeting stringent EN 15085-2 CL1 standards.",
    fullDesc: "Engineered specifically for mainline passenger coaches, EMU high-speed trainsets, and urban metro bogies. These critical load-bearing metal assemblies interface with pneumatic air springs to absorb dynamic vibrations and ensure passenger ride stability.",
    specs: [
      { label: "Welding Standard", value: "EN 15085-2:2020+A1:2023 (CL1)" },
      { label: "Material Grade", value: "High-Yield Railway Spec Carbon & Corten Steel" },
      { label: "Non-Destructive Testing", value: "100% Radiography, UT & MPI Tested" },
      { label: "Machining Tolerance", value: "±0.02 mm on Critical Interfaces" },
      { label: "Corrosion Protection", value: "Zinc Phosphated & Multi-coat Polyurethane" },
    ],
    keyFeatures: [
      "Certified under Europe's most stringent railway welding standard (EN 15085-2)",
      "High fatigue strength under continuous dynamic cyclic loading",
      "Zero-defect weld integrity verified by certified Level-II NDT inspectors",
      "Custom machined emergency stop plates and bottom reservoir interfaces"
    ],
    applications: [
      "Vande Bharat & High-Speed Trainset Bogies",
      "LHB Mainline Passenger Coach Suspension",
      "Metro Rail Transits & EMU Railcars",
      "Heavy Freight Air Brake Interfaces"
    ],
    certifications: ["EN 15085-2 CL1", "ISO 3834-2:2021", "ISO 9001:2015"]
  },
  {
    id: 1,
    title: "Piston for Air Spring System",
    category: "Automotive",
    categoryLabel: "Automotive & Commercial Vehicles",
    image: "/images/Products/product3.jpg",
    tag: "Automotive OEM Tier-1",
    isFeatured: false,
    shortDesc: "High-durability lightweight aluminum alloy and precision steel pistons engineered for commercial buses, haulers, and trailers.",
    fullDesc: "Precision-turned and hard-anodized air spring pistons crafted for commercial vehicle air suspension. Designed for lightweight efficiency, structural rigidity under extreme bump loads, and leak-tight pneumatic sealing.",
    specs: [
      { label: "Tolerance Range", value: "±0.015 mm CNC Turned" },
      { label: "Material Composition", value: "High-Grade Aircraft Alloy / Forged Steel" },
      { label: "Pressure Testing", value: "100% Leak Tested @ 25 Bar" },
      { label: "Surface Finish", value: "Ra 0.4 μm Hard Anodized" },
      { label: "Weight Optimization", value: "Engineered Low Inertia Profile" },
    ],
    keyFeatures: [
      "100% automated dimensional inspection on critical seal diameters",
      "Advanced surface treatment for maximum resistance to road salts and gravel",
      "Optimized internal ribbing for high strength-to-weight ratio",
      "High volume production capacity for Tier-1 automotive supply"
    ],
    applications: [
      "Heavy Commercial Trucks (Multi-Axle)",
      "Intercity & Low-Floor Luxury Transit Buses",
      "Semi-Trailer Air Suspension Systems",
      "Special Heavy Haulage Transport"
    ],
    certifications: ["ISO 9001:2015", "OEM Automotive Quality Audited"]
  },
  {
    id: 3,
    title: "Boiler Pressure Parts & Steam Piping",
    category: "Power & Boilers",
    categoryLabel: "Power & Pressure Equipment",
    image: "/images/Products/product4.jpg",
    tag: "ASME & IBR Certified",
    isFeatured: false,
    shortDesc: "Air lock vessels, superheater spray assemblies, precision tight-radius pipe bending, and boiler membrane panels.",
    fullDesc: "Manufactured under strict Indian Boiler Regulations (IBR) and ASME Section VIII standards. Narayana Industries supplies critical steam and pressure holding components for supercritical thermal power units, chemical refineries, and waste-to-energy plants.",
    specs: [
      { label: "Design Codes", value: "ASME Sec VIII, IBR 1950, ISO 3834-2" },
      { label: "Hydrostatic Testing", value: "Up to 350 Bar Hydraulic Test Bench" },
      { label: "Bending Capability", value: "Tight-Radius Cold & Hot Mandrel Bending" },
      { label: "Tube Diameters", value: "Ø19 mm to Ø168 mm OD Range" },
      { label: "Welding Process", value: "GTAW + SMAW with Purging Control" },
    ],
    keyFeatures: [
      "Full traceability of materials with Mill Test Certificates (MTC)",
      "Strict welder qualification test (WQT) records maintained per ASME Sec IX",
      "Air lock vessels with high-integrity gasket flanges",
      "Precision spray nozzles for desuperheater assemblies"
    ],
    applications: [
      "Thermal Power Generating Stations",
      "Industrial Captive Cogeneration Boilers",
      "Biomass & Waste-to-Energy Boilers",
      "Chemical Processing & Steam Lines"
    ],
    certifications: ["IBR Approved", "ISO 3834-2:2021", "ISO 9001:2015"]
  },
  {
    id: 4,
    title: "Heavy Industrial Structural Fabrication",
    category: "Structural",
    categoryLabel: "Infrastructure & Heavy Engineering",
    image: "/images/Products/product5.jpg",
    tag: "Heavy Structures",
    isFeatured: false,
    shortDesc: "Overhead crane girders, conveyor galleries, heavy A-frames, trusses, built-up H-beams, and elevated access platforms.",
    fullDesc: "Leveraging our 2,626 m² covered bay and dual 10T/20T EOT cranes, we fabricate, fit, and weld massive industrial steel structures designed to withstand heavy dynamic vibrations and aggressive industrial environments.",
    specs: [
      { label: "Single Piece Capacity", value: "Up to 50 Metric Tonnes (MT)" },
      { label: "Lifting Bay Coverage", value: "Dual Heavy EOT Cranes (10T & 20T)" },
      { label: "Welding Methods", value: "Robotic MIG & Submerged Arc (SAW)" },
      { label: "Surface Preparation", value: "Shot Blasting (Sa 2.5) + Epoxy Primer" },
      { label: "Dimensional Control", value: "Laser Level & Total Station Inspected" },
    ],
    keyFeatures: [
      "Large-bed fabrication tables capable of supporting 30m beam spans",
      "In-house plate beveling and multi-pass robotic seam welding",
      "Pre-assembly trial fit-up performed before factory dispatch",
      "Engineered for rapid on-site bolt/weld erection"
    ],
    applications: [
      "Integrated Steel Mills & Smelters",
      "Cement Plant Kiln & Conveyor Towers",
      "Heavy Material Handling Gantries",
      "Industrial Warehouses & Crane Runways"
    ],
    certifications: ["ISO 3834-2:2021", "ISO 9001:2015"]
  },
  {
    id: 6,
    title: "Precision CNC Turned & Machined Components",
    category: "Automotive",
    categoryLabel: "Precision Machining & Tooling",
    image: "/images/Products/product6.jpg",
    tag: "High-Tolerance Machining",
    isFeatured: false,
    shortDesc: "Custom turned shafts, hydraulic manifolds, specialized flanges, and close-tolerance mechanical fixtures.",
    fullDesc: "Our machining facility features multi-axis CNC lathes and Vertical Machining Centres (VMCs) configured for high-repeatability batch production as well as custom tender prototype development.",
    specs: [
      { label: "Machining Accuracy", value: "±0.005 mm (5 Microns)" },
      { label: "Turning Envelope", value: "Ø15 mm to Ø650 mm Diameter" },
      { label: "Surface Roughness", value: "Ra 0.2 – 0.4 μm Superfinish" },
      { label: "Materials Handled", value: "Alloy Steel, Stainless (SS316/304), Brass, Aluminum" },
      { label: "Inspection Equipment", value: "Digital Height Masters & Trimos Surface Testers" },
    ],
    keyFeatures: [
      "Multi-axis simultaneous machining for complex contour geometries",
      "In-process CMM / precision surface inspection",
      "Low lead-time prototype turnarounds and batch scaling",
      "Custom heat treatment and phosphating options available"
    ],
    applications: [
      "Automotive Drivetrains & Gearboxes",
      "Hydraulic Cylinder End Plugs & Manifolds",
      "Heavy Valve Actuators & Flanges",
      "Custom Machine Building Fixtures"
    ],
    certifications: ["ISO 9001:2015", "Comprehensive CMM Inspection Logs"]
  }
];

const categories = [
  { id: "ALL", label: "All", count: productsData.length },
  { id: "Special Machinery", label: "SPM", count: productsData.filter(p => p.category === "Special Machinery").length },
  { id: "Railway & Metro", label: "Railway", count: productsData.filter(p => p.category === "Railway & Metro").length },
  { id: "Automotive", label: "Automotive", count: productsData.filter(p => p.category === "Automotive").length },
  { id: "Power & Boilers", label: "Power & Boilers", count: productsData.filter(p => p.category === "Power & Boilers").length },
  { id: "Structural", label: "Structural", count: productsData.filter(p => p.category === "Structural").length },
];

// Subcomponent: Wide & Prominent Active Product Workstation (Left Column)
function ActiveProductWorkstation({
  activeProduct,
  onOpenModal
}: {
  activeProduct: Product;
  onOpenModal: (p: Product) => void;
}) {
  const isFlagship = activeProduct.id === 5;
  const isRailway = activeProduct.id === 2;

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 lg:p-8 border border-slate-200/90 shadow-xl relative overflow-hidden flex flex-col justify-between h-auto lg:h-[560px] xl:h-[580px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 h-full">
        
        {/* Sub-Col 1: High-Impact Visual Box (Left side inside Workstation) */}
        <div className="md:col-span-5 flex flex-col justify-between h-[280px] md:h-full">
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-inner group">
            <Image
              src={activeProduct.image}
              alt={activeProduct.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Top Badges Bar inside Image */}
            <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
              <span className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-extrabold text-slate-800 shadow-sm uppercase tracking-wider border border-slate-200/70 truncate max-w-[55%]">
                {activeProduct.category}
              </span>
              {isFlagship ? (
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1 shrink-0">
                  <Sparkles size={11} />
                  Flagship
                </span>
              ) : isRailway ? (
                <span className="bg-emerald-600 text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md shrink-0">
                  EN 15085-2
                </span>
              ) : (
                <span className="bg-slate-900/85 backdrop-blur-md text-slate-200 px-2.5 py-1 rounded-lg text-[10px] font-semibold border border-white/10 shrink-0">
                  {activeProduct.tag}
                </span>
              )}
            </div>

            {/* Bottom Parameter Pill inside Image */}
            <div className="absolute bottom-3 inset-x-3 pointer-events-none z-10">
              <div className="bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs text-white font-mono flex items-center gap-2 border border-white/15 shadow-lg truncate">
                <Cpu size={14} className="text-sky-400 shrink-0" />
                <span className="truncate">{activeProduct.specs[0]?.label}: <strong>{activeProduct.specs[0]?.value}</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Col 2: Technical Specifications & Details (Right side inside Workstation) */}
        <div className="md:col-span-7 flex flex-col justify-between h-full space-y-4">
          
          {/* Header */}
          <div>
            <div className="flex items-center justify-between gap-3 mb-1.5">
              <span className="text-[11px] font-extrabold uppercase text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-100 tracking-wider truncate">
                {activeProduct.categoryLabel}
              </span>
              <button
                onClick={() => onOpenModal(activeProduct)}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors shrink-0 shadow-xs"
                aria-label={`Open full technical sheet for ${activeProduct.title}`}
              >
                <Eye size={13} />
                <span>Full Specs</span>
              </button>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {activeProduct.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
              {activeProduct.fullDesc}
            </p>
          </div>

          {/* 6 Key Specifications Matrix */}
          <div className="bg-slate-50/90 rounded-2xl p-3.5 border border-slate-100">
            <div className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider mb-2 flex items-center gap-1.5">
              <Cpu size={12} className="text-sky-600" />
              Manufacturing & Engineering Parameters
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {activeProduct.specs.slice(0, 6).map((spec) => (
                <div key={spec.label} className="bg-white p-2.5 rounded-xl border border-slate-200/60 flex flex-col justify-center shadow-xs">
                  <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium truncate">{spec.label}</span>
                  <span className="text-xs sm:text-[13px] font-extrabold text-slate-900 truncate mt-0.5">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Advantages Chips */}
          <div>
            <div className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider mb-1.5 flex items-center gap-1.5">
              <Sparkles size={12} className="text-amber-500" />
              Key Engineering Highlights
            </div>
            <div className="flex flex-col gap-1.5">
              {activeProduct.keyFeatures.slice(0, 2).map((feat) => (
                <div key={feat} className="text-xs text-slate-700 bg-sky-50/60 border border-sky-100/70 rounded-lg px-2.5 py-1 flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-sky-600 shrink-0" />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Action Bar */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-4">
            <span className="text-xs text-slate-500 truncate">
              {activeProduct.certifications.slice(0, 2).join(" • ")}
            </span>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-sky-600/20 flex items-center gap-2 shrink-0 transition-[background-color,box-shadow]"
            >
              <span>Request Technical RFQ</span>
              <ArrowRight size={14} />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

// Subcomponent: Compact Product Selector List (Horizontal on Mobile, Vertical Rail on Desktop)
function ProductSelectorList({
  products,
  activeProduct,
  onSelectProduct
}: {
  products: Product[];
  activeProduct: Product;
  onSelectProduct: (p: Product) => void;
}) {
  return (
    <div className="flex flex-col h-auto lg:h-[560px] xl:h-[580px]">
      <div className="flex items-center justify-between text-xs font-extrabold uppercase text-slate-500 tracking-wider mb-2.5 px-1 shrink-0">
        <span>Component Catalog ({products.length})</span>
        <span className="text-[10px] text-sky-600 font-medium lowercase">
          <span className="lg:hidden">swipe horizontally • tap to inspect</span>
          <span className="hidden lg:inline">click to inspect</span>
        </span>
      </div>

      {/* Horizontal Scroll on Mobile / Vertical Scroll on Desktop */}
      <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible overflow-y-hidden lg:overflow-y-auto custom-scrollbar gap-3 lg:gap-0 lg:space-y-2.5 pb-3 lg:pb-0 pr-0 lg:pr-1.5 flex-1 snap-x snap-mandatory">
        {products.map((item) => {
          const isActive = activeProduct.id === item.id;
          const isFlagship = item.id === 5;
          const isRailway = item.id === 2;

          return (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              aria-label={`Inspect ${item.title}`}
              onClick={() => onSelectProduct(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectProduct(item);
                }
              }}
              className={`shrink-0 w-[260px] sm:w-[290px] lg:w-full snap-start p-3 sm:p-3.5 rounded-2xl cursor-pointer transition-[border-color,box-shadow,background-color,transform] duration-200 border flex items-center gap-3.5 relative overflow-hidden group ${
                isActive
                  ? "bg-white border-sky-500 shadow-md shadow-sky-500/10 ring-2 ring-sky-500/20 lg:translate-x-1"
                  : "bg-white/90 hover:bg-white border-slate-200/90 hover:border-slate-300 shadow-xs lg:hover:translate-x-0.5"
              }`}
            >
              {/* Active Left Indicator */}
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-sky-500 to-indigo-600" />
              )}

              {/* Thumbnail */}
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200/80">
                <Image src={item.image} alt={item.title} fill sizes="72px" className="object-cover" />
              </div>

              {/* Meta Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[9px] font-bold text-sky-700 bg-sky-50 px-1.5 py-0.2 rounded uppercase">
                    {item.category}
                  </span>
                  {isFlagship && (
                    <span className="text-[8px] font-black text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded uppercase flex items-center gap-0.5">
                      <Sparkles size={9} />
                      Flagship
                    </span>
                  )}
                  {isRailway && (
                    <span className="text-[8px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded uppercase">
                      EN 15085
                    </span>
                  )}
                </div>
                <h4 className={`text-xs sm:text-sm font-bold truncate transition-colors ${isActive ? "text-sky-700" : "text-slate-900 group-hover:text-sky-600"}`}>
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                  {item.specs[0]?.label}: {item.specs[0]?.value}
                </p>
              </div>

              {/* Arrow Icon */}
              <ChevronRight 
                size={16} 
                className={`shrink-0 transition-transform ${
                  isActive ? "text-sky-600 lg:translate-x-0.5" : "text-slate-300 group-hover:text-slate-500"
                }`} 
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Subcomponent: Full Technical Specification Modal
function ProductDetailModal({
  product,
  onClose
}: {
  product: Product;
  onClose: () => void;
}) {
  // Lock body scroll and handle Escape key
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow || "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 lg:p-10 overscroll-contain">
      {/* Backdrop */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="button"
        tabIndex={0}
        aria-label="Close modal backdrop"
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
            e.preventDefault();
            onClose();
          }
        }}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Box */}
      <m.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 border border-slate-200 overscroll-contain"
      >
        {/* Modal Top Nav */}
        <div className="flex items-center justify-between p-6 sm:px-8 border-b border-slate-200 bg-slate-50/80 backdrop-blur-sm shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center font-black text-sm">
              {product.id}
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-700 bg-sky-100/70 px-2 py-0.5 rounded">
                {product.categoryLabel}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">{product.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white hover:bg-slate-200 text-slate-500 transition-colors border border-slate-200 shadow-sm"
            aria-label={`Close modal for ${product.title}`}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content Scrollable Area (Only this scrolls) */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-8 overscroll-contain">
          
          {/* Visual + Quick Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-5 relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-slate-800 shadow-sm">
                {product.tag}
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col justify-between h-full space-y-4">
              <div>
                <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-2">
                  Product Overview
                </h4>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {product.fullDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h5 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-2">
                  Verified Certifications & Compliance
                </h5>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert) => (
                    <span key={cert} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                      <ShieldCheck size={14} className="text-emerald-600" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div>
            <h4 className="text-sm font-extrabold uppercase text-slate-900 tracking-wider mb-4 flex items-center gap-2">
              <Cpu size={16} className="text-sky-600" />
              Engineering Specifications & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {product.specs.map((spec) => (
                <div key={spec.label} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <span className="text-xs text-slate-500 font-semibold block">{spec.label}</span>
                  <span className="text-sm font-extrabold text-slate-900 mt-1 block">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features & Engineering Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200">
              <h4 className="text-xs font-extrabold uppercase text-slate-700 tracking-wider mb-4 flex items-center gap-2">
                <Sparkles size={15} className="text-amber-500" />
                Key Engineering Advantages
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {product.keyFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-sky-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200">
              <h4 className="text-xs font-extrabold uppercase text-slate-700 tracking-wider mb-4 flex items-center gap-2">
                <Layers size={15} className="text-indigo-500" />
                Primary Industry Applications
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <span key={app} className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-sm">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:px-8 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <span className="text-xs text-slate-500">
            ISO 9001:2015 & EN 15085-2 Certified Manufacturing Facility in Trichy, India.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-[background-color,box-shadow]"
            >
              <span>Request Quotation</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

      </m.div>
    </div>
  );
}

export default function ServicesPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeInspectorProduct, setActiveInspectorProduct] = useState<Product>(productsData[0]);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  // Filtered dataset
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory = selectedCategory === "ALL" || product.category === selectedCategory;
      const matchesSearch = 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specs.some(s => s.value.toLowerCase().includes(searchQuery.toLowerCase()) || s.label.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-16 lg:py-14 bg-surface-light relative overflow-hidden">
      
      {/* Background blueprint grid decoration */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:32px_32px]" 
      />
      <div className="absolute top-20 right-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Compact Streamlined Section Header & Search Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white border border-slate-200 shadow-sm mb-1.5">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-700 tracking-wider uppercase">
                Product Engineering Workstation
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Engineering Showcase & <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-700 bg-clip-text text-transparent">Deep Inspector</span>
            </h2>
          </div>

          {/* Compact Filter & Search Strip */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Category Pills */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-xs overflow-x-auto no-scrollbar">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      const matching = productsData.filter(p => cat.id === "ALL" || p.category === cat.id);
                      if (matching.length > 0) setActiveInspectorProduct(matching[0]);
                    }}
                    className={`whitespace-nowrap px-3 py-1 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 ${
                      isActive
                        ? "bg-sky-600 text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[9px] px-1 py-0.2 rounded-full font-bold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Compact Search Input */}
            <div className="relative min-w-[200px] shrink-0">
              <label htmlFor="product-search-input" className="sr-only">
                Search specifications and standards
              </label>
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="product-search-input"
                type="text"
                placeholder="Search specs, parts..."
                aria-label="Search specifications and standards"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-7 py-1.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 shadow-xs"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600"
                  aria-label="Clear product search query"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================
            SINGLE-FRAME DEEP INSPECTOR WORKSTATION LAYOUT
            LEFT (lg:col-span-8): Active Product (Wider & Compact Height)
            RIGHT (lg:col-span-4): Product Selector List (Matching Height)
           ======================================================== */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            
            {/* Left Column: Wide & Compact Product Inspector Workstation */}
            <div className="lg:col-span-8">
              <ActiveProductWorkstation
                activeProduct={activeInspectorProduct}
                onOpenModal={(p) => setModalProduct(p)}
              />
            </div>

            {/* Right Column: Compact Product Selector List */}
            <div className="lg:col-span-4">
              <ProductSelectorList
                products={filteredProducts}
                activeProduct={activeInspectorProduct}
                onSelectProduct={(p) => setActiveInspectorProduct(p)}
              />
            </div>

          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 max-w-md mx-auto my-8 shadow-sm">
            <Search size={32} className="mx-auto text-slate-300 mb-2" />
            <h4 className="text-sm font-bold text-slate-800 mb-1">No components found</h4>
            <p className="text-xs text-slate-500 mb-3">No parts match your current filter or search criteria.</p>
            <button
              onClick={() => { setSelectedCategory("ALL"); setSearchQuery(""); }}
              className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Modal Drawer */}
      <AnimatePresence>
        {modalProduct && (
          <ProductDetailModal
            product={modalProduct}
            onClose={() => setModalProduct(null)}
          />
        )}
      </AnimatePresence>

    </section>
  );
}
