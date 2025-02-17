import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MyProvider } from "../components/MyContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Durga Pedia",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyProvider>{children}</MyProvider>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDj2cR40F6xZo8mTepkyEpJl8BGVNDZ2qk&callback=initMap&libraries=places"
          defer
        ></script>
      </body>
    </html>
  );
}
