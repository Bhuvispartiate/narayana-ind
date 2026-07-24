"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { clsx } from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Quality", href: "#quality" },
    { name: "Products", href: "#products" },
    { name: "Customers", href: "#customers" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={clsx(
        "group fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white text-slate-900 shadow-md py-3" : "bg-transparent text-slate-900 py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center relative min-h-[48px] w-full">
          {/* Logo */}
          <Link 
            href="#" 
            className={clsx(
              "absolute left-0 flex items-center gap-2 group/logo transition-all duration-500 ease-out z-10",
              isScrolled ? "md:left-1/2 md:-translate-x-1/2 md:group-hover:left-0 md:group-hover:translate-x-0" : ""
            )}
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover/logo:scale-110">
              <Image src="/images/logo.png" alt="Logo" fill className="object-contain" unoptimized />
            </div>
            <div className={clsx(
              "flex ml-1 transition-all duration-300",
              isScrolled ? "flex-row items-baseline gap-1.5" : "flex-col items-start gap-0"
            )}>
              <span className="font-bold text-lg leading-none tracking-tight">NARAYANA</span>
              <span className={clsx(
                "transition-all duration-300",
                isScrolled 
                  ? "text-lg font-semibold leading-none tracking-tight text-slate-700" 
                  : "text-[10px] font-semibold tracking-[0.2em] text-slate-600"
              )}>
                INDUSTRIES
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <div 
                key={link.name}
                className={clsx(
                  "transition-all duration-500 ease-out",
                  isScrolled ? "opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none group-hover:pointer-events-auto" : "opacity-100 translate-x-0 pointer-events-auto"
                )}
                style={{ transitionDelay: isScrolled ? `${index * 75}ms` : '0ms' }}
              >
                <Link
                  href={link.href}
                  className={clsx(
                    "text-sm font-medium transition-colors hover:text-sky-500",
                    isScrolled ? "text-slate-700" : "text-slate-900 font-semibold"
                  )}
                >
                  {link.name}
                </Link>
              </div>
            ))}
            
            <div
              className={clsx(
                "transition-all duration-500 ease-out",
                isScrolled ? "opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none group-hover:pointer-events-auto" : "opacity-100 translate-x-0 pointer-events-auto"
              )}
              style={{ transitionDelay: isScrolled ? `${navLinks.length * 75}ms` : '0ms' }}
            >
              <a
                href="tel:+919003950427"
                className={clsx(
                  "flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all shadow-sm hover:shadow-md",
                  isScrolled 
                    ? "bg-slate-900 text-white hover:bg-sky-500" 
                    : "bg-slate-900 text-white hover:bg-sky-500 shadow-sm"
                )}
              >
                <Phone size={16} />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={clsx(
                "p-2 rounded-md text-slate-900"
              )}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-800 font-medium px-2 py-1 hover:text-brand-blue-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+919003950427"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-brand-navy text-white rounded-md font-medium mt-4"
          >
            <Phone size={18} />
            <span>+91 9003950427</span>
          </a>
        </div>
      )}
    </nav>
  );
}
