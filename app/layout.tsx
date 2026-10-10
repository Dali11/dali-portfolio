import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dalitso — Developer, Builder, Creator",
  description:
    "Portfolio of Dalitso, an independent developer from Malawi building digital products, data platforms and intelligent systems.",
  applicationName: "Dalitso Portfolio",
  openGraph: {
    title: "Dalitso — Developer, Builder, Creator",
    description: "Ideas into interfaces. Vision into software.",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f5ee"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
