import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MapPin, Search, ExternalLink, ArrowRight, Building2, Home as HomeIcon, Wallet } from "lucide-react";
import GlassCard from "./GlassCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?auto=format&fit=crop&q=80&w=1920"
          alt="Indian Affordable Housing in Ghaziabad"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/70 via-brand-charcoal/50 to-brand-beige" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full text-xs font-bold mb-8 border border-white/20 uppercase tracking-[0.2em]"
          >
            <MapPin size={14} className="text-brand-orange" /> Govindpuram, Ghaziabad
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-8xl font-serif font-bold text-white leading-[1.1] mb-8 max-w-4xl"
          >
            Sasta aur Sundar <br />
            <span className="text-brand-orange italic">Apna Ghar</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl font-medium leading-relaxed"
          >
            Griha Pravesh Builders brings you affordable homes in Govindpuram. 
            Quality construction at prices that fit your budget. 
            <span className="block mt-2 text-brand-orange font-bold">Sabse Behtar, Sabse Sasta!</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Button className="btn-primary h-16 px-10 text-sm uppercase tracking-widest group">
              Explore Our Homes <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a 
              href="https://linktr.ee/GrihaPravesh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 h-16 px-10 text-sm uppercase tracking-widest rounded-full font-bold transition-all group flex items-center justify-center"
            >
              <ExternalLink className="mr-2 h-4 w-4" /> Linktree <span className="ml-1 opacity-50 group-hover:opacity-100 transition-opacity">Profiles</span>
            </a>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-5xl"
          >
            <GlassCard className="p-2 md:p-4 rounded-[2rem] border-white/40 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
                <div className="flex items-center gap-3 px-6 py-4 border-b md:border-b-0 md:border-r border-brand-charcoal/5">
                  <MapPin className="text-brand-orange" size={20} />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40">Location</p>
                    <select className="bg-transparent font-bold text-sm outline-none w-full appearance-none cursor-pointer">
                      <option>Govindpuram</option>
                      <option>Raj Nagar Ext.</option>
                      <option>Indirapuram</option>
                      <option>Vaishali</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 border-b md:border-b-0 md:border-r border-brand-charcoal/5">
                  <Wallet className="text-brand-orange" size={20} />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40">Budget</p>
                    <select className="bg-transparent font-bold text-sm outline-none w-full appearance-none cursor-pointer">
                      <option>₹30L - ₹50L</option>
                      <option>₹50L - ₹80L</option>
                      <option>₹80L - ₹1.5Cr</option>
                      <option>₹1.5Cr+</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 border-b md:border-b-0 md:border-r border-brand-charcoal/5">
                  <Building2 className="text-brand-orange" size={20} />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40">Type</p>
                    <select className="bg-transparent font-bold text-sm outline-none w-full appearance-none cursor-pointer">
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Independent House</option>
                      <option>Plots</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 border-b md:border-b-0 md:border-r border-brand-charcoal/5">
                  <HomeIcon className="text-brand-orange" size={20} />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40">BHK</p>
                    <select className="bg-transparent font-bold text-sm outline-none w-full appearance-none cursor-pointer">
                      <option>2 BHK</option>
                      <option>3 BHK</option>
                      <option>4 BHK</option>
                      <option>Penthouse</option>
                    </select>
                  </div>
                </div>
                <div className="p-1">
                  <Button className="w-full h-full bg-brand-charcoal hover:bg-brand-orange text-white rounded-[1.5rem] py-4 md:py-0 transition-all group">
                    <Search className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" /> 
                    <span className="md:hidden lg:inline">Search Now</span>
                  </Button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto">
          {[
            { label: "Happy Families", value: "1200+" },
            { label: "Completed Projects", value: "18+" },
            { label: "Years Experience", value: "12+" },
            { label: "Ongoing Projects", value: "05+" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gray mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
