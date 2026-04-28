import { AnimatePresence, motion } from "framer-motion";
import { X, Check, ChevronRight, ChevronLeft, Wrench } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

const WILAYAS = [
  "Alger",
  "Oran",
  "Constantine",
  "Annaba",
  "Blida",
  "Sétif",
  "Batna",
  "Tlemcen",
];

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
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full border-2 border-gray-100 bg-white px-4 py-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-[var(--orange)] transition-all placeholder:text-gray-300 rounded-none text-[var(--navy-deep)]"
    />
  );
}

export function RarePartCTA() {
  const { t, lang } = useI18n();

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  const [form, setForm] = useState({
    brand: "",
    model: "",
    year: "",
    partName: "",
    reference: "",
    notes: "",
    fullName: "",
    phone: "",
    wilaya: "",
  });

  const close = () => {
    setOpen(false);

    setTimeout(() => {
      setStep(1);
      setDone(false);
    }, 300);
  };

  const Next = lang === "ar" ? ChevronLeft : ChevronRight;
  const Prev = lang === "ar" ? ChevronRight : ChevronLeft;

  return (
    <>
      <section className="bg-[var(--navy-deep)] py-10 border-b-4 border-[var(--orange)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5 text-center md:text-start">
              <div className="h-14 w-14 shrink-0 bg-[var(--orange)] flex items-center justify-center">
                <Wrench className="h-7 w-7 text-white stroke-[2.5px]" />
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white italic">
                  {t("rare.title") || "PIÈCE INTROUVABLE ?"}
                </h2>

                <p className="text-xs md:text-sm font-bold uppercase mt-1 text-white/60 tracking-widest">
                  {t("rare.banner") ||
                    "Service de recherche spécialisé en Algérie"}
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setOpen(true)}
              className="bg-[var(--orange)] text-white px-10 py-5 font-black uppercase tracking-[0.2em] text-xs shadow-lg rounded-none flex items-center gap-3"
            >
              {t("rare.cta") || "LANCER LA RECHERCHE"}
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-50 bg-[var(--navy-deep)]/95 backdrop-blur-md flex items-center justify-center p-0 md:p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-2xl border-t-[12px] border-[var(--orange)] shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-none flex flex-col h-full md:h-auto overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gray-50 p-6 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-8 bg-[var(--orange)]" />

                  <h3 className="text-xl font-black uppercase tracking-tighter italic text-[var(--navy-deep)]">
                    {t("rare.modalTitle") ||
                      "CONFIGURATEUR DE RECHERCHE"}
                  </h3>
                </div>

                <button
                  onClick={close}
                  className="h-12 w-12 border border-gray-200 text-gray-400 hover:bg-black hover:text-white flex items-center justify-center transition-all"
                >
                  <X className="h-6 w-6 stroke-[3px]" />
                </button>
              </div>

              {/* Progress */}
              {!done && (
                <div className="flex w-full h-2 bg-gray-100">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`flex-1 transition-all duration-500 ${
                        s <= step
                          ? "bg-[var(--orange)]"
                          : "bg-transparent"
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Content */}
              <div className="p-8 flex-1 overflow-y-auto">
                {done ? (
                  <div className="text-center py-12 flex flex-col items-center">
                    <div className="mb-6 h-24 w-24 bg-green-600 text-white flex items-center justify-center">
                      <Check className="h-12 w-12 stroke-[4px]" />
                    </div>

                    <h4 className="text-2xl font-black uppercase italic mb-2 text-[var(--navy-deep)]">
                      SUCCÈS !
                    </h4>

                    <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-10">
                      Votre demande est en cours de traitement
                    </p>

                    <button
                      onClick={close}
                      className="bg-[var(--navy-deep)] text-white font-black px-12 py-5 uppercase tracking-widest text-sm rounded-none"
                    >
                      TERMINER
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[10px] font-black tracking-[0.3em] text-gray-300 uppercase">
                        STEP 0{step} / 03
                      </span>

                      <h4 className="font-black uppercase text-sm text-[var(--navy-deep)] tracking-tighter">
                        {step === 1 &&
                          (t("rare.vehicleInfo") || "VÉHICULE")}
                        {step === 2 &&
                          (t("rare.partInfo") || "DÉTAILS PIÈCE")}
                        {step === 3 &&
                          (t("rare.contactInfo") || "COORDONNÉES")}
                      </h4>
                    </div>

                    <div className="space-y-4">
                      {step === 1 && (
                        <>
                          <CustomInput
                            value={form.brand}
                            onChange={(v) =>
                              setForm({ ...form, brand: v })
                            }
                            placeholder="MARQUE"
                          />

                          <CustomInput
                            value={form.model}
                            onChange={(v) =>
                              setForm({ ...form, model: v })
                            }
                            placeholder="MODÈLE"
                          />

                          <CustomInput
                            value={form.year}
                            onChange={(v) =>
                              setForm({ ...form, year: v })
                            }
                            placeholder="ANNÉE"
                          />
                        </>
                      )}

                      {step === 2 && (
                        <>
                          <CustomInput
                            value={form.partName}
                            onChange={(v) =>
                              setForm({ ...form, partName: v })
                            }
                            placeholder="NOM DE LA PIÈCE"
                          />

                          <CustomInput
                            value={form.reference}
                            onChange={(v) =>
                              setForm({ ...form, reference: v })
                            }
                            placeholder="RÉFÉRENCE CONSTRUCTEUR"
                          />

                          <textarea
                            value={form.notes}
                            onChange={(e) =>
                              setForm({
                                ...form,
                                notes: e.target.value,
                              })
                            }
                            placeholder="NOTES TECHNIQUES / VIN..."
                            className="w-full border-2 border-gray-100 bg-white p-5 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-[var(--orange)] rounded-none h-32 resize-none text-[var(--navy-deep)]"
                          />
                        </>
                      )}

                      {step === 3 && (
                        <>
                          <CustomInput
                            value={form.fullName}
                            onChange={(v) =>
                              setForm({ ...form, fullName: v })
                            }
                            placeholder="NOM COMPLET"
                          />

                          <CustomInput
                            value={form.phone}
                            onChange={(v) =>
                              setForm({ ...form, phone: v })
                            }
                            placeholder="TÉLÉPHONE"
                          />

                          <div className="relative">
                            <select
                              value={form.wilaya}
                              onChange={(e) =>
                                setForm({
                                  ...form,
                                  wilaya: e.target.value,
                                })
                              }
                              className="w-full border-2 border-gray-100 bg-white p-5 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-[var(--orange)] rounded-none appearance-none cursor-pointer text-[var(--navy-deep)]"
                            >
                              <option value="">
                                WILAYA DE LIVRAISON
                              </option>

                              {WILAYAS.map((w) => (
                                <option key={w} value={w}>
                                  {w}
                                </option>
                              ))}
                            </select>

                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                              <ChevronLeft className="h-4 w-4 rotate-[-90deg] text-gray-300" />
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex gap-4 mt-10">
                      {step > 1 && (
                        <button
                          onClick={() => setStep(step - 1)}
                          className="flex-1 border-2 border-[var(--navy-deep)] font-black p-5 text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                        >
                          <Prev className="h-4 w-4 stroke-[3px]" />
                          {t("rare.back") || "RETOUR"}
                        </button>
                      )}

                      <button
                        onClick={() =>
                          step < 3
                            ? setStep(step + 1)
                            : setDone(true)
                        }
                        className="flex-1 bg-[var(--navy-deep)] text-white font-black p-5 text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[var(--orange)] transition-all shadow-lg"
                      >
                        {step === 3
                          ? t("rare.submit") || "ENVOYER"
                          : t("rare.next") || "SUIVANT"}

                        {step < 3 && (
                          <Next className="h-4 w-4 stroke-[3px]" />
                        )}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}