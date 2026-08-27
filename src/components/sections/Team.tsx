"use client";

import { m } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  { name: "Mr. Sekar N", role: "Director / Partner", image: "/images/ProfileImages/nSekar.jpg" },
  { name: "Mr. Manimurugan M", role: "General Manager Operations", image: "/images/ProfileImages/Mr. Manimurugan R.jpg" },
  { name: "Mr. Gnanasekar K", role: "General Manager Planning", image: "/images/ProfileImages/Gnanasekar.jpg" },
  { name: "Mr. Kesavan", role: "Supervisor", image: "/images/ProfileImages/Kesavan.jpg" },
  { name: "Mr. Santhosh S", role: "R&D Head", image: "/images/ProfileImages/Santhosh.jpg" },
  { name: "Mrs. Priyal Santhosh", role: "GM Marketing", image: "/images/ProfileImages/Priyal.jpg" },
  { name: "Mrs. Rajeswari", role: "Accounting Manager", image: "/images/ProfileImages/Rajeswari.jpg" },
  { name: "Mrs. Parameshwari", role: "Staff Accountant", image: "/images/ProfileImages/Prameshwari.jpg" },
  { name: "Mrs. Devi", role: "Marketing Team Lead", image: "/images/ProfileImages/Devi.jpg" },
  { name: "QC Team", role: "Quality Control", image: "/images/ProfileImages/qc team.jpg", wide: true },
  { name: "Admin & HR Team", role: "Administration & Human Resources", image: "/images/ProfileImages/Admin & HR team.jpg", wide: true },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {teamMembers.map((member, index) => (
            <m.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className={`relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-[box-shadow,border-color] duration-500 bg-slate-100 ${
                member.wide 
                  ? "w-full sm:w-full lg:w-[calc(40%-1rem)]" 
                  : "w-[calc(50%-0.5rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(20%-1.6rem)]"
              }`}
            >
              {/* Large Portrait Image Placeholder or Actual Image */}
              <div className={`${member.wide ? "aspect-video" : "aspect-[3/4]"} w-full bg-slate-200 relative overflow-hidden flex flex-col items-center justify-center`}>
                {member.image ? (
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    priority={index < 4}
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <>
                    <User size={80} strokeWidth={1} className="text-slate-400 opacity-40 group-hover:scale-110 group-hover:text-sky-500 transition-[transform,color] duration-700 ease-out" />
                    <span className="text-xs font-semibold tracking-widest uppercase text-slate-400 mt-4 opacity-50 group-hover:opacity-100 group-hover:text-sky-600 transition-opacity duration-500">
                      Image Placeholder
                    </span>
                  </>
                )}
                
                {/* Gradient Overlay for Text Readability - Only at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900/90 to-transparent pointer-events-none" />
              </div>

              {/* Content Floating on Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 flex flex-col items-center text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-xs sm:text-lg lg:text-xl font-bold text-white mb-0.5 sm:mb-1">{member.name}</h3>
                <p className="text-[10px] sm:text-sm font-medium text-sky-400 mb-1 sm:mb-2 leading-tight">{member.role}</p>
              </div>
              
              {/* Accent Border Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-sky-500/30 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
