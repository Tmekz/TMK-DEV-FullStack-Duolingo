import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TMK-DEV Fullstack Duolingo Clone",
  description: "TMK-DEV presents you THE Fullstack Duolingo Clone using NextJS, React,TailwindCSS, Drizzle, Stripe...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
