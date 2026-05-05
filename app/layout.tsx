import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white overflow-x-hidden" suppressHydrationWarning>
        <SmoothScroll>
          <Sidebar />
          <main className="flex-1 flex flex-col bg-white">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
