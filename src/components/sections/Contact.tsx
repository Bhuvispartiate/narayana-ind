"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail, Award } from "lucide-react";
import { m } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate server action
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-surface-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          <span className="text-[10px] font-semibold text-slate-700 tracking-wide uppercase">Contact Us</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Get in Touch for <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">Project Inquiries</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Contact Form */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white p-8 rounded-2xl shadow-md outline outline-1 outline-slate-200/60 flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col flex-grow space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</label>
                  <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue-light focus:border-brand-blue-light outline-none transition-[border-color,box-shadow]" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address *</label>
                  <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue-light focus:border-brand-blue-light outline-none transition-[border-color,box-shadow]" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number *</label>
                  <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue-light focus:border-brand-blue-light outline-none transition-[border-color,box-shadow]" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="company" className="text-sm font-medium text-slate-700">Company Name</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue-light focus:border-brand-blue-light outline-none transition-[border-color,box-shadow]" />
                </div>
              </div>

              <div className="space-y-1 flex flex-col flex-grow">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Your Requirements *</label>
                <textarea required id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue-light focus:border-brand-blue-light outline-none transition-[border-color,box-shadow] resize-none flex-grow"></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-navy hover:bg-brand-blue-light text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
              
              {submitStatus === "success" && (
                <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-200">
                  Thank you! Your message has been sent successfully. We will get back to you shortly.
                </div>
              )}
            </form>
          </m.div>

          {/* Right: Company Details */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col h-full"
          >
            <div className="bg-brand-navy text-white p-8 rounded-2xl shadow-lg mb-6 flex-grow">
              <h3 className="text-2xl font-bold mb-8">Corporate Office & Works</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-orange-start" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200 mb-1">Address</h4>
                    <p className="text-slate-300 leading-relaxed">
                      SF No.173/3C, Vengur, Kallanai Road,<br/>
                      Thiruverumbur, Tirchy, Tamil Nadu 620013
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-brand-orange-start" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200 mb-1">Phone</h4>
                    <a href="tel:+919003950427" className="block text-slate-300 hover:text-white transition-colors">+91 90039 50427</a>
                    <a href="tel:+917904708300" className="block text-slate-300 hover:text-white transition-colors">+91 79047 08300</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-brand-orange-start" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200 mb-1">Email</h4>
                    <a href="mailto:operations@niorg.in" className="text-slate-300 hover:text-white transition-colors">operations@niorg.in</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="h-56 rounded-2xl overflow-hidden relative border border-slate-300 shadow-sm">
              <iframe
                title="Narayana Industries Google Maps Location"
                src="https://maps.google.com/maps?q=10.813054942642852,78.76756481888016&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                sandbox="allow-scripts allow-popups"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            {/* Certifications Trust Strip */}
            <div className="mt-6 flex flex-wrap gap-4 items-center justify-between p-4 bg-white rounded-xl outline outline-1 outline-slate-200/60 shadow-md">
              <div className="flex items-center gap-2">
                <Award className="text-brand-blue-light" size={20} />
                <span className="text-sm font-bold text-brand-dark">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-brand-blue-light" size={20} />
                <span className="text-sm font-bold text-brand-dark">EN 15085-2:2020+A1:2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-brand-blue-light" size={20} />
                <span className="text-sm font-bold text-brand-dark">ISO 3834-2:2021</span>
              </div>
            </div>
          </m.div>

        </div>
      </div>
    </section>
  );
}
