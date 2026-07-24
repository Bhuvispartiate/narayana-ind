"use client";

import { motion } from "framer-motion";
import { Phone, User } from "lucide-react";

export default function Team() {
  const teamMembers = [
    { name: "Mr. Sekar N", role: "Partner", phone: "+919003950427", displayPhone: "90039 50427" },
    { name: "Mr. Manimurugan R", role: "GM", phone: "+919003950425", displayPhone: "90039 50425" },
    { name: "Mr. Gnanasekaran K", role: "GM", phone: "+919965522554", displayPhone: "99655 22554" },
    { name: "Mr. Santhosh S", role: "Techno Commercial Engineer", phone: "+917904708300", displayPhone: "79047 08300" },
  ];

  return (
    <section id="team" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-brand-orange-start rounded-full"></div>
            <span className="text-brand-navy font-bold uppercase tracking-wider text-sm">Key Contacts</span>
            <div className="w-8 h-1 bg-brand-orange-start rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Our Leadership Team
          </h2>
          <p className="text-lg text-slate-600">
            Get in touch with our management and commercial engineering experts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-light rounded-2xl p-6 text-center outline outline-1 outline-slate-200/60 shadow-md hover:shadow-xl hover:outline-brand-blue-light/30 transition-all duration-300 group"
            >
              <div className="w-24 h-24 mx-auto bg-slate-200 rounded-full mb-6 flex items-center justify-center overflow-hidden border-4 border-white shadow-sm relative group-hover:border-sky-500 transition-colors">
                <User size={40} className="text-slate-400 group-hover:text-brand-orange-start transition-colors" />
              </div>
              
              <h3 className="text-lg font-bold text-brand-dark mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-brand-blue-light mb-6">{member.role}</p>
              
              <a 
                href={`tel:${member.phone}`}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-white text-slate-700 hover:text-brand-navy hover:bg-brand-blue-light/10 border border-slate-200 rounded-lg text-sm font-semibold transition-colors"
              >
                <Phone size={16} className="text-brand-navy" />
                {member.displayPhone}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
