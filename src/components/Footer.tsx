import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin, MessageCircle, ExternalLink, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const socialLinks = [
    { icon: <MessageCircle size={20} />, url: "https://wa.me/918595668267", color: "hover:bg-green-500" },
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/grihapraveshgzb/", color: "hover:bg-pink-500" },
    { icon: <Facebook size={20} />, url: "https://www.facebook.com/GrihaPraveshBuildersandDevelopers/", color: "hover:bg-blue-600" },
    { icon: <ExternalLink size={20} />, url: "https://linktr.ee/GrihaPravesh", color: "hover:bg-brand-orange" },
  ];

  return (
    <footer className="bg-brand-charcoal text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group mb-8">
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-white leading-none tracking-tight">Griha Pravesh</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-orange font-bold">Builders & Developers</span>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed mb-8 text-sm">
              Providing affordable and quality homes in Govindpuram, Ghaziabad. 
              Making the dream of "Apna Ghar" a reality for everyone.
            </p>
            
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 inline-block">
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-orange mb-3">Follow on Instagram</p>
              <div className="w-32 h-32 bg-white rounded-lg p-1 flex items-center justify-center">
                <Instagram className="text-brand-charcoal" size={48} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-brand-orange mb-8">Company</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Contact", "Enquiry"].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-brand-orange transition-colors text-sm font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Locations */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-brand-orange mb-8">Locations</h4>
            <ul className="space-y-4">
              {["Govindpuram", "Raj Nagar Extension", "Indirapuram", "Vaishali", "Vasundhara", "Siddharth Vihar"].map((link) => (
                <li key={link}>
                  <Link to="/" className="text-white/60 hover:text-brand-orange transition-colors text-sm font-medium">
                    Properties in {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-brand-orange mb-8">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-orange" size={20} />
                </div>
                <span className="text-white/60 text-sm leading-relaxed">
                  Corporate Office: Plot No. 45, Govindpuram Main Road, Ghaziabad, UP - 201013
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-brand-orange" size={20} />
                </div>
                <div className="flex flex-col">
                  <a href="tel:+918595668267" className="text-white/60 text-sm font-medium hover:text-brand-orange transition-colors">+91 85956 68267</a>
                  <a href="tel:+917210815549" className="text-white/60 text-sm font-medium hover:text-brand-orange transition-colors">+91 72108 15549</a>
                </div>
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-brand-orange" size={20} />
                </div>
                <span className="text-white/60 text-sm font-medium">info@grihapravesh.com</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-10">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-all duration-300 ${social.color} hover:-translate-y-1`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-widest font-bold text-white/40">
          <p>© 2026 Griha Pravesh Builders & Developers. Crafted with Trust.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-orange transition-colors">RERA Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
