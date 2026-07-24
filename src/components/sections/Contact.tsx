"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

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
        
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-1 bg-brand-orange-start rounded-full"></div>
          <span className="text-brand-navy font-bold uppercase tracking-wider text-sm">Contact Us</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12">
          Get in Touch for Project Inquiries
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white p-8 rounded-2xl shadow-md outline outline-1 outline-slate-200/60 flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col flex-grow space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</label>
                  <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue-light focus:border-brand-blue-light outline-none transition-all" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address *</label>
                  <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue-light focus:border-brand-blue-light outline-none transition-all" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number *</label>
                  <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue-light focus:border-brand-blue-light outline-none transition-all" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="company" className="text-sm font-medium text-slate-700">Company Name</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue-light focus:border-brand-blue-light outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-1 flex flex-col flex-grow">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Your Requirements *</label>
                <textarea required id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue-light focus:border-brand-blue-light outline-none transition-all resize-none flex-grow"></textarea>
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
          </motion.div>

          {/* Right: Company Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                      SF. No: 173/3C, Vengur, Thiruverumbur,<br/>
                      Tiruchirappalli, Tamil Nadu – 620013
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

            {/* Embedded Map Stub */}
            <div className="h-48 bg-slate-200 rounded-2xl overflow-hidden relative border border-slate-300 shadow-sm flex items-center justify-center">
              {/* Replace with actual iframe in production */}
              <div className="absolute inset-0 bg-[url('https://api.maptiler.com/maps/basic-v2/static/78.78,10.79,12/800x400.png?key=placeholder')] bg-cover bg-center opacity-50 grayscale"></div>
              <div className="z-10 bg-white px-4 py-2 rounded-md shadow-sm font-semibold text-brand-navy flex items-center gap-2">
                <MapPin size={18} className="text-brand-orange-start" />
                Thiruverumbur, Trichy
              </div>
            </div>
            
            {/* Certifications Trust Strip */}
            <div className="mt-6 flex flex-wrap gap-4 items-center justify-between p-4 bg-white rounded-xl outline outline-1 outline-slate-200/60 shadow-md">
              <div className="flex items-center gap-2">
                <Award className="text-brand-blue-light" size={20} />
                <span className="text-sm font-bold text-brand-dark">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-brand-blue-light" size={20} />
                <span className="text-sm font-bold text-brand-dark">EN 15085-2:2020</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-brand-blue-light" size={20} />
                <span className="text-sm font-bold text-brand-dark">ISO 3834-2</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
