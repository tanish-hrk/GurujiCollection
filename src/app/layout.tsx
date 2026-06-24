import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guru Ji Collection - Style That Speaks For You",
  description: "Premium Indian ethnic wear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-dark-text">
        {children}
      </body>
    </html>
  );
}
