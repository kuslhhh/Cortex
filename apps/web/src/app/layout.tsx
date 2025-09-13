import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const bricolage = Bricolage_Grotesque({
   variable: "--font-bricolage",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Cortex",
   description: "A second brain for you",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={`${bricolage.variable} antialiased`}>
            <Script
               src="https://platform.twitter.com/widgets.js"
               strategy = "lazyOnload"
               charSet="utf-8"
            />

            {children}
         </body>
      </html>
   );
}