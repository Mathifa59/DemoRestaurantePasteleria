"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Valentina Reyes",
    role: "Arquitecta",
    text: "Cada torta que he encargado ha sido una obra de arte. La Tarte Framboise Royale es simplemente perfecta. No vuelvo a comprar en otro lugar.",
    rating: 5,
    initials: "VR",
  },
  {
    name: "Andrés Montoya",
    role: "Sommelier",
    text: "Como profesional del sabor, reconozco cuando los ingredientes son de primera. Maison Délice tiene un nivel que no encuentras fácilmente. Excepcional.",
    rating: 5,
    initials: "AM",
  },
  {
    name: "Camila Fuentes",
    role: "Wedding Planner",
    text: "Mis novias siempre quedan encantadas. La presentación, el sabor, el servicio... todo impecable. Mi aliada imprescindible para cada celebración.",
    rating: 5,
    initials: "CF",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Testimonials() {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-body font-medium tracking-[0.3em] uppercase text-accent mb-4">
            Testimonios
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary">
            Lo que dicen <span className="italic">nuestros clientes</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              className="group bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_40px_rgba(139,94,74,0.06)] hover:shadow-[0_12px_50px_rgba(139,94,74,0.1)] transition-all duration-500 relative"
            >
              {/* Decorative quote */}
              <span className="absolute top-6 right-8 font-heading text-7xl text-card/80 leading-none select-none">
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-delicate fill-delicate"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted font-body font-light text-sm leading-relaxed relative z-10 min-h-[100px]">
                {t.text}
              </p>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-primary/5">
                <div className="w-12 h-12 rounded-full bg-card/60 flex items-center justify-center">
                  <span className="font-heading text-sm font-semibold text-primary">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-body font-medium text-primary text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted font-body">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
