import { motion } from "framer-motion";
import { Plus, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";


import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* IMPORTANT:
   You removed PRODUCTS with:
   // ... PRODUCTS reste identique

   That causes error: PRODUCTS is not defined
*/

const PRODUCTS = [
  {
    id: "1",
    name: "Filtre à huile haute performance",
    image: img4,
    price: 1350,
    oldPrice: 1800,
    badge: "Promotion",
  },
  {
    id: "2",
    name: "Plaquettes de frein céramique",
    image: img3,
    price: 7500,
    oldPrice: 9200,
    badge: "-15%",
  },
  {
    id: "3",
    name: "Batterie Varta Silver Dynamic",
    image: img2,
    price: 12500,
    oldPrice: 14000,
    badge: "Meilleure vente",
  },
  {
    id: "4",
    name: "Bougies d’allumage Iridium",
    image: img1,
    price: 2400,
    oldPrice: 3000,
    badge: "Original",
  },
];
export function BestSellers() {
  const { t } = useI18n();
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="overflow-hidden bg-slate-50/50 py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[2px] w-12 bg-[var(--orange)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--orange)]">
                 Stock direct
              </span>
            </div>

            <h2 className="text-4xl font-black uppercase italic leading-none tracking-tighter text-slate-900 md:text-6xl">
              MEILLEURES VENTES<span className="text-[var(--orange)]">.</span>
            </h2>
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="flex h-14 w-14 items-center justify-center border border-slate-100 bg-white shadow-sm transition-all hover:bg-[var(--orange)] hover:text-white active:scale-95"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={() => swiperInstance?.slideNext()}
              className="flex h-14 w-14 items-center justify-center border border-slate-100 bg-white shadow-sm transition-all hover:bg-slate-900 hover:text-white active:scale-95"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          onSwiper={setSwiperInstance}
          spaceBetween={20}
          slidesPerView={1.2}
          loop
          speed={800}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination-line",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!overflow-visible"
        >
          {PRODUCTS.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="group relative flex h-[520px] flex-col border border-slate-100 bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50">
                <div className="absolute left-4 top-4 z-10">
                  <div className="bg-slate-900 px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-white">
                    {p.badge}
                  </div>
                </div>

                <div className="relative flex h-64 w-full items-center justify-center overflow-hidden bg-slate-50 p-8">
                  <motion.img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-3 flex items-center gap-1 text-[var(--orange)]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>

                  <h3 className="mb-4 line-clamp-2 text-lg font-black uppercase italic leading-tight text-slate-900 group-hover:text-[var(--orange)]">
                    {p.name}
                  </h3>

                  <div className="mt-auto flex items-end justify-between border-t border-slate-50 pt-6">
                    <div className="space-y-1">
                      <p className="text-[11px] font-bold text-slate-400 line-through">
                        {p.oldPrice} DA
                      </p>

                      <p className="text-3xl font-black tracking-tighter text-slate-900">
                        {p.price}
                        <span className="ml-1 text-[10px] uppercase text-slate-400">
                          DA
                        </span>
                      </p>
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className="bg-slate-900 p-4 text-white shadow-lg transition-all hover:bg-[var(--orange)]"
                    >
                      <Plus className="h-6 w-6 stroke-[3px]" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-16 flex justify-center">
          <div className="custom-pagination-line flex h-1 w-full max-w-[240px] gap-2" />
        </div>
      </div>

      <style>{`
        .custom-pagination-line .swiper-pagination-bullet {
          flex: 1;
          height: 100%;
          border-radius: 0;
          background: #cbd5e1;
          opacity: 1;
          margin: 0 !important;
          transition: all 0.4s ease;
        }

        .custom-pagination-line .swiper-pagination-bullet-active {
          background: var(--orange) !important;
          flex: 2.5;
        }
      `}</style>
    </section>
  );
}