import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Calendar, FileText, MessageSquare, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { db, auth, handleFirestoreError, OperationType } from "@/lib/firebase";
import { collection, onSnapshot, query, orderBy, where } from "firebase/firestore";

interface Favorite {
  id: string;
  projectId: string;
  projectTitle: string;
  price: string;
  status: string;
}

interface Inquiry {
  id: string;
  projectTitle: string;
  date: any;
  status: string;
}

export default function Dashboard() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth.currentUser) return;

    const favsQ = query(collection(db, "users", auth.currentUser.uid, "favorites"));
    const unsubFavs = onSnapshot(favsQ, (snapshot) => {
      setFavorites(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Favorite[]);
    }, (error) => handleFirestoreError(error, OperationType.LIST, `users/${auth.currentUser?.uid}/favorites`));

    const inqsQ = query(collection(db, "inquiries"), where("userId", "==", auth.currentUser.uid), orderBy("date", "desc"));
    const unsubInqs = onSnapshot(inqsQ, (snapshot) => {
      setInquiries(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Inquiry[]);
      setLoading(false);
    }, (error) => {
      // If index is missing, it might fail. We should handle it gracefully or just log it.
      console.warn("Inquiries query failed, might need an index", error);
      setLoading(false);
    });

    return () => {
      unsubFavs();
      unsubInqs();
    };
  }, [auth.currentUser]);

  if (!auth.currentUser) {
    return (
      <div className="min-h-screen bg-beige/30 flex items-center justify-center">
        <GlassCard className="p-12 text-center border-white/40">
          <User size={48} className="mx-auto text-maroon/20 mb-4" />
          <h2 className="text-2xl font-bold text-maroon mb-2">Please Login</h2>
          <p className="text-warm-gray mb-6">You need to be logged in to view your dashboard.</p>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-beige/30">
      <Navbar />
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64 space-y-4">
            <GlassCard className="p-6 text-center border-white/40">
              <div className="w-20 h-20 bg-maroon/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User size={40} className="text-maroon" />
              </div>
              <h3 className="font-bold text-maroon">{auth.currentUser.displayName || "User"}</h3>
              <p className="text-xs text-warm-gray">{auth.currentUser.email}</p>
              <Badge className="mt-2 bg-saffron text-maroon">Member</Badge>
            </GlassCard>

            <nav className="space-y-2">
              {[
                { icon: <Heart size={18} />, label: "Favorites" },
                { icon: <Calendar size={18} />, label: "Site Visits" },
                { icon: <FileText size={18} />, label: "Brochures" },
                { icon: <Clock size={18} />, label: "Inquiry Status" },
                { icon: <MessageSquare size={18} />, label: "Chat Support" },
              ].map((item, idx) => (
                <button
                  key={idx}
                  className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-maroon/5 text-warm-gray hover:text-maroon transition-all font-medium"
                >
                  {item.icon} {item.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-maroon mb-8">My Dashboard</h2>
            
            <Tabs defaultValue="favorites" className="w-full">
              <TabsList className="bg-white/50 p-1 rounded-xl mb-8">
                <TabsTrigger value="favorites" className="rounded-lg data-[state=active]:bg-maroon data-[state=active]:text-beige">
                  Favorites ({favorites.length})
                </TabsTrigger>
                <TabsTrigger value="inquiries" className="rounded-lg data-[state=active]:bg-maroon data-[state=active]:text-beige">
                  Inquiries ({inquiries.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="favorites">
                <div className="grid sm:grid-cols-2 gap-6">
                  {favorites.length === 0 ? (
                    <div className="col-span-full py-12 text-center text-warm-gray">No favorites saved yet.</div>
                  ) : (
                    favorites.map((item) => (
                      <div key={item.id}>
                        <GlassCard className="p-6 border-white/40">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="font-bold text-maroon">{item.projectTitle}</h4>
                              <p className="text-sm text-warm-gray">{item.price}</p>
                            </div>
                            <Heart size={20} className="text-maroon fill-maroon" />
                          </div>
                          <Badge className="bg-forest text-beige">{item.status}</Badge>
                          <button className="w-full mt-6 py-2 border border-maroon text-maroon rounded-lg hover:bg-maroon hover:text-beige transition-colors text-sm font-bold">
                            View Details
                          </button>
                        </GlassCard>
                      </div>
                    ))
                  )}
                </div>
              </TabsContent>

              <TabsContent value="inquiries">
                <div className="space-y-4">
                  {inquiries.length === 0 ? (
                    <div className="py-12 text-center text-warm-gray">No inquiries found.</div>
                  ) : (
                    inquiries.map((item) => (
                      <div key={item.id}>
                        <GlassCard className="p-4 flex justify-between items-center border-white/40">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-maroon/5 rounded-lg">
                              <FileText className="text-maroon" size={20} />
                            </div>
                            <div>
                              <h4 className="font-bold text-maroon">{item.projectTitle}</h4>
                              <p className="text-xs text-warm-gray">Inquired on {item.date?.toDate().toLocaleDateString() || "Recently"}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="border-maroon text-maroon">
                            {item.status}
                          </Badge>
                        </GlassCard>
                      </div>
                    ))
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
