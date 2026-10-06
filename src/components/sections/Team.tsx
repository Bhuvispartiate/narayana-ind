"use client";

import { m } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Mr. Narayana S",
    role: "Founder",
    image: "/images/ProfileImages/Founder Narayana S.jpg",
  },
  {
    name: "Mr. Sekar N",
    role: "Director / Partner",
    image: "/images/ProfileImages/nSekar.jpg",
  },
  {
    name: "Mr. Manimurugan M",
    role: "General Manager Operations",
    image: "/images/ProfileImages/Mr. Manimurugan R.jpg",
  },
  {
    name: "Mr. Gnanasekar K",
    role: "General Manager Planning",
    image: "/images/ProfileImages/Gnanasekar.jpg",
  },
  {
    name: "Mr. Santhosh S",
    role: "R&D Head",
    image: "/images/ProfileImages/Santhosh.jpg",
  },
  {
    name: "Mrs. Priyal Santhosh",
    role: "GM Marketing",
    image: "/images/ProfileImages/Priyal.jpg",
  },
  {
    name: "Mr. Kesavan",
    role: "Supervisor",
    image: "/images/ProfileImages/Kesavan.jpg",
  },
  {
    name: "QC Team",
    role: "Quality Control",
    image: "/images/ProfileImages/qc team.jpg",
  },
  {
    name: "Admin & HR Team",
    role: "Administration & Human Resources",
    image: "/images/ProfileImages/Admin & HR team.jpg",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            <span className="text-[10px] font-semibold text-slate-700 tracking-wide uppercase">Key Contacts</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
            Our Leadership <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-lg text-slate-600">
            Get in touch with our management and commercial engineering experts.
          </p>
        </div>

        {/* Uniform Symmetrical 3x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <m.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Photo Container - Exact 4:3 Aspect Ratio for Landscape Photography */}
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    priority={index < 3}
                    className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400">
                    <User size={64} strokeWidth={1.2} />
                    <span className="text-xs font-semibold uppercase tracking-wider mt-2">Member Photo</span>
                  </div>
                )}
              </div>

              {/* Gradient Card Body (Blur to White - Top to Bottom) */}
              <div className="-mt-8 relative z-10 p-5 sm:p-6 text-center flex flex-col items-center justify-center bg-gradient-to-b from-white/50 via-white/90 to-white backdrop-blur-md flex-1 border-t border-white/40">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-sky-600 mt-1">
                  {member.role}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
