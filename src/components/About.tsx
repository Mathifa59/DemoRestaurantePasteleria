"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-36 bg-white/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side — editorial layout */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(139,94,74,0.12)]">
              <Image
                src="https://images.unsplash.com/photo-1607478900766-efe13248b125?w=800&q=80"
                alt="Chef pastelera trabajando"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-8 -right-4 lg:-right-8 bg-white rounded-2xl p-6 shadow-[0_10px_40px_rgba(139,94,74,0.1)] max-w-[220px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-delicate/50 flex items-center justify-center">
                  <span className="font-heading text-2xl text-primary">✦</span>
                </div>
                <div>
                  <p className="font-heading text-2xl font-semibold text-primary leading-none">
                    12
                  </p>
                  <p className="text-xs text-muted font-body">
                    Años de pasión
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted font-body leading-relaxed">
                Formación en Le Cordon Bleu, París.
              </p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-xs font-body font-medium tracking-[0.3em] uppercase text-accent mb-4">
              Nuestra Historia
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-primary leading-tight">
              Tradición francesa,
              <br />
              <span className="italic">alma artesanal</span>
            </h2>

            <div className="mt-10 space-y-6">
              <p className="text-muted font-body font-light text-base leading-relaxed">
                Maison Délice nació de un sueño: traer la esencia de la
                pâtisserie parisina a nuestra ciudad, sin perder la calidez de
                lo hecho a mano. Cada mañana, nuestro equipo transforma
                ingredientes selectos en pequeñas obras de arte.
              </p>
              <p className="text-muted font-body font-light text-base leading-relaxed">
                Mantequilla francesa de Normandía, vainilla de Madagascar,
                chocolate belga de origen único. No hacemos concesiones porque
                cada bocado cuenta una historia de dedicación y amor por el
                oficio.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-12 flex items-center gap-5">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-card">
                <Image
                  src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&q=80"
                  alt="Chef Claire Dubois"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-heading text-lg font-semibold text-primary">
                  Claire Dubois
                </p>
                <p className="text-sm text-muted font-body">
                  Chef Pâtissière & Fundadora
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mt-14 grid grid-cols-3 gap-6">
              {[
                { icon: "🌾", title: "Natural", desc: "Sin aditivos" },
                { icon: "🎨", title: "Artesanal", desc: "Hecho a mano" },
                { icon: "✨", title: "Premium", desc: "Ingredientes selectos" },
              ].map((v) => (
                <div
                  key={v.title}
                  className="text-center p-4 rounded-2xl bg-background/80"
                >
                  <span className="text-2xl">{v.icon}</span>
                  <p className="font-heading text-sm font-semibold text-primary mt-2">
                    {v.title}
                  </p>
                  <p className="text-xs text-muted font-body mt-1">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
