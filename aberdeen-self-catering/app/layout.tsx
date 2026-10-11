import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aberdeen Self Catering | Karoo Accommodation in Aberdeen",
  description:
    "Self-catering cottages, glamping and biker-friendly accommodation in historic Aberdeen, Eastern Cape. Pet-friendly, pool, Wi-Fi, secure parking and Check Mate Coffee Shop on site.",
  metadataBase: new URL("https://www.aberdeenselfcatering.co.za"),
  openGraph: {
    title: "Aberdeen Self Catering",
    description:
      "Stay, relax and explore the Karoo from welcoming self-catering accommodation in Aberdeen, Eastern Cape.",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "/",
  },
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
