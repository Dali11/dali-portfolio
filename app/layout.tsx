import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dalitso Kamphani — Developer, Builder, Creator",
    template: "%s | Dalitso Kamphani",
  },
  description:
    "I build digital products that solve real problems. Explore my work across web development, data platforms, geospatial intelligence, and AI integration.",
  applicationName: "Dalitso Portfolio",
  openGraph: {
    title: "Dalitso Kamphani — Digital Products That Solve Real Problems",
    description:
      "From data platforms and geospatial intelligence to modern web applications, I turn complex ideas into useful digital experiences.",
    type: "website",
    locale: "en_MW",
    siteName: "Dalitso Kamphani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dalitso Kamphani — Developer, Builder, Creator",
    description:
      "Digital products, data platforms, geospatial intelligence, and modern web applications.",
  },
};;

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
