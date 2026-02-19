import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Strokeline Design Services | Boutique Financial Publishing & Localization",
  description: "Ultra-premium design and publishing services specializing in Financial Publishing, Language Localization, and Digital Conversion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <div className="noise-overlay"></div>
        {children}
      </body>
    </html>
  );
}
