import type { Metadata } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veerha — Hire intelligence, not software.",
  description:
    "Veerha is the shared brain behind your AI workforce. Specialized AI employees that capture leads, close sales, support customers, run operations — connected to one memory. Veerha AI Studio builds custom AI sales infrastructure around your own systems.",
  metadataBase: new URL("https://veerha.com"),
  openGraph: {
    title: "Veerha — Hire intelligence, not software.",
    description:
      "The operating system for a company whose employees are AI.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${serif.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#08060F] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
