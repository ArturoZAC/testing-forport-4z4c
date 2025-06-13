import type { Metadata } from "next";
import { montserrat } from "@/config/fonts";
import "./globals.css";
import 'animate.css';

export const metadata: Metadata = {
  title: "Portafolio 4z4c",
  description: "Construido por el dev 4z4c :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased text-secondary scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
