import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import LocationSection from "@/components/LocationSection";
import Amenities from "@/components/Amenities";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { motion } from "motion/react";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Gallery />
        <LocationSection />
        <Amenities />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </motion.div>
  );
}
