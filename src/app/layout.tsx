import type { Metadata } from "next";
import { Cabin, Urbanist, Inter, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/common/Navbar";
import Footer from "@/app/components/common/Footer";

const urbanist = Urbanist({
  variable: "--font-urbanist", // Custom CSS variable
  subsets: ["latin"], // Optional: subsets to load
  weight: ["400", "500", "600"], // Optional: specify the font weights you want
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Choose the weights you need
  variable: "--font-roboto", // Define a CSS variable for use in Tailwind
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Choose the weights you need
  variable: "--font-poppins", // Define a CSS variable for use in Tailwind
  display: "swap",
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

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Navbar />
        <div id="modal-root"></div>
        {children}
        <Footer />
        <ToastContainer
          rtl={false}
          autoClose={2000}
          newestOnTop={true}
          position="top-right"
          hideProgressBar={false}
        />
      </body>
    </html>
  );
}
