import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "Gonçalo Pereira | Software Engineer",
  description: "Ich entwickle performante Web-Anwendungen, die technisch solide sind und sich gut anfühlen.",
  keywords: ["Software Engineer", "Webentwicklung", "React", "Next.js", "Portfolio", "Gonçalo Pereira"],
  authors: [{ name: "Gonçalo Pereira" }],
  creator: "Gonçalo Pereira",
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "https://goncalopereira.com",
    title: "Gonçalo Pereira | Software Engineer",
    description: "Ich entwickle performante Web-Anwendungen, die technisch solide sind und sich gut anfühlen.",
    siteName: "Gonçalo Pereira Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
