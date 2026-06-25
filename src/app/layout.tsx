import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Guru Ji Collection - Style That Speaks For You",
  description:
    "Premium Indian ethnic wear - Kurti, Suits, Cord Sets, Palazzo, Dupatta and more. Shop the latest fashion at Guru Ji Collection.",
  keywords: "kurti, suits, cord sets, palazzo, dupatta, ethnic wear, indian fashion",
  openGraph: {
    title: "Guru Ji Collection",
    description: "Style That Speaks For You",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-dark-text font-poppins">
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#4A3932",
              color: "#FAF8F6",
              fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
            },
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
