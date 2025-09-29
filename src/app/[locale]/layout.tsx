import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { montserrat } from "@/config/fonts";
import { routing } from "@/i18n/routing";

import "animate.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio 4Z4C",
  description: "Construido por el dev 4z4c :)",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased text-secondary scroll-smooth`}
      >
        <NextIntlClientProvider>
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
