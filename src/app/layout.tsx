import type React from "react";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers";
import { FloatingCursor } from "@/components";
import { Navbar, Footer } from "@/layouts";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mono - MINIMAL BRUTALIST DESIGN",
  description:
    "We create minimalist digital experiences that make an impact. Raw, unfiltered, and straight to the point.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Site-wide Navbar */}
          <Navbar />
          <main>{children}</main>
          {/* Site-wide Footer */}
          <Footer />
          {/* Optional cursor */}
          {/* <FloatingCursor /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
