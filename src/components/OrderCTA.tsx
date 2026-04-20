"use client";

import { motion } from "framer-motion";
import { Phone, Clock, MapPin } from "lucide-react";

export default function OrderCTA() {
  return (
    <section
      id="order"
      className="py-16 lg:py-20 relative overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary via-[#7A5240] to-[#6B4535]" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(232,154,174,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(244,199,161,0.3) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs font-body font-medium tracking-[0.3em] uppercase text-warm/80 mb-4">
            Haz tu pedido
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            ¿Lista para endulzar
            <br />
            <span className="italic text-warm">tu próximo momento?</span>
          </h2>
          <p className="mt-8 text-white/70 font-body font-light text-lg max-w-2xl mx-auto leading-relaxed">
            Cada creación se prepara con dedicación exclusiva. Reserva con
            48 horas de anticipación para garantizar la frescura y perfección
            de tu pedido.
          </p>

          {/* CTA buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="group px-10 py-4 bg-accent text-white font-body font-medium rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_8px_30px_rgba(232,154,174,0.4)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.2)] text-base"
            >
              Ordenar por WhatsApp
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
            <a
              href="#"
              className="px-10 py-4 border-2 border-white/30 text-white font-body font-medium rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-300 text-base"
            >
              Ver catálogo completo
            </a>
          </div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Phone,
                title: "+51 1 234 5678",
                desc: "WhatsApp directo",
              },
              {
                icon: Clock,
                title: "Mar – Sáb, 9:00 – 19:00",
                desc: "Horario de atención",
              },
              {
                icon: MapPin,
                title: "Miraflores, Lima",
                desc: "Retiro en tienda o delivery",
              },
            ].map((info) => (
              <div
                key={info.title}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <info.icon size={22} className="text-warm" />
                <p className="font-body font-medium text-white text-sm">
                  {info.title}
                </p>
                <p className="text-xs text-white/50 font-body">{info.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
