import Footer from "./Footer";
import Navbar from "./Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rolling-Royals",
  description: "lorem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body className={inter.className}>
        <Navbar />
        <div className="h-20 md:h-24" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
