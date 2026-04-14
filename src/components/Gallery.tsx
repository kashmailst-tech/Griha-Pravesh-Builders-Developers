import { motion } from "motion/react";
import GlassCard from "./GlassCard";

const images = [
  { src: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=800", title: "Indian Residential Street", category: "Exterior" },
  { src: "https://images.unsplash.com/photo-1623298665804-7424d1103ef1?auto=format&fit=crop&q=80&w=800", title: "Indian Home Interior", category: "Interior" },
  { src: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&q=80&w=800", title: "Ghaziabad Apartment", category: "Exterior" },
  { src: "https://images.unsplash.com/photo-1613575831056-0acd5da8f085?auto=format&fit=crop&q=80&w=800", title: "Affordable Flat", category: "Interior" },
  { src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=800", title: "Modern Indian House", category: "Exterior" },
  { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", title: "Community Living", category: "Landscape" },
];

export default function Gallery() {
  return (
    <section className="section-padding bg-brand-beige/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-brand-orange/10 text-brand-orange px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4"
          >
            Visual Journey
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-charcoal mb-6">
            Our <span className="text-brand-orange italic">Gallery</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Take a look at our completed projects and witness the quality and craftsmanship 
            that goes into every Griha Pravesh home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] aspect-[4/5]"
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-brand-orange text-[10px] font-bold uppercase tracking-widest mb-2">{image.category}</span>
                <h4 className="text-white text-xl font-serif font-bold">{image.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
