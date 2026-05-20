import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const delight = localFont({
  src: "../public/fonts/delight-vf.ttf",
  variable: "--font-delight-local",
});

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi-local",
});

export const metadata: Metadata = {
  title: "Thumbstack.",
  description: "Designing and building meaningful digital experiences.",
};

import SmoothScroll from "./components/layout/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${delight.variable} ${satoshi.variable} h-full antialiased w-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white overflow-x-hidden" suppressHydrationWarning>
        <SmoothScroll>
          <main className="flex-1 flex flex-col bg-white w-full">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
