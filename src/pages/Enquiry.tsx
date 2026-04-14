import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function EnquiryPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-charcoal mb-6">
              Property <span className="text-brand-orange italic">Enquiry</span>
            </h1>
            <p className="text-lg text-brand-gray">
              Interested in a specific property? Fill out the form below and our team 
              will get back to you with all the details.
            </p>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-brand-charcoal/5">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-charcoal">Full Name</label>
                  <Input placeholder="Enter your name" className="h-14 rounded-2xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-charcoal">Phone Number</label>
                  <Input placeholder="Enter your phone" className="h-14 rounded-2xl" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-charcoal">Property Type</label>
                  <Select>
                    <SelectTrigger className="h-14 rounded-2xl">
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Flat</SelectItem>
                      <SelectItem value="commercial">Commercial Space</SelectItem>
                      <SelectItem value="plot">Plot / Land</SelectItem>
                      <SelectItem value="house">Independent House</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-charcoal">Budget Range</label>
                  <Select>
                    <SelectTrigger className="h-14 rounded-2xl">
                      <SelectValue placeholder="Select Budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20-30">₹20L - ₹30L</SelectItem>
                      <SelectItem value="30-50">₹30L - ₹50L</SelectItem>
                      <SelectItem value="50-80">₹50L - ₹80L</SelectItem>
                      <SelectItem value="80+">₹80L+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-charcoal">Preferred Location in Govindpuram</label>
                <Input placeholder="e.g. Near Market, Near Park" className="h-14 rounded-2xl" />
              </div>

              <Button className="w-full bg-brand-orange hover:bg-brand-charcoal text-white h-16 rounded-2xl text-xl font-bold transition-all">
                Submit Enquiry
              </Button>
              
              <p className="text-center text-sm text-brand-gray">
                Or call us directly at <span className="text-brand-orange font-bold">+91 85956 68267</span>
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
