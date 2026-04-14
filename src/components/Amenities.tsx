import { motion } from "motion/react";
import { Trees, ShieldCheck, Car, Droplets, Users, Zap, Landmark } from "lucide-react";
import GlassCard from "./GlassCard";
import { Button } from "@/components/ui/button";

const amenities = [
  { icon: <Trees size={32} />, title: "Green Parks", desc: "Lush green community parks and jogging tracks for a healthy lifestyle." },
  { icon: <ShieldCheck size={32} />, title: "24/7 Security", desc: "Gated community with CCTV surveillance and professional security staff." },
  { icon: <Car size={32} />, title: "Ample Parking", desc: "Dedicated covered and open parking spaces for residents and guests." },
  { icon: <Droplets size={32} />, title: "Water Supply", desc: "Uninterrupted 24/7 water supply with advanced filtration systems." },
  { icon: <Landmark size={32} />, title: "मंदिर (Temple)", desc: "Beautifully designed community temple within the society premises." },
  { icon: <Users size={32} />, title: "Clubhouse", desc: "Modern community hall for celebrations and social gatherings." },
  { icon: <Zap size={32} />, title: "Power Backup", desc: "24/7 power backup for common areas and essential services." },
];

export default function Amenities() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-charcoal/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-brand-orange/10 text-brand-orange px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4"
          >
            World-Class Amenities
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-charcoal mb-6">
            Zaroorat ki <span className="text-brand-orange italic">Saari Suvidhayein</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Experience a life of comfort and convenience with all essential amenities 
            designed for your family's daily needs in Govindpuram.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <GlassCard className="h-full flex flex-col items-center text-center p-10 border-brand-charcoal/5 hover:bg-brand-orange/5 transition-all duration-500 group rounded-[2.5rem]">
                <div className="w-16 h-16 bg-brand-beige rounded-2xl flex items-center justify-center text-brand-orange mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h4 className="text-xl font-serif font-bold text-brand-charcoal mb-4">{item.title}</h4>
                <p className="text-sm text-brand-gray leading-relaxed">{item.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
          
          {/* Special CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <GlassCard className="h-full flex flex-col items-center justify-center text-center p-10 bg-brand-charcoal text-white border-none shadow-2xl rounded-[2.5rem]">
              <h4 className="text-2xl font-serif font-bold mb-6">Experience It Yourself</h4>
              <p className="text-white/70 mb-8 text-sm leading-relaxed">Schedule a guided tour of our projects and see the lifestyle we offer.</p>
              <a 
                href="https://forms.gle/Sx6WgWWhPxjr8QMs5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-orange hover:bg-white hover:text-brand-orange text-white font-bold px-10 py-6 rounded-full uppercase tracking-widest text-[10px] transition-all flex items-center justify-center"
              >
                Book Site Visit
              </a>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
