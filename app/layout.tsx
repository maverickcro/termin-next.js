import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termin",
  description: "Termini za sve!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="relative overflow-hidden">
          <nav>
            <Link href="/">Home</Link>
            <Link href="/termini">Termini</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
