import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christian Simangunsong",
  description: "Christian Simangunsong's Portfolio",
  generator: "vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
