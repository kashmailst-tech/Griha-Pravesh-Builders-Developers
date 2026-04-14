import React from "react";
import { motion } from "motion/react";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-brand-charcoal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
            Ready to find your <span className="text-brand-orange italic">Dream Home?</span>
          </h2>
          <p className="text-xl text-white/70 mb-12 leading-relaxed">
            Govindpuram mein saste aur sundar gharon ka sapna ab hoga poora. 
            Join hundreds of happy families who found their perfect home with Griha Pravesh.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/918595668267"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-all w-full sm:w-auto shadow-xl shadow-green-500/20"
            >
              <MessageCircle size={24} /> WhatsApp Us
            </a>
            
            <a
              href="tel:+918595668267"
              className="flex items-center justify-center gap-3 bg-brand-orange text-white px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-all w-full sm:w-auto shadow-xl shadow-brand-orange/20"
            >
              <Phone size={24} /> Call Now
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-white/40 text-sm font-bold uppercase tracking-[0.3em]">
            <span className="flex items-center gap-2"><ArrowRight size={16} className="text-brand-orange" /> Trusted Builders</span>
            <span className="flex items-center gap-2"><ArrowRight size={16} className="text-brand-orange" /> Quality Construction</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
