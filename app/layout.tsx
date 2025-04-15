import "../styles.css";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "JP Government Contract Services, Inc.",
  description: "GSA MAS Consulting Services for Small Businesses",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <header className="p-4 border-b mb-6">
          <nav className="flex gap-6 justify-center text-lg font-medium">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
