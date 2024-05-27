import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Providers from "./Providers";

config.autoAddCss = false;

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
      <body className="box-border min-h-screen">
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
