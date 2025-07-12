"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useState, useEffect } from "react";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import BottomBar from "./components/BottomBar/BottomBar";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

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
 
  useEffect(() => {
    setSidebarOpen(false);
  }, []);
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{background: "linear-gradient(120deg, #f0f4ff 0%, #fff 100%)"}}>
        <Topbar onBurgerClick={() => setSidebarOpen(true)} />
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        {children}
        <BottomBar />
        <WhatsAppButton />
      </body>
    </html>
  );
}
