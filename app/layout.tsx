import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CleanApp I Landing Page",
  description: "CleanApp I Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="!scroll-smooth !scroll-pt-10"
      suppressHydrationWarning
    >
      <head />
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
