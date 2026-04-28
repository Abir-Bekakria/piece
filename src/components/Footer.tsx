import { Facebook, Instagram, Send, Music2, Wrench } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    // Réduction du padding vertical (pt-8 pb-4 au lieu de pt-16 pb-8)
    <footer id="footer" className="bg-white border-t-4 border-slate-900 pt-8 pb-4 mt-4">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* TOP: Branding & Socials - Réduction du gap et du padding bas */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6">
          
          {/* Logo Section - Taille réduite légèrement (h-10 au lieu de h-12) */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border-2 border-slate-900 bg-white shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
              <Wrench className="h-5 w-5 text-[var(--orange)]" />
            </div>
            <div>
              <div className="font-black italic text-xl tracking-tighter text-slate-900 uppercase leading-none">
                PIECES PRO<span className="text-[var(--orange)]">.</span>DZ
              </div>
              <div className="text-[9px] font-mono font-bold text-slate-400 tracking-[0.2em] uppercase">
                Engineering & Sourcing
              </div>
            </div>
          </div>

          {/* Social Links - Icônes plus petites */}
          <div className="flex items-center gap-2">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Send, label: "Telegram" },
              { Icon: Music2, label: "TikTok" }
            ].map(({ Icon, label }, i) => (
              <a
                key={i}
                href="#"
                className="group relative h-8 w-8 border-2 border-slate-900 flex items-center justify-center transition-all hover:bg-slate-900"
                aria-label={label}
              >
                <Icon className="h-3.5 w-3.5 text-slate-900 transition-colors group-hover:text-white" />
                <div className="absolute -top-1 -right-1 h-1.5 w-1.5 bg-[var(--orange)] opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>

        {/* MIDDLE: Navigation - Padding vertical réduit (py-4 au lieu de py-10) */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap gap-x-8 gap-y-3 py-4 border-y border-slate-100">
          {[
            { key: "footer.about", href: "#" },
            { key: "footer.blog", href: "#" },
            { key: "footer.policies", href: "#" },
            { key: "footer.app", href: "#" }
          ].map((link) => (
            <a 
              key={link.key}
              href={link.href} 
              className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 hover:text-[var(--orange)] transition-colors italic"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        {/* BOTTOM: Rights & Technical Details - Padding top réduit */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 pt-4">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-6 bg-[var(--orange)]" />
            <p className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">
              {t("footer.rights")} — 2026
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <span className="text-[7px] font-black text-slate-200 uppercase tracking-[0.3em]">
                Verified Parts Protocol
              </span>
            </div>
            {/* Décoration code-barres plus courte */}
            <div className="flex gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`h-2 w-[2px] bg-slate-100 ${i % 2 === 0 ? 'bg-slate-200 h-3' : ''}`} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}