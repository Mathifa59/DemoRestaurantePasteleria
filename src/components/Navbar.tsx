"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Creaciones", href: "#desserts" },
  { label: "Nosotros", href: "#about" },
  { label: "Carta", href: "#menu" },
  { label: "Galería", href: "#gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FFF6EE]/90 backdrop-blur-md shadow-[0_2px_30px_rgba(139,94,74,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
              <span className="font-heading text-xl text-primary font-semibold">
                M
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl tracking-wide text-primary font-semibold leading-tight">
                Maison Délice
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted font-body font-medium">
                Pâtisserie de Autor
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-body font-medium text-muted hover:text-primary transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#order"
              className="ml-4 px-7 py-2.5 bg-accent text-white text-sm font-body font-medium rounded-full hover:bg-hover transition-all duration-300 shadow-[0_4px_20px_rgba(232,154,174,0.3)] hover:shadow-[0_6px_25px_rgba(185,122,86,0.3)] hover:-translate-y-0.5"
            >
              Ordenar ahora
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#FFF6EE]/95 backdrop-blur-md border-t border-primary/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-body font-medium text-muted hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#order"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-7 py-3 bg-accent text-white text-sm font-body font-medium rounded-full text-center hover:bg-hover transition-all duration-300"
              >
                Ordenar ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
