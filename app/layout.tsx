import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const delight = localFont({
  src: "../public/fonts/delight-vf.ttf",
  variable: "--font-delight-local",
});

export const metadata: Metadata = {
  title: "Thumbstack.",
  description: "Designing and building meaningful digital experiences.",
};

import SmoothScroll from "./components/layout/SmoothScroll";
import Sidebar from "./components/layout/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${delight.variable} h-full antialiased w-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white overflow-x-hidden" suppressHydrationWarning>
        <SmoothScroll>
          <Sidebar />
          <main className="flex-1 flex flex-col bg-white w-full">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
