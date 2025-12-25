import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/lib/routing';
import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Marina Kotelevskaya - Senior SAP ERP/BI Consultant - Integration Solutions & Automation Specialist",
  description: "Senior SAP ERP/BI Consultant specializing in integration architecture, automation, and enterprise solutions.",
  openGraph: {
    title: "Marina Kotelevskaya - Senior SAP ERP/BI Consultant",
    description: "Integration Solutions & Automation Specialist with expertise in SAP ERP/BI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marina Kotelevskaya - Senior SAP ERP/BI Consultant",
    description: "Integration Solutions & Automation Specialist",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

