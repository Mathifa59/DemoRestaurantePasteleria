"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
    alt: "Macaron tower display",
    span: "md:col-span-2 md:row-span-2",
    height: "h-80 md:h-full",
  },
  {
    src: "https://images.unsplash.com/photo-1486427944544-d2c246c4df14?w=600&q=80",
    alt: "Chocolate croissants",
    span: "",
    height: "h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&q=80",
    alt: "Elegant pastry plating",
    span: "",
    height: "h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=600&q=80",
    alt: "Croissant close-up",
    span: "",
    height: "h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&q=80",
    alt: "Pastry chef at work",
    span: "",
    height: "h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1612203985729-70726954388c?w=800&q=80",
    alt: "Cake decoration detail",
    span: "md:col-span-2",
    height: "h-64 md:h-80",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 lg:py-36 bg-white/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-body font-medium tracking-[0.3em] uppercase text-accent mb-4">
            Visual
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary">
            Galería de <span className="italic">Inspiración</span>
          </h2>
          <p className="mt-6 text-muted font-body font-light text-lg max-w-2xl mx-auto">
            Momentos capturados de nuestro atelier. Cada imagen es una
            invitación a saborear.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-5"
        >
          {images.map((img) => (
            <motion.div
              key={img.alt}
              variants={itemVariants}
              className={`relative ${img.height} ${img.span} rounded-2xl overflow-hidden group cursor-pointer`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-sm font-body font-medium drop-shadow-lg">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
