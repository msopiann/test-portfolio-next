import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Muhammad Sopian",
  description:
    "A comprehensive portfolio showcasing my skills and experience in web development.",
  keywords: ["portfolio", "web development", "programming", "frontend"],
  openGraph: {
    title: "Muhammad Sopian's Portfolio",
    description:
      "Explore my web development portfolio and see my skills in action.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#1e1e1e] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
