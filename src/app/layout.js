import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Care Assist",
  description: "A journey of care and connection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-7xl mx-auto bg-[#F7FAFE] relative`}
      >
        {children}
      </body>
    </html>
  );
}
