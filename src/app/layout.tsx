import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs Social Media App",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ layout: { unsafe_disableDevelopmentModeWarnings: true, }, }}>
      <html lang="en">
        <body className={inter.className}>
          <div className="w-full bg-white">
            <div className="px-5 md:px-8 lg:px-10 max-w-7xl mx-auto">
              <Navbar />
            </div>
          </div>
          <div className="w-full bg-slate-100">
            <div className="px-5 md:px-8 lg:px-10 max-w-7xl mx-auto">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}