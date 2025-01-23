import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stedy",
  description: "Am Stedy and this is a brief and simple illustration of who I am and what I do.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
