import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, MessageCircle, Home, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PopupCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  const whatsappUrl = "https://wa.me/918595668267?text=Hello!%20I%20am%20interested%20in%20affordable%20homes%20in%20Govindpuram.%20Please%20share%20more%20details.";
  const callUrl = "tel:+918595668267";

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-brand-charcoal/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-brand-beige rounded-[2.5rem] shadow-2xl overflow-hidden border border-brand-orange/20"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-6 right-6 p-2 bg-brand-charcoal/5 hover:bg-brand-orange hover:text-white rounded-full transition-all z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-10 text-center">
              <div className="w-20 h-20 bg-brand-orange/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Sparkles className="text-brand-orange" size={40} />
              </div>

              <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal mb-4">
                Apna Ghar, <br />
                <span className="text-brand-orange italic">Ab Door Nahi!</span>
              </h3>
              
              <p className="text-brand-gray mb-8 leading-relaxed font-medium">
                Govindpuram mein saste aur sundar gharon ki booking shuru ho chuki hai. 
                Aaj hi humse baat karein aur apna sapna sach karein!
              </p>

              <div className="space-y-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white h-16 rounded-2xl text-lg font-bold hover:scale-[1.05] transition-transform shadow-lg shadow-green-500/20"
                >
                  <MessageCircle size={24} /> Chat on WhatsApp
                </a>

                <a
                  href={callUrl}
                  className="flex items-center justify-center gap-3 w-full bg-brand-charcoal text-white h-16 rounded-2xl text-lg font-bold hover:scale-[1.05] transition-transform shadow-lg shadow-brand-charcoal/20"
                >
                  Call Now: +91 85956 68267
                </a>
                
                <div className="flex items-center justify-center gap-2 text-brand-gray text-[10px] font-bold uppercase tracking-[0.2em] pt-2">
                  <Home size={12} className="text-brand-orange" /> Limited Units Available in Govindpuram
                </div>
              </div>
            </div>

            {/* Bottom Decorative Bar */}
            <div className="h-2 bg-brand-orange w-full" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
