"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useState } from "react";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Topbar onBurgerClick={() => setSidebarOpen(true)} />
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        {children}
      </body>
    </html>
  );
}
