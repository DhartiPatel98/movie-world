import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Salsa } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Providers from "./Providers";

config.autoAddCss = false;

const salsa = Salsa({ subsets: ["latin"], weight: "400", preload: true });

export const metadata: Metadata = {
  title: "Movie World",
  description: "Website to search for any movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`box-border min-h-screen ${salsa.className}`}>
        <Providers>
          <div className="px-6 lg:px-28">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
