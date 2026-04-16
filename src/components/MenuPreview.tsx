"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Sparkles, ChefHat, Heart, Gift } from "lucide-react";
import { menuItems, formatPrice, type HighlightLabel } from "@/data/menuData";

const badgeConfig: Record<HighlightLabel, { bg: string; icon: React.ReactNode }> = {
  "Best seller": { bg: "bg-delicate/50", icon: <Star size={10} className="fill-current" /> },
  "Edición limitada": { bg: "bg-card/50", icon: <Sparkles size={10} /> },
  "Chef's creation": { bg: "bg-warm/50", icon: <ChefHat size={10} /> },
  "Favorito": { bg: "bg-accent/15", icon: <Heart size={10} className="fill-current" /> },
  "Ideal para regalo": { bg: "bg-card/50", icon: <Gift size={10} /> },
};

// Mostrar solo los productos destacados como preview
const previewItems = menuItems.filter((item) => item.featured).slice(0, 6);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function MenuPreview() {
  return (
    <section id="menu" className="py-28 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-body font-medium tracking-[0.3em] uppercase text-accent mb-4">
            La Carta
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary">
            Nuestra <span className="italic">Carta</span>
          </h2>
          <p className="mt-6 text-muted font-body font-light text-lg max-w-2xl mx-auto leading-relaxed">
            Postres hechos a mano, pensados para celebrar lo cotidiano. Sabores
            delicados, ingredientes nobles y una vitrina creada para enamorar a
            primera vista.
          </p>
        </motion.div>

        {/* Preview grid — solo productos destacados */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {previewItems.map((item) => (
            <motion.article
              key={item.name}
              variants={itemVariants}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(139,94,74,0.06)] hover:shadow-[0_12px_40px_rgba(139,94,74,0.12)] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {item.highlightLabel && (
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-body font-medium text-primary backdrop-blur-sm ${badgeConfig[item.highlightLabel].bg}`}>
                      {badgeConfig[item.highlightLabel].icon}
                      {item.highlightLabel}
                    </span>
                  </div>
                )}

                <div className="absolute top-4 right-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-primary/85 backdrop-blur-sm text-white text-sm font-body font-semibold">
                    {formatPrice(item.price)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-primary group-hover:text-hover transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-muted font-body font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA — Ver carta completa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/carta"
            className="group inline-flex items-center gap-2 px-10 py-4 bg-accent text-white font-body font-medium rounded-full hover:bg-hover transition-all duration-300 shadow-[0_8px_30px_rgba(232,154,174,0.35)] hover:shadow-[0_12px_40px_rgba(185,122,86,0.35)] hover:-translate-y-0.5 text-base"
          >
            Ver carta completa
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
