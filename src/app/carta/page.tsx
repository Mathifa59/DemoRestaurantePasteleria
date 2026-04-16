"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, Sparkles, ChefHat, Heart, Gift } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  categories,
  menuItems,
  formatPrice,
  type HighlightLabel,
} from "@/data/menuData";

const badgeConfig: Record<HighlightLabel, { bg: string; icon: React.ReactNode }> = {
  "Best seller": { bg: "bg-delicate/50", icon: <Star size={10} className="fill-current" /> },
  "Edición limitada": { bg: "bg-card/50", icon: <Sparkles size={10} /> },
  "Chef's creation": { bg: "bg-warm/50", icon: <ChefHat size={10} /> },
  "Favorito": { bg: "bg-accent/15", icon: <Heart size={10} className="fill-current" /> },
  "Ideal para regalo": { bg: "bg-card/50", icon: <Gift size={10} /> },
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function CartaPage() {
  const [activeCategory, setActiveCategory] = useState("tortas-enteras");
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      let nextIndex: number | null = null;
      if (e.key === "ArrowRight") { e.preventDefault(); nextIndex = (index + 1) % categories.length; }
      else if (e.key === "ArrowLeft") { e.preventDefault(); nextIndex = (index - 1 + categories.length) % categories.length; }
      else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveCategory(categories[index].slug); return; }
      if (nextIndex !== null) { tabsRef.current[nextIndex]?.focus(); setActiveCategory(categories[nextIndex].slug); }
    }, []
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-28 pb-10 lg:pt-32 lg:pb-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <span className="inline-block text-xs font-body font-medium tracking-[0.3em] uppercase text-accent mb-3">
                La Carta
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary">
                Nuestra <span className="italic">Carta</span>
              </h1>
              <p className="mt-4 text-muted font-body font-light text-base max-w-xl mx-auto leading-relaxed">
                Postres hechos a mano, pensados para celebrar lo cotidiano.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tabs */}
        <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-primary/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div
              role="tablist"
              aria-label="Categorías del menú"
              className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {categories.map((cat, index) => (
                <button
                  key={cat.slug}
                  ref={(el) => { tabsRef.current[index] = el; }}
                  role="tab"
                  id={`tab-${cat.slug}`}
                  aria-selected={activeCategory === cat.slug}
                  aria-controls={`tabpanel-${cat.slug}`}
                  tabIndex={activeCategory === cat.slug ? 0 : -1}
                  onClick={() => setActiveCategory(cat.slug)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={`whitespace-nowrap px-4 py-2 text-sm font-body font-medium rounded-full transition-all duration-300 shrink-0 ${
                    activeCategory === cat.slug
                      ? "bg-accent text-white shadow-[0_4px_15px_rgba(232,154,174,0.3)]"
                      : "text-muted hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                role="tabpanel"
                id={`tabpanel-${activeCategory}`}
                aria-labelledby={`tab-${activeCategory}`}
                variants={gridVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5"
              >
                {filteredItems.map((item) => (
                  <motion.article
                    key={item.name}
                    variants={cardVariants}
                    className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(139,94,74,0.05)] hover:shadow-[0_8px_30px_rgba(139,94,74,0.1)] transition-all duration-400 hover:-translate-y-0.5"
                  >
                    <div className="relative overflow-hidden h-36 sm:h-40">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent" />

                      {item.highlightLabel && (
                        <div className="absolute top-2.5 left-2.5">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-body font-medium text-primary backdrop-blur-sm ${badgeConfig[item.highlightLabel].bg}`}>
                            {badgeConfig[item.highlightLabel].icon}
                            {item.highlightLabel}
                          </span>
                        </div>
                      )}

                      <div className="absolute top-2.5 right-2.5">
                        <span className="px-2.5 py-1 rounded-full bg-primary/85 backdrop-blur-sm text-white text-xs font-body font-semibold">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-heading text-sm font-semibold text-primary group-hover:text-hover transition-colors duration-300 leading-snug">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-muted font-body font-light leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Nota */}
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-xs text-muted/50 font-body font-light">
              Precios en soles (S/). Menú sujeto a disponibilidad de temporada.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
