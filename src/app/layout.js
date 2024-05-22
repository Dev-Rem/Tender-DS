"use client";
import * as React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import AppBarComponent from "./components/AppBar";
import MainContent from "./components/MainContent";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBarComponent />
        <MainContent>{children}</MainContent>
      </body>
    </html>
  );
}
