import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const gentiumPlus = localFont({
//   src:[
//     {
//       path: './fonts/GentiumPlus-Regular.ttf',
//       weight: '400',
//       style: 'regular'
//     },
//     {
//       path: './fonts/GentiumPlus-BoldItalic-ttf',
//       weight: '700',
//       style: 'bold-italic'
//     },
//     {
//       path: './fonts/GentiumPlus-Italic.ttf',
//       weight: '400',
//       style: 'italic'
//     },
//     {
//       path: './fonts/GentiumPlus-Bold.ttf',
//       weight: '700',
//       style: 'bold'
//     },
//   ],
//   variable: '--font-gentium-plus'
// })



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
