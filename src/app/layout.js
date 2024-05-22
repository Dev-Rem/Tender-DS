"use client";
import * as React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import AppBarComponent from "./components/AppBar";
import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBarComponent setSearchQuery={setSearchQuery} />
        <Home searchQuery={searchQuery} />
      </body>
    </html>
  );
}
