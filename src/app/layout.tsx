import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import StartWithUs from "@/components/common/StartWithUs";
import { siteConfig } from "@/config/site";
import "@/styles/animation.css";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { Toaster } from "sonner";

const fontFamily = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.metadata.defaultName,
  description: siteConfig.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontFamily.className}>
        <Navbar />
        <div className="mt-24 md:mt-24 xl:mt-[100px] min-h-[calc(100vh-300px)]">
          {children}
        </div>
        <StartWithUs />
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
