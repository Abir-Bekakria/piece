import { motion } from "framer-motion";
import { Cog, Disc, Settings2, CarFront, Lightbulb, Wrench, type LucideIcon } from "lucide-react";
import { useI18n, type dict } from "@/lib/i18n";

type CatItem = { key: keyof typeof dict; icon: LucideIcon; count: number };

const CATS: CatItem[] = [
  { key: "cat.engines", icon: Cog, count: 12450 },
  { key: "cat.brakes", icon: Disc, count: 8230 },
  { key: "cat.transmission", icon: Settings2, count: 5640 },
  { key: "cat.bodywork", icon: CarFront, count: 9870 },
  { key: "cat.lights", icon: Lightbulb, count: 3210 },
  { key: "cat.accessories", icon: Wrench, count: 15230 },
];

export function Categories() {
  const { t } = useI18n();

  return (
    <section id="categories" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-12">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "6px" }}
            className="h-10 bg-[var(--orange)]" 
          />
          <h2 className="text-3xl md:text-4xl font- uppercase tracking-tighter italic text-[var(--navy-deep)]">
            {t("cat.title")}
          </h2>
        </div>
        
        {/* Modern Industrial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-border shadow-sm">
          {CATS.map((c, i) => (
            <motion.button
              key={c.key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ 
                backgroundColor: "var(--orange)", 
                color: "white",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex flex-col items-center justify-center p-10 border-r border-b border-border transition-colors outline-none"
            >
              {/* Icon with Hover Animation */}
              <div className="relative mb-5">
                <c.icon className="h-12 w-12 stroke-[1.25px] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                {/* Subtle 3D-like glow on hover */}
                <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Text Info */}
              <span className="text-[13px] font- uppercase tracking-[0.15em] mb-1">
                {t(c.key)}
              </span>
              
              <span className="text-[10px] font-bold opacity-50 group-hover:opacity-90 tracking-widest">
                {c.count.toLocaleString()} ITEMS
              </span>

              {/* Corner Accent (Optional 3D detail) */}
              <div className="absolute top-2 right-2 w-1 h-1 bg-border group-hover:bg-white/40 transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}