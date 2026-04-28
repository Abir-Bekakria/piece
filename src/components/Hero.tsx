import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ArrowRight, Car } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/hero-engine.jpg";

// ---------------- DATA ----------------
const BRANDS = ["Hyundai", "Kia", "Toyota", "Renault", "Peugeot", "BMW", "Ford", "Volkswagen"];
const MODELS = ["Sedan", "SUV", "Hatchback", "Pickup"];
const YEARS = Array.from({ length: 20 }, (_, i) => String(2026 - i));
const ENGINES = ["1.5L Diesel", "1.6L Essence", "2.0L Diesel", "2.5L Essence"];

// ---------------- SELECT COMPONENT ----------------
type SelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function Select({ label, value, options, onChange }: SelectProps) {
  return (
    // Remplacement du blanc par un gris ardoise ultra léger pour adoucir
    <div className="relative min-w-0 border-r border-slate-200/50 last:border-r-0 bg-slate-50/80 hover:bg-white transition-colors group">
      <label className="absolute left-4 top-3 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-[var(--orange)] transition-colors">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-transparent px-4 pt-8 pb-5 text-[13px] font-bold uppercase tracking-tight text-[#050a15] outline-none cursor-pointer"
      >
        <option value="" className="font-sans text-gray-400">Sélectionner</option>
        {options.map((item) => (
          <option key={item} value={item} className="font-sans font-medium text-gray-900">
            {item}
          </option>
        ))}
      </select>

      <ChevronDown className="pointer-events-none absolute right-3 bottom-5 h-3.5 w-3.5 text-[var(--orange)] opacity-50 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}

// ---------------- MAIN HERO ----------------
export function Hero() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<"vehicle" | "plate">("vehicle");

  // States
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [engine, setEngine] = useState("");
  const [plate, setPlate] = useState("");
  const [partType, setPartType] = useState("");

  return (
    <section className="relative min-h-[90vh] md:min-h-screen overflow-hidden bg-[#050a15] flex items-center">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 via-[#050a15]/90 to-transparent" />
        <motion.img
          src={heroImg}
          alt="Engine Background"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="h-full w-full object-cover grayscale"
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 py-20 lg:py-32">
        
        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-10 bg-[var(--orange)]" />
            <p className="text-[11px] font-black uppercase tracking-[0.5em] text-[var(--orange)]">
              Pièces Pro DZ • Excellence
            </p>
          </div>

          <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-[0.85] tracking-[-0.05em] text-white">
            {t("hero.title1") || "Expert en"} <br />
            <span className="stroke-text">Pièces Auto</span>
          </h1>
          
          <p className="mt-8 text-white/40 text-sm md:text-base font-bold uppercase tracking-widest max-w-lg border-l-2 border-white/5 pl-6">
            Trouvez rapidement la pièce parfaite pour votre véhicule parmi +500,000 références.
          </p>
        </motion.div>

        {/* Search Engine Interface */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 relative"
        >
          {/* Functional Tabs - Sombre pour ne pas flasher */}
          <div className="flex gap-1">
            {(["vehicle", "plate"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-10 py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 overflow-hidden ${
                  activeTab === tab
                    ? "bg-slate-100 text-[#050a15]" // Gris très doux au lieu de blanc
                    : "bg-white/5 text-white/30 hover:bg-white/10 backdrop-blur-md"
                }`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabLine"
                    className="absolute top-0 left-0 right-0 h-[4px] bg-[var(--orange)]" 
                  />
                )}
                <span className="relative z-10">
                  {tab === "vehicle" ? "Par Véhicule" : "Par Matricule"}
                </span>
              </button>
            ))}
          </div>

          {/* Main Search Box - Fond légèrement teinté */}
          <div className="overflow-hidden bg-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] border-b-8 border-[var(--orange)]">
            <div className="flex flex-col xl:flex-row items-stretch">
              
              <AnimatePresence mode="wait">
                {activeTab === "vehicle" ? (
                  <motion.div
                    key="vehicle"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.3 }}
                    className="grid flex-[1.8] grid-cols-2 md:grid-cols-4"
                  >
                    <Select label="1. Marque" value={brand} options={BRANDS} onChange={setBrand} />
                    <Select label="2. Modèle" value={model} options={MODELS} onChange={setModel} />
                    <Select label="3. Année" value={year} options={YEARS} onChange={setYear} />
                    <Select label="4. Moteur" value={engine} options={ENGINES} onChange={setEngine} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="plate"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-[1.8] items-center bg-slate-200/30 px-8 py-6"
                  >
                    <div className="flex w-full max-w-md items-center gap-4 rounded-sm border-2 border-slate-300/50 bg-white/80 p-3 shadow-inner backdrop-blur-sm">
                      <div className="rounded-sm bg-blue-700 px-2 py-1 text-[10px] font-black text-white">DZ</div>
                      <input
                        value={plate}
                        onChange={(e) => setPlate(e.target.value)}
                        placeholder="00000 000 00"
                        className="flex-1 bg-transparent text-2xl font-black tracking-[0.2em] outline-none text-[#050a15] placeholder:text-slate-300"
                      />
                      <Car className="h-6 w-6 text-slate-300" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Keyword Search - Fond Blanc/Gris très doux */}
              <div className="flex flex-1 items-center border-t border-slate-200/50 px-10 xl:border-l xl:border-t-0 bg-slate-50/50 group transition-colors hover:bg-white">
                <Search className="mr-5 h-5 w-5 text-slate-300 group-focus-within:text-[var(--orange)] transition-colors" />
                <input
                  value={partType}
                  onChange={(e) => setPartType(e.target.value)}
                  placeholder="QUELLE PIÈCE ?"
                  className="w-full py-9 text-[12px] font-black uppercase tracking-[0.2em] outline-none placeholder:text-slate-300 text-[#050a15] bg-transparent"
                />
              </div>

              {/* Action Button */}
              <button className="flex shrink-0 items-center justify-center gap-4 bg-[var(--orange)] px-14 py-9 text-2xl font-black italic uppercase tracking-tighter text-white transition-all duration-300 hover:bg-black group">
                RECHERCHER
                <ArrowRight className="h-6 w-6 group-hover:translate-x-3 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .stroke-text {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.25);
        }
        @media (max-width: 768px) {
          .stroke-text { -webkit-text-stroke: 1px rgba(255,255,255,0.2); }
        }
      `}</style>
    </section>
  );
}