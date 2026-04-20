"use client";

import { Camera, Heart, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand + Social */}
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <span className="font-heading text-lg text-white font-semibold">M</span>
            </div>
            <div>
              <span className="font-heading text-lg text-white font-semibold leading-tight">Maison Délice</span>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-white/40 font-body">Pastelería de Autor</span>
            </div>
            <div className="flex gap-2 ml-4">
              {[Camera, Heart, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                  <Icon size={13} className="text-white/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Links + Contact inline */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm font-body text-white/50">
            <div className="flex flex-col gap-1.5">
              <span className="text-white/80 font-medium text-xs uppercase tracking-wide mb-1">Explorar</span>
              {["Creaciones", "Nosotros", "La carta", "Galería"].map((link) => (
                <a key={link} href="#" className="hover:text-white transition-colors duration-300 text-xs">{link}</a>
              ))}
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-white/80 font-medium text-xs uppercase tracking-wide mb-1">Contacto</span>
              <span className="text-xs">+51 1 234 5678</span>
              <span className="text-xs">hola@maisondelice.pe</span>
              <span className="text-xs">Av. La Mar 1234, Miraflores</span>
              <span className="text-xs">Lima, Perú</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-5 border-t border-white/10">
          <p className="text-[11px] font-body text-white/30">
            &copy; 2026 Maison Délice. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
