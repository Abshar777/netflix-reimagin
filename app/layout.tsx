import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Dashbord from "./context/contextapi";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Dashbord>
          {children}
        </Dashbord>
      </body>
    </html>
  );
}
