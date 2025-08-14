import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Property Finder",
  description: "Browse properties for sale and rent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b">
            <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
              <Link href="/" className="font-semibold">Property Finder</Link>
              <nav className="text-sm text-gray-600">
                <Link href="/" className="hover:underline">Home</Link>
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t">
            <div className="max-w-6xl mx-auto p-4 text-sm text-gray-600">© {new Date().getFullYear()} Property Finder</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
