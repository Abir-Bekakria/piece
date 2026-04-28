import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

function CustomInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <div className="group relative">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border-b-2 border-slate-200 bg-transparent px-0 py-4 text-sm font-bold uppercase tracking-widest text-slate-900 placeholder:text-slate-400 transition-all focus:border-[var(--orange)] focus:outline-none"
      />
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--orange)] transition-all duration-300 group-focus-within:w-full" />
    </div>
  );
}

function ContactLink({
  Icon,
  label,
  value,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="group flex items-start gap-4 cursor-pointer">
      <Icon className="mt-1 h-4 w-4 text-[var(--orange)] transition-transform group-hover:scale-110" />

      <div>
        <p className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          {label}
        </p>

        <p className="text-sm font-bold uppercase tracking-widest text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slate-200/50 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          {/* LEFT */}
          <div className="space-y-12 lg:col-span-5">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-[2px] w-12 bg-[var(--orange)]" />

                <span className="text-xs font-black uppercase tracking-[0.4em] text-[var(--orange)]">
                  Get in touch
                </span>
              </div>

              <h2 className="text-5xl font-black uppercase italic leading-none tracking-tighter text-slate-900 md:text-7xl">
                CONTACT<span className="text-[var(--orange)]">.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm font-medium uppercase tracking-wide leading-relaxed text-slate-500">
                Besoin d&apos;une expertise technique ou d&apos;une pièce
                introuvable ?
              </p>
            </div>

            <div className="space-y-6">
              <ContactLink
                Icon={Phone}
                label="Technical Support"
                value="+213 XX XX XX XX"
              />

              <ContactLink
                Icon={Mail}
                label="Direct Inquiry"
                value="support@domain.dz"
              />

              <ContactLink
                Icon={MapPin}
                label="Headquarters"
                value="Algiers, Algeria"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-10">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-[var(--orange)]" />

                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Response under 24h
                </span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[var(--orange)]" />

                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Secure Protocol
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7">
            <div className="relative border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 md:p-12">
              <div className="absolute right-0 top-0 h-16 w-16 border-r-2 border-t-2 border-[var(--orange)]" />

              <h3 className="mb-10 text-xl font-black uppercase italic tracking-tighter text-slate-900">
                Lancer une requête
              </h3>

              <div className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <CustomInput
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="VOTRE NOM"
                  />

                  <CustomInput
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder="VOTRE EMAIL"
                  />
                </div>

                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="DÉTAILS DU MESSAGE..."
                  className="h-32 w-full resize-none border-b-2 border-slate-200 bg-transparent px-0 py-4 text-sm font-bold uppercase tracking-widest text-slate-900 placeholder:text-slate-300 transition-all focus:border-[var(--orange)] focus:outline-none"
                />

                <motion.button
                  whileHover={{
                    backgroundColor: "var(--orange)",
                    color: "#fff",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-4 border-2 border-[var(--orange)] py-6 text-xs font-black uppercase tracking-[0.3em] text-[var(--orange)] transition-colors"
                >
                  TRANSMETTRE
                  <Send className="h-4 w-4" />
                </motion.button>
              </div>
            </div>

            {/* bottom decor */}
            <div className="mt-4 flex items-center justify-between px-2">
              <span className="text-[8px] font-mono tracking-widest text-slate-400">
                SRL-X99-2026
              </span>

              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <div
                    key={i}
                    className="h-1 w-1 rounded-full bg-slate-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}