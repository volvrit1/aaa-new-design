import type { Metadata } from "next";
import { Cabin, Urbanist, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/common/Navbar";
import Footer from "@/app/components/common/Footer";

const urbanist = Urbanist({
  variable: "--font-urbanist", // Custom CSS variable
  subsets: ["latin"], // Optional: subsets to load
  weight: ["400", "500", "600"], // Optional: specify the font weights you want
});

const cabin = Cabin({
  variable: "--font-cabin", // Custom CSS variable
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"], // Optional: include styles like italic if needed
});

const inter = Inter({
  variable: "--font-inter", // Custom CSS variable
  subsets: ["latin"], // Subsets to include (you can add more if needed)
  weight: ["400", "500", "600"], // Available font weights
  style: ["normal", "italic"], // Optional: include styles like italic if needed
});

export const metadata: Metadata = {
  title: "Above All Agency",
  description: "Above All Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cabin.variable} ${urbanist.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
