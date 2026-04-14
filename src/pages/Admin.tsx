import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import GlassCard from "@/components/GlassCard";
import { LayoutDashboard, Home, Users, BarChart3, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { db, handleFirestoreError, OperationType } from "@/lib/firebase";
import { collection, onSnapshot, query, orderBy, doc, updateDoc } from "firebase/firestore";
import { toast } from "sonner";

interface Inquiry {
  id: string;
  customerName: string;
  customerPhone: string;
  projectTitle: string;
  date: any;
  status: string;
}

export default function AdminPanel() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  useEffect(() => {
    const q = query(collection(db, "inquiries"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setInquiries(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Inquiry[]);
    }, (error) => handleFirestoreError(error, OperationType.LIST, "inquiries"));
    return () => unsubscribe();
  }, []);

  const handleUpdateInquiryStatus = async (id: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, "inquiries", id), { status: newStatus });
      toast.success("Status updated");
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `inquiries/${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-brand-beige flex">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-charcoal text-white flex flex-col p-6 fixed h-full">
        <div className="flex items-center gap-2 mb-12">
          <div className="w-8 h-8 bg-brand-orange rounded flex items-center justify-center">
            <Home className="text-white" size={18} />
          </div>
          <span className="font-bold text-lg">GP Admin</span>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { icon: <LayoutDashboard size={18} />, label: "Dashboard", active: true },
            { icon: <Users size={18} />, label: "Leads" },
            { icon: <BarChart3 size={18} />, label: "Analytics" },
            { icon: <Settings size={18} />, label: "Settings" },
          ].map((item, idx) => (
            <button
              key={idx}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all font-medium ${
                item.active ? "bg-brand-orange text-white shadow-lg" : "hover:bg-white/10 text-white/70"
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-brand-charcoal">Admin Overview</h1>
            <p className="text-brand-gray">Welcome back, here's what's happening today.</p>
          </div>
        </header>

        <div className="space-y-8">
          <h2 className="text-xl font-bold text-brand-charcoal">Recent Inquiries ({inquiries.length})</h2>
          <GlassCard className="p-8 border-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-brand-charcoal/5 text-brand-gray text-sm">
                    <th className="pb-4 font-medium">Customer</th>
                    <th className="pb-4 font-medium">Project Interest</th>
                    <th className="pb-4 font-medium">Status</th>
                    <th className="pb-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-charcoal/5">
                  {inquiries.map((lead) => (
                    <tr key={lead.id} className="group hover:bg-brand-charcoal/5 transition-colors">
                      <td className="py-4">
                        <div className="font-bold text-brand-charcoal">{lead.customerName}</div>
                        <div className="text-xs text-brand-gray">{lead.customerPhone}</div>
                      </td>
                      <td className="py-4 text-sm text-brand-gray">{lead.projectTitle}</td>
                      <td className="py-4">
                        <select 
                          value={lead.status} 
                          onChange={(e) => handleUpdateInquiryStatus(lead.id, e.target.value)}
                          className="text-xs border rounded p-1 bg-white"
                        >
                          <option>New</option>
                          <option>Contacted</option>
                          <option>Site Visit</option>
                          <option>Closed</option>
                        </select>
                      </td>
                      <td className="py-4">
                        <Button variant="ghost" size="sm" className="text-brand-orange hover:bg-brand-orange/10">Details</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}
