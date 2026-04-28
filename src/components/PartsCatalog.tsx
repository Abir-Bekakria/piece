import { motion } from "framer-motion";
import {
  Settings2,
  Disc,
  Zap,
  Lightbulb,
  Thermometer,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Search,
} from "lucide-react";

const categories = [
  { title: "Système Moteur", links: ["Courroies", "Injection", "Turbo"], icon: Settings2, count: "1,240" },
  { title: "Freinage & ABS", links: ["Disques", "Plaquettes", "Étriers"], icon: Disc, count: "850" },
  { title: "Électricité", links: ["Batteries", "Alternateurs", "Bougies"], icon: Zap, count: "620" },
  { title: "Visibilité", links: ["Phares", "Essuie-glaces", "Ampoules"], icon: Lightbulb, count: "2,100" },
  { title: "Climatisation", links: ["Compresseurs", "Filtres"], icon: Thermometer, count: "430" },
  { title: "Sécurité Active", links: ["Airbags", "Capteurs ABS", "Ceintures"], icon: ShieldCheck, count: "120" },
];

export function PartsCatalog() {
  return (
    <section className="bg-[#fafafa] py-28">
      <div className="container mx-auto px-4 md:px-6">

        {/* HEADER & SEARCH ELEGANCE */}
        <div className="mb-20 flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-8 bg-[var(--orange)]" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--orange)]">
                Catalogue Technique 2026
              </span>
            </div>
            
            <h2 className="text-4xl font-black uppercase italic leading-none tracking-tighter text-slate-900 md:text-6xl">
              Pièces Catalogue <span className="text-[var(--orange)]">.</span>
            </h2>
 
          </div>

          <div className="relative w-full max-w-md">
            <div className="group relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[var(--orange)]" />
              <input
                type="text"
                placeholder="Référence, nom de pièce..."
                className="w-full rounded-none border-b-2 border-slate-200 bg-transparent py-5 pl-12 pr-4 text-sm font-bold uppercase tracking-widest text-slate-900 outline-none transition-all focus:border-slate-950"
              />
            </div>
          </div>
        </div>

        {/* GRID - CLEAN & SHARP */}
        <div className="grid gap-px overflow-hidden bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white p-10 transition-all duration-500 hover:bg-slate-50"
            >
              {/* TOP ROW */}
              <div className="mb-10 flex items-start justify-between">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-[var(--orange)] opacity-0 blur-lg transition-opacity group-hover:opacity-20" />
                  <cat.icon className="relative h-8 w-8 text-slate-900 transition-transform duration-500 group-hover:scale-110 group-hover:text-[var(--orange)]" />
                </div>
                <span className="font-mono text-[10px] font-bold text-slate-300">
                  [{cat.count} ITEMS]
                </span>
              </div>

              {/* INFO */}
              <h3 className="mb-6 text-2xl font-black uppercase italic tracking-tight text-slate-950">
                {cat.title}
              </h3>

              <div className="mb-10 flex flex-wrap gap-x-4 gap-y-2">
                {cat.links.map((link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-[10px] font-bold uppercase tracking-widest text-slate-400 transition-colors hover:text-[var(--orange)]"
                  >
                    {link}
                  </a>
                ))}
              </div>

              {/* ACTION */}
              <button className="group/btn flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-slate-900">
                <span>Consulter</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 transition-all group-hover/btn:border-[var(--orange)] group-hover/btn:bg-[var(--orange)] group-hover/btn:text-white">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </button>

              {/* DECORATIVE LINE */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--orange)] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* FOOTER STATS */}
        <div className="mt-20 flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-3xl font-black text-slate-900">+50K</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 text-nowrap">Références en stock</p>
            </div>
            <div className="h-10 w-[1px] bg-slate-200 hidden md:block" />
            <div className="text-center md:text-left">
              <p className="text-3xl font-black text-slate-900">24H</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 text-nowrap">Livraison Express</p>
            </div>
          </div>

          <motion.button
            whileHover={{ x: 5 }}
            className="group flex items-center gap-6 bg-slate-950 px-10 py-5 text-[12px] font-black uppercase italic tracking-[0.2em] text-white transition-all hover:bg-[var(--orange)]"
          >
            Voir tout le catalogue
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}