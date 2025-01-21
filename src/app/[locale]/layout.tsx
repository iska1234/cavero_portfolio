import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider"
import { ReactNode } from "react";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portafolio Cavero | Transformando ideas en realidad con código y diseño",
  description: "Descubre el portafolio de un desarrollador full-stack apasionado. Explora proyectos innovadores y artículos sobre React.js y desarrollo web",
  alternates: {
    canonical: "https://cavero-portfolio.vercel.app",
    languages: {
       es: "https://cavero-portfolio.vercel.app/es",
       en:"https://cavero-portfolio.vercel.app/en"
    }
  },
};

type Props = {
  children: ReactNode;
  params: { locale: string }
}

export default async function RootLayout({
  children, params: { locale }
}: Props) {

  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <Head>
        <title>{metadata.title?.toString()}</title>
        <meta name="description" content={metadata.description!}/>
        <link rel="canonical" href={typeof metadata.alternates?.canonical === "string" ? metadata.alternates.canonical : undefined} />
      </Head>
      <AnimatePresence mode="wait">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </AnimatePresence>
    </html>
  );
}
