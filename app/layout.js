import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pintura na horta do CAPS",
  description: "Projeto de pintura e terapia no CAPS de Nova Andradina.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}