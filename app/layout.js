import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GT Support",
  description: "HS Chat Support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <SessionProvider session={session}> */}
      <body className={inter.className}>{children}</body>
      {/* </SessionProvider> */}
    </html>
  );
}
