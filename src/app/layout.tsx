import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raphael Roybee Salim",
  description: "Portfolio of Raphael Roybee Salim — Data Science & AI",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}