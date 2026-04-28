import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ar" | "fr";

type Dict = Record<string, { ar: string; fr: string }>;

export const dict: Dict = {
  // Header
  "nav.categories": { ar: "الفئات", fr: "Catégories" },
  "nav.vehicleSearch": { ar: "بحث المركبات", fr: "Recherche véhicule" },
  "nav.specialOffers": { ar: "العروض الخاصة", fr: "Offres spéciales" },
  "nav.contact": { ar: "اتصل بنا", fr: "Contact" },
  "nav.login": { ar: "دخول", fr: "Connexion" },
  "nav.account": { ar: "حسابي", fr: "Mon compte" },

  // Hero
  "hero.title1": { ar: "المنصة الرائدة لقطع الغيار", fr: "La plateforme leader des" },
  "hero.title2": { ar: "الأصلية في الجزائر", fr: "pièces auto originales en Algérie" },
  "hero.subtitle": {
    ar: "أكثر من 500,000 قطعة معتمدة من كبرى الماركات العالمية. توصيل سريع إلى 58 ولاية.",
    fr: "Plus de 500 000 pièces certifiées des grandes marques mondiales. Livraison rapide dans les 58 wilayas.",
  },
  "hero.cta": { ar: "ابحث عن قطعة سيارتك الآن", fr: "Trouver ma pièce maintenant" },

  // Search
  "search.vehicle": { ar: "المركبة (الماركة، الموديل، السنة، المحرك)", fr: "Véhicule (Marque, Modèle, Année, Moteur)" },
  "search.brand": { ar: "الماركة", fr: "Marque" },
  "search.model": { ar: "الموديل", fr: "Modèle" },
  "search.year": { ar: "السنة", fr: "Année" },
  "search.engine": { ar: "المحرك", fr: "Moteur" },
  "search.partType": { ar: "نوع القطعة / المرجع", fr: "Type de pièce / Référence" },
  "search.button": { ar: "بحث", fr: "Rechercher" },

  // Categories
  "cat.title": { ar: "تصفح حسب الفئات", fr: "Parcourir par catégorie" },
  "cat.engines": { ar: "المحركات", fr: "Moteurs" },
  "cat.brakes": { ar: "الفرامل", fr: "Freins" },
  "cat.transmission": { ar: "ناقل الحركة", fr: "Transmission" },
  "cat.bodywork": { ar: "الهيكل", fr: "Carrosserie" },
  "cat.lights": { ar: "الإضاءة", fr: "Éclairage" },
  "cat.accessories": { ar: "الإكسسوارات", fr: "Accessoires" },

  // Best sellers
  "best.title": { ar: "العروض الخاصة والأكثر مبيعاً", fr: "Offres spéciales & best-sellers" },
  "best.inStock": { ar: "في المخزون", fr: "En stock" },
  "best.add": { ar: "أضف للسلة", fr: "Ajouter" },

  // Tracking
  "track.title": { ar: "تتبع طلبيتك", fr: "Suivre votre commande" },
  "track.placeholder": { ar: "رقم الطلبية", fr: "N° de commande" },
  "track.button": { ar: "بحث", fr: "Suivre" },

  // Why us
  "why.title": { ar: "لماذا PIECES PRO DZ ؟", fr: "Pourquoi PIECES PRO DZ ?" },
  "why.original": { ar: "قطع أصلية", fr: "Pièces d'origine" },
  "why.warranty": { ar: "ضمان شامل", fr: "Garantie complète" },
  "why.support": { ar: "دعم فني متخصص", fr: "Support technique" },
  "why.delivery": { ar: "توصيل آمن", fr: "Livraison sécurisée" },

  // Rare part
  "rare.banner": { ar: "هل تبحث عن قطعة نادرة؟ دع خبراءنا يساعدونك", fr: "Vous cherchez une pièce rare ? Nos experts vous aident" },
  "rare.cta": { ar: "اطلب قطعة نادرة", fr: "Commander une pièce rare" },
  "rare.modalTitle": { ar: "اطلب قطعة نادرة", fr: "Commander une pièce rare" },
  "rare.step": { ar: "الخطوة", fr: "Étape" },
  "rare.of": { ar: "من", fr: "sur" },
  "rare.vehicleInfo": { ar: "معلومات المركبة", fr: "Informations véhicule" },
  "rare.partInfo": { ar: "تفاصيل القطعة", fr: "Détails de la pièce" },
  "rare.contactInfo": { ar: "معلومات الاتصال", fr: "Coordonnées" },
  "rare.partName": { ar: "اسم القطعة", fr: "Nom de la pièce" },
  "rare.reference": { ar: "المرجع (اختياري)", fr: "Référence (optionnel)" },
  "rare.notes": { ar: "ملاحظات إضافية", fr: "Notes supplémentaires" },
  "rare.fullName": { ar: "الاسم الكامل", fr: "Nom complet" },
  "rare.phone": { ar: "رقم الهاتف", fr: "Téléphone" },
  "rare.wilaya": { ar: "الولاية", fr: "Wilaya" },
  "rare.next": { ar: "التالي", fr: "Suivant" },
  "rare.back": { ar: "السابق", fr: "Précédent" },
  "rare.submit": { ar: "إرسال الطلب", fr: "Envoyer la demande" },
  "rare.success": { ar: "تم إرسال طلبك! سنتواصل معك قريباً.", fr: "Demande envoyée ! Nous vous contacterons bientôt." },

  // Footer
  "footer.about": { ar: "من نحن", fr: "À propos" },
  "footer.blog": { ar: "المدونة", fr: "Blog" },
  "footer.policies": { ar: "السياسات", fr: "Politiques" },
  "footer.app": { ar: "تطبيق الهاتف", fr: "Application mobile" },
  "footer.rights": { ar: "© 2026 Pieces Pro DZ، الجزائر", fr: "© 2026 Pieces Pro DZ, Algérie" },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
  dir: "rtl" | "ltr";
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("ppdz-lang") as Lang | null;
    if (saved === "ar" || saved === "fr") setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("ppdz-lang", l);
  };

  const t = (key: keyof typeof dict) => dict[key]?.[lang] ?? String(key);

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir: lang === "ar" ? "rtl" : "ltr" }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
