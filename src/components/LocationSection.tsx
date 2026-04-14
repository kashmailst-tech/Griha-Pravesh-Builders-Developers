import { motion } from "motion/react";
import { MapPin, School, Hospital, Train, ShoppingBag, Trees } from "lucide-react";
import GlassCard from "./GlassCard";

export default function LocationSection() {
  const landmarks = [
    { icon: <School className="text-brand-orange" />, title: "Schools", desc: "Top CBSE schools within 2km" },
    { icon: <Hospital className="text-brand-orange" />, title: "Hospitals", desc: "Multi-specialty care nearby" },
    { icon: <Train className="text-brand-orange" />, title: "Connectivity", desc: "15 mins to Metro & Highway" },
    { icon: <ShoppingBag className="text-brand-orange" />, title: "Markets", desc: "Local markets & malls in vicinity" },
    { icon: <Trees className="text-brand-orange" />, title: "Parks", desc: "Green belts & community parks" },
  ];

  return (
    <section className="section-padding bg-brand-beige/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-brand-orange/10 text-brand-orange px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4"
            >
              Prime Location
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-charcoal mb-8">
              Govindpuram – <br />
              <span className="text-brand-orange italic">Sabse Behtar Location</span>
            </h2>
            <p className="text-lg text-brand-gray mb-12 leading-relaxed">
              Experience the perfect blend of peaceful living and urban connectivity. 
              Govindpuram is the best choice for middle-class families seeking 
              affordable homes with all basic facilities nearby.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {landmarks.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="p-4 bg-white rounded-2xl shadow-lg shadow-brand-charcoal/5 border border-brand-charcoal/5 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-charcoal mb-1">{item.title}</h4>
                    <p className="text-sm text-brand-gray leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <GlassCard className="p-2 border-white/60 shadow-2xl overflow-hidden aspect-video lg:aspect-square rounded-[3rem]">
              {/* Mock Map Representation */}
              <div className="w-full h-full bg-[#f0ede5] relative rounded-[2.5rem] overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#F58220 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
                
                {/* Roads */}
                <div className="absolute top-1/2 left-0 w-full h-4 bg-white shadow-sm -rotate-12" />
                <div className="absolute top-0 left-1/3 w-4 h-full bg-white shadow-sm rotate-6" />
                
                {/* Markers */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <div className="bg-brand-orange p-4 rounded-full shadow-2xl border-4 border-white">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-brand-charcoal text-white px-4 py-2 rounded-xl shadow-xl whitespace-nowrap font-bold text-xs">
                    Griha Pravesh Projects
                  </div>
                </motion.div>

                {/* Nearby Markers */}
                <div className="absolute top-1/4 left-1/4 bg-brand-orange/20 p-2 rounded-full border border-brand-orange/40">
                  <School size={16} className="text-brand-charcoal" />
                </div>
                <div className="absolute bottom-1/4 right-1/3 bg-brand-orange/20 p-2 rounded-full border border-brand-orange/40">
                  <Hospital size={16} className="text-brand-charcoal" />
                </div>
                <div className="absolute top-2/3 right-1/4 bg-brand-orange/20 p-2 rounded-full border border-brand-orange/40">
                  <Train size={16} className="text-brand-charcoal" />
                </div>
              </div>
            </GlassCard>
            
            {/* Floating Info Card */}
            <div className="absolute -bottom-10 -left-10 hidden md:block">
              <GlassCard className="p-8 border-white/40 shadow-2xl max-w-xs rounded-[2rem]">
                <p className="text-brand-charcoal font-bold mb-4 uppercase tracking-widest text-[10px]">Connectivity Highlights</p>
                <ul className="space-y-4 text-sm text-brand-gray font-medium">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-orange rounded-full" />
                    5 Mins to NH-24 Highway
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-orange rounded-full" />
                    10 Mins to Ghaziabad Rly Stn
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-orange rounded-full" />
                    15 Mins to Shaheed Sthal Metro
                  </li>
                </ul>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
