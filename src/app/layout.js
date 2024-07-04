import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({weight: ['400', '500', '700'], subsets: ['latin']});

export const metadata = {
  title: {
    default: 'Next-Hero-Website',
    template: '%s || Next-Hero'
  },
  description: "Super Powerful Next Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <footer className="py-4 text-center font-bold text-2xl text-white bg-red-500">Hello, I am common Footer Section.</footer>
      </body>
    </html>
  );
}