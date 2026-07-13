import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sujith Suresh | AI & ML Portfolio",
  description: "Personal portfolio of Sujith Suresh, a B.Tech student specializing in Artificial Intelligence and Machine Learning. Showcasing projects in AI, full-stack development, and data analytics.",
  keywords: ["Sujith Suresh", "AI", "Machine Learning", "Portfolio", "Full Stack Developer", "Data Analytics"],
  authors: [{ name: "Sujith Suresh" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
