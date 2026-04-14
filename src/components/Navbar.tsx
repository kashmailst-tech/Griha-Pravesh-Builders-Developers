import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, X, User, Phone, Instagram, Facebook, Youtube, Linkedin, MessageCircle, ExternalLink 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Enquiry", path: "/enquiry" },
  ];

  const socialLinks = [
    { icon: <MessageCircle size={18} />, url: "https://wa.me/918595668267", color: "hover:text-green-500" },
    { icon: <Instagram size={18} />, url: "https://www.instagram.com/grihapraveshgzb/", color: "hover:text-pink-500" },
    { icon: <Facebook size={18} />, url: "https://www.facebook.com/GrihaPraveshBuildersandDevelopers/", color: "hover:text-blue-600" },
    { icon: <ExternalLink size={18} />, url: "https://linktr.ee/GrihaPravesh", color: "hover:text-brand-orange" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Bar */}
        <div className={`bg-brand-charcoal text-white/70 py-2 px-6 transition-all duration-300 ${isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"}`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium uppercase tracking-widest">
            <div className="flex flex-wrap items-center gap-6">
              <span className="flex items-center gap-2 text-white font-bold">
                <Phone size={14} className="text-brand-orange" /> 
                <a href="tel:+918595668267">+91 85956 68267</a>
              </span>
              <span className="flex items-center gap-2 text-white font-bold">
                <Phone size={14} className="text-brand-orange" /> 
                <a href="tel:+917210815549">+91 72108 15549</a>
              </span>
              <span className="hidden sm:inline">Govindpuram, Ghaziabad</span>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => (
                <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className={`transition-colors ${social.color}`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav
          className={`transition-all duration-300 ${
            isScrolled ? "bg-white/90 backdrop-blur-xl shadow-lg py-3" : "bg-brand-beige/50 backdrop-blur-sm py-5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-brand-charcoal leading-none tracking-tight">Griha Pravesh</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-orange font-bold">Builders & Developers</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-[13px] uppercase tracking-wider font-semibold text-brand-charcoal/70 hover:text-brand-orange transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button 
                variant="ghost"
                onClick={() => setIsLoginModalOpen(true)}
                className="text-brand-charcoal hover:text-brand-orange font-bold uppercase tracking-widest text-[11px]"
              >
                <User className="mr-2 h-4 w-4" /> Login
              </Button>
              <a 
                href="https://forms.gle/Sx6WgWWhPxjr8QMs5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-orange hover:bg-brand-charcoal text-white rounded-full px-8 py-6 uppercase tracking-widest text-[11px] font-bold shadow-xl shadow-brand-orange/20 transition-all hover:-translate-y-1 flex items-center justify-center"
              >
                Book Site Visit
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="xl:hidden text-brand-charcoal"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="absolute top-full left-0 right-0 bg-white shadow-2xl xl:hidden overflow-hidden border-t border-brand-charcoal/5"
              >
                <div className="flex flex-col p-8 gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xl font-serif font-medium text-brand-charcoal hover:text-brand-orange transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="flex flex-col gap-4 pt-6 border-t border-brand-charcoal/5">
                    <Button 
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsLoginModalOpen(true);
                      }}
                      className="bg-brand-charcoal text-white w-full py-6 rounded-xl"
                    >
                      <User className="mr-2 h-4 w-4" /> Login / Signup
                    </Button>
                    <a 
                      href="https://forms.gle/Sx6WgWWhPxjr8QMs5" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-brand-orange text-white w-full py-6 rounded-xl flex items-center justify-center font-bold uppercase tracking-widest text-sm"
                    >
                      <Phone className="mr-2 h-4 w-4" /> Book Site Visit
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
}
