"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558326567-98ae2405596b?w=1920&q=80"
          alt="Pasteles artesanales"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF6EE]/95 via-[#FFF6EE]/80 to-[#FFF6EE]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF6EE] via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl pt-32 pb-20 lg:pt-40 lg:pb-32">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/80 backdrop-blur-sm mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-body font-medium text-muted tracking-wide uppercase">
              Pastelería Artesanal
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-primary leading-[1.05] tracking-tight"
          >
            Donde el arte
            <br />
            se hace{" "}
            <span className="italic text-accent">dulce</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 text-lg sm:text-xl text-muted font-body font-light leading-relaxed max-w-lg"
          >
            Creaciones artesanales elaboradas con ingredientes selectos y la
            delicadeza de la técnica francesa contemporánea.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href="#order"
              className="group px-10 py-4 bg-accent text-white font-body font-medium rounded-full hover:bg-hover transition-all duration-300 shadow-[0_8px_30px_rgba(232,154,174,0.35)] hover:shadow-[0_12px_40px_rgba(185,122,86,0.35)] hover:-translate-y-0.5 text-base"
            >
              Hacer un pedido
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
            <a
              href="#desserts"
              className="px-10 py-4 border-2 border-primary/20 text-primary font-body font-medium rounded-full hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-base"
            >
              Ver creaciones
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-20 flex gap-12"
          >
            {[
              { number: "12+", label: "Años de experiencia" },
              { number: "50+", label: "Creaciones únicas" },
              { number: "3K+", label: "Clientes felices" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-heading text-3xl lg:text-4xl font-semibold text-primary">
                  {stat.number}
                </span>
                <span className="text-xs text-muted font-body mt-1 tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
