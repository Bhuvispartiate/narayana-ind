import Link from "next/link";
import { ArrowRight, Settings2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden text-neutral-200 selection:bg-orange-500/30">
      {/* Background industrial pattern/gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/10 to-transparent"></div>

      <div className="z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-orange-500 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700 rounded-full"></div>
          <div className="relative bg-neutral-900 border border-white/10 p-6 rounded-2xl shadow-2xl">
            <Settings2 className="w-16 h-16 text-orange-500 animate-[spin_8s_linear_infinite]" strokeWidth={1.5} />
          </div>
        </div>
        
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 font-barlow">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-jakarta tracking-tight text-white/90">
          Component Not Found
        </h2>
        
        <p className="text-neutral-400 max-w-lg mb-10 text-lg md:text-xl font-manrope leading-relaxed">
          The page you are looking for has been moved, removed, renamed, or might never have existed. Let's get you back to the production line.
        </p>
        
        <Link 
          href="/" 
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-neutral-950 rounded-full font-semibold font-jakarta transition-all hover:bg-neutral-200 hover:scale-105 active:scale-95"
        >
          <span>Return Home</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 rounded-full ring-2 ring-white/20 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
        </Link>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-white/10"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-white/10"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-white/10"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-white/10"></div>
    </div>
  );
}
