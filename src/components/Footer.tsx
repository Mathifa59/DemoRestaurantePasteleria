"use client";

import { Camera, Heart, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="font-heading text-xl text-white font-semibold">
                  M
                </span>
              </div>
              <div>
                <span className="font-heading text-xl text-white font-semibold block leading-tight">
                  Maison Délice
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-body">
                  Pâtisserie de Autor
                </span>
              </div>
            </div>
            <p className="font-body font-light text-sm leading-relaxed text-white/60 max-w-sm">
              Creaciones artesanales que transforman ingredientes selectos en
              momentos inolvidables. Tradición francesa con alma local.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-8">
              {[Camera, Heart, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <Icon size={16} className="text-white/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-6 tracking-wide">
              Explorar
            </h4>
            <ul className="space-y-3">
              {["Creaciones", "Nuestra historia", "La carta", "Galería"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-body text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-6 tracking-wide">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm font-body text-white/50">
              <li>+56 9 1234 5678</li>
              <li>hola@maisondelice.cl</li>
              <li>Av. Providencia 1234</li>
              <li>Santiago, Chile</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs font-body text-white/30">
            &copy; 2026 Maison Délice. Todos los derechos reservados.
          </p>
          <p className="text-xs font-body text-white/30">
            Hecho con amor y mantequilla francesa
          </p>
        </div>
      </div>
    </footer>
  );
}
