import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Wrench,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const navItems = [
    { key: "nav.categories", href: "#categories" },
    { key: "nav.vehicleSearch", href: "#search" },
    { key: "nav.specialOffers", href: "#bestsellers" },
    { key: "nav.contact", href: "#footer" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-white bg-[#0a0f1a] text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border-2 border-white bg-transparent shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] transition-all group-hover:bg-[var(--orange)] group-hover:border-slate-900">
            <Wrench className="h-5 w-5 text-white group-hover:text-slate-900" />
          </div>

          <div className="leading-none">
            <div className="text-xl font-black uppercase italic tracking-tighter">
              PIECES PRO<span className="text-[var(--orange)]">.</span>DZ
            </div>
            <div className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
              Engineering & Sourcing
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-[11px] font-black uppercase italic tracking-[0.2em] text-white/90 transition-colors hover:text-[var(--orange)]"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">

          {/* Login */}
          <button className="hidden h-9 items-center gap-2 border-2 border-white px-3 text-[11px] font-black uppercase italic shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all hover:bg-white hover:text-slate-900 sm:inline-flex">
            <User className="h-4 w-4" />
            {t("nav.login")}
          </button>

          {/* Cart */}
          <button className="relative flex h-9 w-9 items-center justify-center border-2 border-white bg-[var(--orange)] text-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
            <ShoppingCart className="h-4 w-4" />
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center border-2 border-white bg-[#0a0f1a] text-[10px] font-black text-white">
              0
            </span>
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center border-2 border-white text-white hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t-2 border-white bg-[#0a0f1a] lg:hidden"
        >
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 px-3 py-4 text-sm font-black uppercase italic tracking-widest text-white hover:text-[var(--orange)] last:border-0"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}