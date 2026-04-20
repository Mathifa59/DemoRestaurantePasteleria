"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Sparkles } from "lucide-react";

const desserts = [
  {
    name: "Torta de frutos rojos y vainilla",
    description: "Bizcocho suave de vainilla, crema ligera y compota de frutos rojos frescos.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
    tag: "Más vendida",
    price: "S/ 118",
  },
  {
    name: "Torta de chocolate belga",
    description: "Capas de bizcocho intenso de cacao con ganache sedosa y acabado brillante.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    tag: "Creación del chef",
    price: "S/ 124",
  },
  {
    name: "Cheesecake de maracuyá",
    description: "Cremoso cheesecake horneado con cobertura de maracuyá y base crocante de mantequilla.",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800&q=80",
    tag: "Favorito",
    price: "S/ 112",
  },
  {
    name: "Box de 6 macarons",
    description: "Sabores surtidos: vainilla, frambuesa, pistacho, chocolate, limón y café.",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&q=80",
    tag: "Más vendida",
    price: "S/ 32",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function SignatureDesserts() {
  return (
    <section id="desserts" className="py-16 lg:py-20 bg-background">
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
            Nuestras Estrellas
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary">
            Creaciones <span className="italic">Exclusivas</span>
          </h2>
          <p className="mt-6 text-muted font-body font-light text-lg max-w-2xl mx-auto leading-relaxed">
            Cada pieza es una obra de arte comestible, elaborada con pasión y los
            ingredientes más selectos del mundo.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {desserts.map((dessert, i) => (
            <motion.article
              key={dessert.name}
              variants={itemVariants}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_40px_rgba(139,94,74,0.06)] hover:shadow-[0_12px_50px_rgba(139,94,74,0.12)] transition-all duration-500 ${
                i === 0 || i === 3 ? "md:row-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
                <Image
                  src={dessert.image}
                  alt={dessert.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

                {/* Tag */}
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-body font-medium text-primary">
                    {dessert.tag === "Más vendida" ? (
                      <Star size={12} className="text-warm fill-warm" />
                    ) : (
                      <Sparkles size={12} className="text-accent" />
                    )}
                    {dessert.tag}
                  </span>
                </div>

                {/* Price badge */}
                <div className="absolute top-5 right-5">
                  <span className="px-4 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-white text-sm font-body font-medium">
                    {dessert.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-heading text-2xl font-semibold text-primary group-hover:text-hover transition-colors duration-300">
                  {dessert.name}
                </h3>
                <p className="mt-3 text-muted font-body font-light text-sm leading-relaxed">
                  {dessert.description}
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <a
                    href="#order"
                    className="text-sm font-body font-medium text-accent hover:text-hover transition-colors duration-300 group/link flex items-center gap-1"
                  >
                    Ordenar
                    <span className="inline-block group-hover/link:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
