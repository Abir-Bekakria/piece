import { motion } from "framer-motion";
import { ShieldCheck, Award, Headphones, Truck, type LucideIcon } from "lucide-react";
import { useI18n, type dict } from "@/lib/i18n";
import { OrderTracking } from "./OrderTracking";

type Item = { key: keyof typeof dict; icon: LucideIcon };

const ITEMS: Item[] = [
  { key: "why.original", icon: Award },
  { key: "why.warranty", icon: ShieldCheck },
  { key: "why.support", icon: Headphones },
  { key: "why.delivery", icon: Truck },
];

export function WhyUs() {
  const { t } = useI18n();
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-3 gap-0 border border-gray-200">
          
          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-200"
          >
            {/* Heading with Orange Marker */}
            <div className="flex items-center gap-3 mb-10">
              <div className="h-8 w-2 bg-[var(--orange)]" />
              <h2 className="text-3xl font-black uppercase tracking-tighter italic text-[var(--navy-deep)]">
                {t("why.title")}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {ITEMS.map((it, i) => (
                <motion.div
                  key={it.key}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-start gap-5 p-5 border border-transparent hover:border-gray-200 transition-all"
                >
                  {/* Square Sharp Icon Container */}
                  <div className="shrink-0 flex h-14 w-14 items-center justify-center bg-[var(--navy-deep)] text-white group-hover:bg-[var(--orange)] transition-colors">
                    <it.icon className="h-7 w-7 stroke-[1.5px]" />
                  </div>
                  
                  <div className="pt-1">
                    <div className="font-black uppercase tracking-tight text-sm text-[var(--navy-deep)] mb-1">
                      {t(it.key)}
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                      <div className="h-1 w-3 bg-[var(--orange)]" />
                      PIÈCES PRO DZ SERVICE
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sidebar / Order Tracking Area */}
          <div className="bg-gray-50 flex flex-col justify-center">
             <OrderTracking />
          </div>

        </div>
      </div>
    </section>
  );
}