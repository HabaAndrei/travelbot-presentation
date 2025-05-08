import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from './Components/Footer.js';
import Header from "./Components/Header.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Travelbot",
  description: "Travelbot is your intelligent travel assistant — helping you plan, discover, and book unforgettable journeys with ease. From personalized itineraries to smart recommendations, every trip finds its way with Travelbot.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' >
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
