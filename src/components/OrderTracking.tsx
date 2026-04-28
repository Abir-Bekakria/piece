import { motion } from "framer-motion";
import { Package, Search } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export function OrderTracking() {
  const { t } = useI18n();
  const [orderId, setOrderId] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[var(--navy-deep)] text-white p-8 md:p-10 relative overflow-hidden h-full flex flex-col justify-center border-l-4 border-[var(--orange)]"
    >
      {/* Background Graphic Element - Minimalist */}
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Package className="h-32 w-32 rotate-12" />
      </div>

      <div className="relative">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex h-12 w-12 items-center justify-center bg-[var(--orange)] shrink-0">
            <Package className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-black uppercase tracking-tighter italic">
            {t("track.title") || "SUIVI DE COMMANDE"}
          </h3>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <label className="block text-[10px] font-black uppercase tracking-widest text-white/50 mb-2 ml-1">
              NUMÉRO DE COMMANDE
            </label>
            <input
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder={t("track.placeholder") || "EX: ORD-12345"}
              className="w-full bg-white/5 border border-white/20 px-4 py-4 text-sm font-bold uppercase tracking-wider placeholder:text-white/20 focus:outline-none focus:border-[var(--orange)] focus:bg-white/10 transition-all"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            className="w-full inline-flex items-center justify-center gap-3 bg-[var(--orange)] hover:bg-orange-600 text-white font-black py-5 uppercase tracking-tighter text-lg transition-colors group"
          >
            <Search className="h-5 w-5 group-hover:scale-110 transition-transform" />
            {t("track.button") || "SUIVRE MON COLIS"}
          </motion.button>
          
          <p className="text-[10px] text-center text-white/40 font-bold uppercase tracking-widest mt-4">
            Service disponible 24/7 pour vos pièces
          </p>
        </div>
      </div>
    </motion.div>
  );
}