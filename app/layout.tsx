import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_component/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Seyam",
  description: "Generated by E-Seyam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}</body>
    </html>
  );
}
