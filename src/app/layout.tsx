import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "La Metta Yoga",
  description: "Yoga in Zürich – in-person & online classes with Stefanie",
  openGraph: {
    title: "La Metta Yoga",
    description: "Yoga in Zürich – in-person & online classes with Stefanie",
    images: ["/images/about_me.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={bricolage.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
