"use client";

import Image from "next/image";

type Brand = { name: string; image: string };
type ClonedBrand = Brand & { uniqueKey: string };

const allBrands: Brand[] = [
  { name: "TVS Air Springs", image: "/images/Brands-Couresel/1.png" },
  { name: "BHEL", image: "/images/Brands-Couresel/2.jpg" },
  { name: "BGR Energy", image: "/images/Brands-Couresel/3.png" },
  { name: "Reliance Power", image: "/images/Brands-Couresel/4.png" },
  { name: "Switch", image: "/images/Brands-Couresel/5.png" },
  { name: "NUPPL", image: "/images/Brands-Couresel/6.jpg" },
  { name: "Global TVS", image: "/images/Brands-Couresel/7.jpg" },
  { name: "Prakash SMK", image: "/images/Brands-Couresel/8.jpg" },
  { name: "Tralcka", image: "/images/Brands-Couresel/9.webp" },
  { name: "Ideal Boiler Spares", image: "/images/Brands-Couresel/10.png" },
  { name: "GEECO", image: "/images/Brands-Couresel/11.png" },
  { name: "RIBO", image: "/images/Brands-Couresel/12.webp" }
];

// Duplicate for infinite scroll effect with stable unique keys
const createMarquee = (arr: Brand[], prefix: string): ClonedBrand[] => {
  return [0, 1, 2, 3, 4, 5].flatMap((round) =>
    arr.map((brand) => ({
      ...brand,
      uniqueKey: `${prefix}-${round}-${brand.name}`
    }))
  );
};

// BrandCard defined at top-level to prevent recreation on re-renders
function BrandCard({ customer }: { customer: Brand }) {
  return (
    <div className="mx-4 md:mx-6 px-6 py-4 flex items-center justify-center min-w-[200px] h-[100px] transition-[transform,opacity] duration-300 cursor-default relative overflow-hidden group">
      <Image
        src={customer.image}
        alt={customer.name}
        fill
        sizes="200px"
        className="object-contain p-4"
        unoptimized
      />
    </div>
  );
}

// Precomputed marquee tracks for optimal rendering performance without cascading renders
const track1 = allBrands.slice(0, 4);
const track2 = allBrands.slice(4, 8);
const track3 = allBrands.slice(8, 12);

const items1 = createMarquee(track1, "t1");
const items2 = createMarquee(track2, "t2");
const items3 = createMarquee(track3, "t3");

export default function Customers() {

  return (
    <section id="customers" className="py-20 bg-white overflow-hidden border-y border-gray-200 relative">
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-3">
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          <span className="text-[10px] font-semibold text-slate-700 tracking-wide uppercase">Our Clients</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
          Trusted by <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">Industry Leaders</span>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col gap-6 z-10 py-2">
        {/* Left/Right fading edges matching the light background */}
        <div className="absolute left-0 top-0 w-24 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-24 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Track 1: Right to Left */}
        <div className="flex w-max animate-marquee-left pause-marquee-hover whitespace-nowrap">
          {items1.map((customer) => (
            <BrandCard key={customer.uniqueKey} customer={customer} />
          ))}
        </div>

        {/* Track 2: Left to Right */}
        <div className="flex w-max animate-marquee-right pause-marquee-hover whitespace-nowrap">
          {items2.map((customer) => (
            <BrandCard key={customer.uniqueKey} customer={customer} />
          ))}
        </div>

        {/* Track 3: Right to Left */}
        <div className="flex w-max animate-marquee-left-fast pause-marquee-hover whitespace-nowrap">
          {items3.map((customer) => (
            <BrandCard key={customer.uniqueKey} customer={customer} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 6)); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(calc(-100% / 6)); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
        }
        .animate-marquee-left-fast {
          animation: marquee-left 25s linear infinite;
        }
        .pause-marquee-hover:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
