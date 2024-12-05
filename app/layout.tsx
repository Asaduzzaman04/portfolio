import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./Provider";
import Nabvar from "@/components/Nabvar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Asad's portfolio",
  description:
    "Explore the portfolio of Asaduzzaman Asad, a skilled Front-End Web Developer specializing in React, Tailwind CSS, and modern web technologies. Discover innovative projects that combine creativity and functionality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body
      className={`dark ${geistSans.variable} ${geistMono.variable} antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        <nav className="relative w-full flex justify-center item-center z-50">
        <Nabvar/>

        </nav>
        {children}
      </ThemeProvider>
    </body>
  </html>
  );
}
