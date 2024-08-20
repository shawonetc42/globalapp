import { Inter } from "next/font/google";
import "./globals.css";
import Menubar from "./Components/Landing-Page-1/Menubar/Menubar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "App Features - Discover What Makes Us Unique",
  description:
    "Explore the key features of our app that set us apart. Learn how our innovative solutions, user-friendly design, and powerful tools can enhance your experience and help you achieve your goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menubar />
        {children}
      </body>
    </html>
  );
}
