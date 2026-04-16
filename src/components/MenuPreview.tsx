"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const categories = [
  {
    name: "Tartas & Tartaletas",
    items: [
      { name: "Tarte au Citron Meringuée", price: "$9.800", note: "Merengue italiano" },
      { name: "Tarte Tatin Classique", price: "$10.500", note: "Manzanas caramelizadas" },
      { name: "Tarte Framboise Royale", price: "$12.500", note: "Vainilla de Madagascar", popular: true },
      { name: "Tarte Chocolat Noir", price: "$11.200", note: "Chocolate 72% cacao" },
    ],
  },
  {
    name: "Éclairs & Choux",
    items: [
      { name: "Éclair Caramel Beurre Salé", price: "$8.900", note: "Caramelo bretón", popular: true },
      { name: "Éclair Vanille Tonka", price: "$8.500", note: "Haba tonka" },
      { name: "Paris-Brest", price: "$9.200", note: "Praliné de avellanas" },
      { name: "Religieuse au Café", price: "$7.800", note: "Café arábica" },
    ],
  },
  {
    name: "Entremets & Mousses",
    items: [
      { name: "Entremet Passion & Coco", price: "$16.200", note: "Mousse exótica", popular: true },
      { name: "Opéra Classique", price: "$14.800", note: "Chocolate & café" },
      { name: "Fraisier de Saison", price: "$15.500", note: "Fresas de temporada" },
      { name: "Mousse Chocolat Blanc & Yuzu", price: "$13.900", note: "Cítrico japonés" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
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
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-body font-medium tracking-[0.3em] uppercase text-accent mb-4">
            La Carta
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary">
            Nuestra <span className="italic">Carte</span>
          </h2>
          <p className="mt-6 text-muted font-body font-light text-lg max-w-2xl mx-auto">
            Una selección cuidada de nuestras creaciones más emblemáticas.
          </p>
        </motion.div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: ci * 0.15,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="bg-white rounded-3xl p-8 shadow-[0_4px_40px_rgba(139,94,74,0.06)]"
            >
              {/* Category name */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-card/60 flex items-center justify-center">
                  <Leaf size={16} className="text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary">
                  {cat.name}
                </h3>
              </div>

              {/* Items */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-0"
              >
                {cat.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    className="group py-5 border-b border-primary/5 last:border-b-0"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-body font-medium text-primary text-sm group-hover:text-hover transition-colors duration-300">
                            {item.name}
                          </h4>
                          {item.popular && (
                            <span className="px-2 py-0.5 text-[10px] font-body font-medium bg-delicate/50 text-primary rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted/70 font-body mt-1">
                          {item.note}
                        </p>
                      </div>
                      <span className="font-body font-semibold text-sm text-primary whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-14 text-sm text-muted/60 font-body font-light"
        >
          Precios en CLP. Menú sujeto a disponibilidad de temporada.
        </motion.p>
      </div>
    </section>
  );
}
