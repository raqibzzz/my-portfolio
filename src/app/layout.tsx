import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { LenisProvider } from "@/components/motion/LenisProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const SITE_URL = "https://raqibmuktadir.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Raqib Muktadir — AI Developer · Builder",
    template: "%s · Raqib Muktadir",
  },
  description:
    "AI developer shipping automation systems, LLM-powered tools, and full-stack applications. Co-founder of 555(STUDIOS), based in Montréal.",
  keywords: [
    "Raqib Muktadir",
    "AI Developer",
    "Test Automation",
    "Full-Stack Developer",
    "555 Studio",
    "Montreal",
    "Matrox",
  ],
  authors: [{ name: "Raqib Muktadir", url: SITE_URL }],
  creator: "Raqib Muktadir",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Raqib Muktadir — AI Developer · Builder",
    description:
      "AI developer shipping automation systems, LLM-powered tools, and full-stack applications. Co-founder of 555(STUDIOS).",
    siteName: "Raqib Muktadir",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raqib Muktadir — AI Developer · Builder",
    description: "AI developer shipping automation systems, LLM tools, and full-stack apps.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-black text-white antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
