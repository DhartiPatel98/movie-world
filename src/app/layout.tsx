import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Salsa } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/navbar/Navbar";
import SearchBox from "@/components/SearchBox";

config.autoAddCss = false;

const salsa = Salsa({ subsets: ["latin"], weight: "400", preload: true });

export const metadata: Metadata = {
  title: {
    default: "Home | Movie World",
    template: "%s | Movie World",
  },
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
            <Navbar />
            <SearchBox />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
