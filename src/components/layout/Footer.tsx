import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="#" className="flex items-center gap-2 mb-6 group/logo">
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover/logo:scale-110">
                <Image src="/images/logo.png" alt="Logo" fill className="object-contain" unoptimized />
              </div>
              <div className="flex flex-col ml-1">
                <span className="font-bold text-xl text-white leading-none tracking-tight">NARAYANA</span>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-slate-400">
                  INDUSTRIES
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Engineering Reliability. Precision Manufacturing. Trusted Quality. A leader in precision engineering and heavy fabrication.
            </p>
            <div className="flex items-start gap-3 text-sm text-slate-400 mt-4">
              <MapPin className="text-brand-orange-start shrink-0 mt-1" size={18} />
              <p>SF. No: 173/3C, Vengur, Thiruverumbur,<br/>Tiruchirappalli, Tamil Nadu – 620013</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['About', 'Capabilities', 'Quality', 'Products', 'Customers', 'Team', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-sm hover:text-sky-400 transition-colors flex items-center gap-2">
                    <span className="text-sky-500">›</span> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Certifications */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              Certifications
            </h3>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex gap-3">
                <Award className="text-sky-500 shrink-0" size={20} />
                <div>
                  <p className="font-medium text-white">ISO 9001:2015</p>
                  <p className="text-xs mt-1">Quality Management System</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Award className="text-sky-500 shrink-0" size={20} />
                <div>
                  <p className="font-medium text-white">EN 15085-2:2020</p>
                  <p className="text-xs mt-1">Welding of Railway Vehicles</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Award className="text-sky-500 shrink-0" size={20} />
                <div>
                  <p className="font-medium text-white">ISO 3834-2</p>
                  <p className="text-xs mt-1">Quality Requirements for Welding</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-300"></span>
              Contact Us
            </h3>
            <div className="space-y-4 text-sm">
              <a href="tel:+919003950427" className="flex items-center gap-3 hover:text-sky-400 transition-colors">
                <Phone className="text-sky-500" size={18} />
                <span>+91 9003950427</span>
              </a>
              <a href="tel:+917904708300" className="flex items-center gap-3 hover:text-sky-400 transition-colors">
                <Phone className="text-sky-500" size={18} />
                <span>+91 7904708300</span>
              </a>
              <a href="mailto:operations@niorg.in" className="flex items-center gap-3 hover:text-sky-400 transition-colors">
                <Mail className="text-sky-500" size={18} />
                <span>operations@niorg.in</span>
              </a>
              
              <div className="pt-4 mt-4 border-t border-slate-800">
                <p className="text-xs text-slate-500 font-mono">GSTIN: 33AAWFN9252H1ZQ</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Narayana Industries. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
