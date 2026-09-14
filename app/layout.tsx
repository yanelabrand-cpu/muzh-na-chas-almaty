import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Муж на час 24/7 — ремонт по дому в Алматы",
  description:
    "Муж на час в Алматы: сантехника, электрика, мебель, бытовой ремонт. Выезд в день обращения, работаем круглосуточно. Звоните или пишите в WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
