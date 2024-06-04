import type { Metadata } from "next";
import { Nunito_Sans as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Zillow clone",
  description: "Clone site for zillow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        {children}
      </body>
    </html>
  );
}
