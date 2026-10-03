import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://onyxclub-fitness.com"),
  title: "ONYX CLUB | High Performance Athletic Sanctuary",
  description:
    "An editorial, high-performance athletic club engineered for raw power, Olympic lifting, and uncompromising functional conditioning.",
  keywords: [
    "fitness",
    "gym",
    "functional training",
    "crossfit",
    "powerlifting",
    "athletic club",
    "bodybuilding",
    "strength and conditioning",
    "brooklyn gym",
  ],
  authors: [{ name: "ONYX CLUB" }],
  openGraph: {
    title: "ONYX CLUB | High Performance Athletic Sanctuary",
    description:
      "An editorial, high-performance athletic club engineered for raw power, Olympic lifting, and uncompromising functional conditioning.",
    url: "https://onyxclub-fitness.com",
    siteName: "ONYX CLUB",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "ONYX Athletic Sanctuary",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ONYX CLUB | High Performance Athletic Sanctuary",
    description: "Raw power, Olympic lifting, and functional athletic conditioning.",
    images: ["/images/hero-1.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable} scroll-smooth`}>
      <body className="bg-black text-white antialiased overflow-x-hidden selection:bg-accent selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
