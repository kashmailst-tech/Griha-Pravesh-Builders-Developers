import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import GlassCard from "./GlassCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Rajesh & Meena Sharma",
    role: "First-time Home Buyers",
    text: "Griha Pravesh ne hamara sapna sach kar diya. The quality of construction and the transparency in the process was amazing. Govindpuram is the perfect location for our kids.",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Amit Verma",
    role: "Property Investor",
    text: "I have invested in multiple projects by Griha Pravesh. Their appreciation value is excellent and they always deliver on time. Highly recommended for investors.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "The Kapoor Family",
    role: "Residents since 2021",
    text: "Hamara naya ghar sirf ek building nahi, ek parivaar hai. The community living and parks are great for our elderly parents. Truly 'Apna Ghar, Apni Pehchaan'.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
  },
];

export default function Testimonials() {
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
            Happy Families
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-charcoal mb-6">
            Voices of <span className="text-brand-orange italic">Trust</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Hear from the families who have found their dream homes with Griha Pravesh Builders. 
            Their trust is our greatest achievement.
          </p>
        </div>

        <div className="px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((item, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <GlassCard className="h-full flex flex-col p-10 border-brand-charcoal/5 shadow-2xl rounded-[2.5rem] bg-white">
                    <div className="mb-8 text-brand-orange/20">
                      <Quote size={48} fill="currentColor" />
                    </div>
                    <p className="text-brand-gray italic mb-10 flex-grow leading-relaxed font-medium">
                      "{item.text}"
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t border-brand-charcoal/5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-2xl object-cover border-2 border-brand-orange/20"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-serif font-bold text-brand-charcoal">{item.name}</h4>
                        <p className="text-[10px] uppercase tracking-widest text-brand-gray font-bold">{item.role}</p>
                        <div className="flex gap-0.5 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} className="text-brand-orange fill-brand-orange" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-brand-charcoal text-brand-charcoal hover:bg-brand-orange hover:text-white hover:border-brand-orange w-12 h-12 rounded-full transition-all" />
            <CarouselNext className="hidden md:flex -right-12 border-brand-charcoal text-brand-charcoal hover:bg-brand-orange hover:text-white hover:border-brand-orange w-12 h-12 rounded-full transition-all" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
