import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { NotificationProvider } from "./contexts/NotificationProvider";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joblancer",
  description: "The home of blue-collar jobs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} h-screen w-screen overflow-x-hidden`}
      >
        <NotificationProvider>{children}</NotificationProvider>
      </body>
    </html>
  );
}
