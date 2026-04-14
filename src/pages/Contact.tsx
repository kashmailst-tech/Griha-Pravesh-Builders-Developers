import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-charcoal mb-12">
            Contact <span className="text-brand-orange italic">Us</span>
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-lg text-brand-gray mb-12">
                Have questions about our affordable homes in Govindpuram? 
                Reach out to us today. Hum aapki madad ke liye hamesha taiyaar hain!
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-brand-orange" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-charcoal mb-2">Call Us</h4>
                    <p className="text-brand-gray font-bold text-lg">+91 85956 68267</p>
                    <p className="text-brand-gray font-bold text-lg">+91 72108 15549</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MessageCircle className="text-brand-orange" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-charcoal mb-2">WhatsApp</h4>
                    <a 
                      href="https://wa.me/918595668267" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-orange font-bold hover:underline"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-orange" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-charcoal mb-2">Visit Our Office</h4>
                    <p className="text-brand-gray">
                      Plot No. 45, Govindpuram Main Road, <br />
                      Ghaziabad, Uttar Pradesh - 201013
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-brand-charcoal/5">
              <h3 className="text-3xl font-serif font-bold text-brand-charcoal mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-charcoal">Name</label>
                    <Input placeholder="Your Name" className="h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-charcoal">Phone Number</label>
                    <Input placeholder="Your Phone" className="h-12 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-charcoal">Message</label>
                  <Textarea placeholder="How can we help you?" className="min-h-[150px] rounded-xl" />
                </div>
                <Button className="w-full bg-brand-orange hover:bg-brand-charcoal text-white h-14 rounded-xl text-lg font-bold">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
