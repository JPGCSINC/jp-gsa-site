import "../styles.css";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "JP Government Contract Services, Inc.",
  description: "GSA MAS Consulting Services for Small Businesses",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <header className="p-4 border-b mb-6 flex flex-col items-center">
          <Image src="/logo.jpg" alt="JP Government Contract Services Logo" width={160} height={160} className="mb-2" />
          <nav className="flex gap-6 justify-center text-lg font-medium text-[#1f4f8a]">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>
        {children}
        <footer className="bg-[#d8cc46] text-center text-black py-4 mt-12">
          <p className="text-sm">© {new Date().getFullYear()} JP Government Contract Services, Inc. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
