import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Immobilien",
  description: "Real Estate Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${inter.className} font-montserrat flex flex-col  antialiased`}
      >
        <Navbar />
        <main className="flex-grow w-full mx-auto px-5  bg-slate-100">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
