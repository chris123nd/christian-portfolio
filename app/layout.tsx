import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christian Simangunsong | Software Engineer",
  description: "Portfolio of Christian Simangunsong, a Software Engineering Technology student and full-stack developer from Indonesia.",
  keywords: ["Christian Simangunsong", "software engineer", "full-stack developer", "UI/UX designer", "Institut Teknologi Del"],
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
