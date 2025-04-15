import "../styles.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "JP Government Contract Services, Inc.",
  description: "GSA MAS Consulting Services for Small Businesses",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  );
}
