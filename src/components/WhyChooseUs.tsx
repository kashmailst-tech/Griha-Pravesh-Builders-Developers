import { motion } from "motion/react";
import { ShieldCheck, Award, Users, Clock, Sparkles, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="text-brand-orange" size={32} />,
    title: "Sasta aur Tikau",
    description: "Quality construction at prices that fit your budget. We believe in affordable housing for all."
  },
  {
    icon: <Award className="text-brand-orange" size={32} />,
    title: "Best in Govindpuram",
    description: "We are the leading builders in Govindpuram, Ghaziabad, known for our commitment to middle-class families."
  },
  {
    icon: <Sparkles className="text-brand-orange" size={32} />,
    title: "Smart Designs",
    description: "Efficient use of space to ensure you get the most out of your home, without the luxury price tag."
  },
  {
    icon: <Clock className="text-brand-orange" size={32} />,
    title: "On-Time Possession",
    description: "We understand the value of your hard-earned money. Get your keys exactly when promised."
  },
  {
    icon: <Users className="text-brand-orange" size={32} />,
    title: "Apna Ghar Community",
    description: "Join over 1200+ happy families who have found their dream home with Griha Pravesh."
  },
  {
    icon: <HeartHandshake className="text-brand-orange" size={32} />,
    title: "No Hidden Costs",
    description: "Transparent pricing and clear documentation. What you see is what you pay."
  }
];

export default function WhyChooseUs() {
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
            Why Griha Pravesh
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-charcoal mb-6">
            Building Trust, <span className="text-brand-orange italic">Delivering Dreams</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            We don't just build houses; we create spaces where memories are made and legacies are born.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-brand-charcoal/5 border border-brand-charcoal/5 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-brand-beige rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-4">{feature.title}</h3>
              <p className="text-brand-gray leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
