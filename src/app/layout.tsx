import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maison Délice — Pâtisserie de Autor",
  description:
    "Pastelería boutique de autor. Creaciones artesanales elaboradas con ingredientes selectos y técnica francesa contemporánea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        {children}
      </body>
    </html>
  );
}
