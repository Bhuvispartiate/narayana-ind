"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { clsx } from "clsx";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Quality", href: "#quality" },
  { name: "Products", href: "#products" },
  { name: "Customers", href: "#customers" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "group fixed top-0 w-full z-50",
        "transition-[background-color,box-shadow,padding] duration-400 ease-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center relative min-h-[48px] w-full">

          {/* ── Logo ── */}
          <Link
            href="#"
            className={clsx(
              "absolute top-1/2 -translate-y-1/2 flex items-center gap-2 z-10",
              "transition-[left,transform] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
              isScrolled
                ? "left-0 md:left-1/2 md:-translate-x-1/2 md:group-hover:-left-4 md:group-hover:-translate-x-4"
                : "left-0 translate-x-0"
            )}
          >
            {/* Logo image */}
            <div
              className="relative w-8 h-8 md:w-10 md:h-10 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            >
              <Image
                src="/images/logo.png"
                alt="Narayana Industries Logo"
                fill
                sizes="(max-width: 768px) 32px, 40px"
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Brand text block */}
            <div className="relative ml-1 select-none" style={{ width: "13rem", height: "2.5rem" }}>

              {/* Stacked state (not scrolled) */}
              <div
                className="absolute inset-0 flex flex-col items-start justify-center gap-0"
                style={{
                  transition: "opacity 350ms ease-out, transform 350ms ease-out",
                  opacity: isScrolled ? 0 : 1,
                  transform: isScrolled ? "translateY(-4px) scale(0.97)" : "translateY(0) scale(1)",
                  pointerEvents: isScrolled ? "none" : "auto",
                }}
              >
                <span className="font-bold text-lg leading-none tracking-tight text-slate-900">
                  NARAYANA
                </span>
                <span className="text-[9px] font-semibold tracking-[0.22em] text-slate-600 leading-none mt-0.5">
                  INDUSTRIES
                </span>
              </div>

              {/* Inline state (scrolled) */}
              <div
                className="absolute inset-0 flex flex-row items-center justify-start gap-1.5"
                style={{
                  transition: "opacity 350ms ease-out, transform 350ms ease-out",
                  opacity: isScrolled ? 1 : 0,
                  transform: isScrolled ? "translateY(0) scale(1)" : "translateY(4px) scale(0.97)",
                  pointerEvents: isScrolled ? "auto" : "none",
                }}
              >
                <span className="font-bold text-lg leading-none tracking-tight text-slate-900">
                  NARAYANA
                </span>
                <span className="text-lg font-semibold leading-none tracking-tight text-slate-700">
                  INDUSTRIES
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                style={{
                  transition: `opacity 400ms ease-out ${isScrolled ? index * 60 : 0}ms,
                               transform 400ms cubic-bezier(0.34,1.56,0.64,1) ${isScrolled ? index * 60 : 0}ms`,
                  opacity: isScrolled ? 0 : 1,
                  transform: isScrolled ? "translateX(10px)" : "translateX(0)",
                }}
                className={clsx(
                  "group-hover:!opacity-100 group-hover:!translate-x-0 group-hover:!pointer-events-auto",
                  isScrolled ? "pointer-events-none" : "pointer-events-auto"
                )}
              >
                <Link
                  href={link.href}
                  className="group/navlink relative py-1 text-sm font-semibold text-slate-800 transition-colors duration-200 hover:text-sky-600 inline-flex flex-col items-start"
                >
                  <span>{link.name}</span>
                  {/* Drawing Stroke Underline Beam (Left to Right) */}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2.5px] rounded-full bg-gradient-to-r from-sky-500 via-sky-400 to-indigo-600 origin-left scale-x-[0.001] opacity-0 group-hover/navlink:scale-x-100 group-hover/navlink:opacity-100 transition-[transform,opacity] duration-[800ms] ease-out pointer-events-none"
                  />
                  {/* Subtle Glow Trace */}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 right-0 h-[6px] rounded-full bg-sky-400/30 blur-xs origin-left scale-x-[0.001] opacity-0 group-hover/navlink:scale-x-100 group-hover/navlink:opacity-100 transition-[transform,opacity] duration-[800ms] ease-out pointer-events-none"
                  />
                </Link>
              </div>
            ))}

            {/* CTA Button */}
            <div
              style={{
                transition: `opacity 400ms ease-out ${isScrolled ? navLinks.length * 60 : 0}ms,
                             transform 400ms cubic-bezier(0.34,1.56,0.64,1) ${isScrolled ? navLinks.length * 60 : 0}ms`,
                opacity: isScrolled ? 0 : 1,
                transform: isScrolled ? "translateX(10px)" : "translateX(0)",
              }}
              className={clsx(
                "group-hover:!opacity-100 group-hover:!translate-x-0 group-hover:!pointer-events-auto",
                isScrolled ? "pointer-events-none" : "pointer-events-auto"
              )}
            >
              <a
                href="tel:+919003950427"
                className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm bg-slate-900 text-white shadow-sm transition-[background-color,box-shadow] duration-200 hover:bg-sky-500 hover:shadow-md"
              >
                <Phone size={16} />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-900 transition-colors duration-150 hover:bg-slate-100"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span
                style={{
                  display: "block",
                  transition: "opacity 200ms ease, transform 200ms ease",
                  opacity: isMobileMenuOpen ? 0 : 1,
                  transform: isMobileMenuOpen ? "rotate(90deg) scale(0.7)" : "rotate(0) scale(1)",
                  position: isMobileMenuOpen ? "absolute" : "relative",
                }}
              >
                <Menu size={24} />
              </span>
              <span
                style={{
                  display: "block",
                  transition: "opacity 200ms ease, transform 200ms ease",
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? "rotate(0) scale(1)" : "rotate(-90deg) scale(0.7)",
                  position: isMobileMenuOpen ? "relative" : "absolute",
                }}
              >
                <X size={24} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          transition: "max-height 400ms cubic-bezier(0.4,0,0.2,1), opacity 350ms ease",
          maxHeight: isMobileMenuOpen ? "500px" : "0px",
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
      >
        <div className="bg-white/95 backdrop-blur-sm shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col space-y-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-800 font-medium px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-sky-500 transition-colors duration-150"
              style={{
                transition: `opacity 300ms ease ${isMobileMenuOpen ? index * 40 : 0}ms,
                             transform 300ms ease ${isMobileMenuOpen ? index * 40 : 0}ms,
                             color 150ms ease`,
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-8px)",
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+919003950427"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 text-white rounded-md font-medium mt-2 hover:bg-sky-500 transition-colors duration-200"
            style={{
              transition: `opacity 300ms ease ${isMobileMenuOpen ? navLinks.length * 40 : 0}ms,
                           transform 300ms ease ${isMobileMenuOpen ? navLinks.length * 40 : 0}ms,
                           background-color 200ms ease`,
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-8px)",
            }}
          >
            <Phone size={18} />
            <span>+91 9003950427</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
