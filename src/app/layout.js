// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import { Space_Mono } from "next/font/google";
import "../styles/globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata = {
  title: "Benedict Hong's Portfolio",
  keywords: "Benedict Hong, Portfolio, Web Developer, Software Engineer, Next.js, React, JavaScript, TypeScript, CSS, HTML",
  authors: [{ name: "Benedict Hong", url: "https://benedicthong.vercel.app/" }],
  description: "Showcasing the projects and skills of Benedict Hong, a web developer and software engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        {children}
      </body>
    </html>
  );
}
