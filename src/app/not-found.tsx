import Link from "next/link";
import { ArrowRight, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden text-slate-900">
      {/* Background patterns and glows */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(46,58,158,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Abstract blurred shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#4A6CF7]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#F7931E]/10 rounded-full blur-[120px]"></div>

      <div className="z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7931E] to-[#FDC830] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 rounded-full"></div>
          <div className="relative bg-white border border-slate-100 p-6 rounded-2xl shadow-xl shadow-slate-200/50">
            <SearchX className="w-16 h-16 text-[#2E3A9E] transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
          </div>
        </div>
        
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 text-[#2E3A9E] font-barlow relative">
          404
          {/* Subtle gradient overlay on the text */}
          <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-br from-[#2E3A9E] to-[#4A6CF7] opacity-80 mix-blend-overlay">404</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-6 font-jakarta tracking-tight text-slate-800">
          Page Not Found
        </h2>
        
        <p className="text-slate-600 max-w-lg mb-10 text-lg md:text-xl font-manrope leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
        </p>
        
        <Link 
          href="/" 
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2E3A9E] text-white rounded-full font-semibold font-jakarta transition-all hover:bg-[#1a236a] hover:shadow-lg hover:shadow-[#2E3A9E]/30 active:scale-95"
        >
          <span>Return to Homepage</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 rounded-full ring-2 ring-[#2E3A9E]/50 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
        </Link>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-[#2E3A9E] via-[#4A6CF7] to-[#F7931E]"></div>
      
      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#2E3A9E]/10 rounded-tl-xl"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#2E3A9E]/10 rounded-tr-xl"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#2E3A9E]/10 rounded-bl-xl"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#2E3A9E]/10 rounded-br-xl"></div>
    </div>
  );
}
