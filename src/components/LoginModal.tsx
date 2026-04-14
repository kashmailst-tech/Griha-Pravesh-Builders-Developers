import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Lock, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { db, auth, handleFirestoreError, OperationType } from "@/lib/firebase";
import { signInAnonymously } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [step, setStep] = useState<"phone" | "otp" | "success">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("OTP sent to your mobile number");
      setStep("otp");
    }, 1000);
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length < 4) {
      toast.error("Please enter the 4-digit OTP");
      return;
    }
    
    setLoading(true);
    try {
      // Demo: Using anonymous sign-in
      const userCredential = await signInAnonymously(auth);
      const user = userCredential.user;

      // Create/Update user profile
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          role: "user",
          phone: phone,
          createdAt: serverTimestamp()
        });
      }

      setLoading(false);
      setStep("success");
      setTimeout(() => {
        onClose();
        setStep("phone");
        setPhone("");
        setOtp("");
      }, 2000);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, "users");
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] bg-brand-beige border-brand-orange/20 p-0 overflow-hidden">
        <div className="bg-brand-charcoal p-8 text-white text-center">
          <DialogTitle className="text-2xl font-bold mb-2">Welcome to Griha Pravesh</DialogTitle>
          <DialogDescription className="text-white/70">
            Login to find your dream affordable home in Govindpuram. 
            Apna Ghar, Sabse Sasta!
          </DialogDescription>
        </div>

        <div className="p-8">
          <AnimatePresence mode="wait">
            {step === "phone" && (
              <motion.form
                key="phone"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSendOtp}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-charcoal">Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray" size={18} />
                    <span className="absolute left-10 top-1/2 -translate-y-1/2 text-brand-gray font-medium">+91</span>
                    <Input
                      type="tel"
                      placeholder="Enter 10 digit number"
                      className="pl-20 h-12 rounded-xl border-brand-charcoal/10 bg-white"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" disabled={loading} className="w-full bg-brand-orange hover:bg-brand-charcoal text-white h-12 rounded-xl text-lg font-bold group">
                  {loading ? <Loader2 className="animate-spin" /> : (
                    <>Send OTP <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </Button>
              </motion.form>
            )}

            {step === "otp" && (
              <motion.form
                key="otp"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleVerifyOtp}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-charcoal">Enter OTP</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray" size={18} />
                    <Input
                      type="text"
                      placeholder="Enter 4-digit OTP"
                      className="pl-10 h-12 rounded-xl border-brand-charcoal/10 bg-white text-center tracking-[1em] font-bold text-xl"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 4))}
                      required
                    />
                  </div>
                  <p className="text-xs text-center text-brand-gray">
                    Didn't receive? <button type="button" className="text-brand-orange font-bold underline">Resend OTP</button>
                  </p>
                </div>
                <Button type="submit" disabled={loading} className="w-full bg-brand-orange hover:bg-brand-charcoal text-white h-12 rounded-xl text-lg font-bold">
                  {loading ? <Loader2 className="animate-spin" /> : "Verify & Login"}
                </Button>
                <button
                  type="button"
                  onClick={() => setStep("phone")}
                  className="w-full text-sm text-brand-gray hover:text-brand-orange"
                >
                  Change Phone Number
                </button>
              </motion.form>
            )}

            {step === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-green-500" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-brand-charcoal mb-2">Login Successful!</h3>
                <p className="text-brand-gray">Redirecting you to your dashboard...</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
