import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-charcoal mb-12">
            About <span className="text-brand-orange italic">Griha Pravesh</span>
          </h1>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-brand-gray leading-relaxed mb-6">
                Griha Pravesh Builders & Developers is a trusted name in Govindpuram, Ghaziabad. 
                For over 12 years, we have been dedicated to providing affordable housing solutions 
                to middle-class families.
              </p>
              <p className="text-lg text-brand-gray leading-relaxed mb-6">
                Our mission is simple: <span className="text-brand-orange font-bold">"Apna Ghar, Sabka Sapna"</span>. 
                We believe that everyone deserves a quality home without breaking the bank. 
                That's why we focus on cost-effective construction without compromising on safety or essential amenities.
              </p>
              <div className="bg-brand-orange/10 p-8 rounded-3xl border border-brand-orange/20">
                <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-4">Our Vision</h3>
                <p className="text-brand-gray">
                  To be the most trusted provider of affordable homes in Ghaziabad, 
                  helping thousands of families move into their own homes with pride.
                </p>
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?auto=format&fit=crop&q=80&w=800" 
                alt="Our Construction Excellence" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
