"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useState, useEffect } from "react";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import BottomBar from "./components/BottomBar/BottomBar";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import { I18nextProvider } from "react-i18next";
import i18n from "../lib/i18n";
import { useLayout } from "./useLayout";

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
  const { currentLang } = useLayout();

  useEffect(() => {
    setSidebarOpen(false);
  }, []);

  return (
    <html lang={currentLang} dir={currentLang === "he" ? "rtl" : "ltr"}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Portfolio" />
        <link rel="apple-touch-icon-precomposed" href="/appIcon.png" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/appIcon.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="180x180"
          href="/appIcon.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="167x167"
          href="/appIcon.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="192x192"
          href="/appIcon.png"
        />
        <link rel="shortcut icon" type="image/png" href="/appIcon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ background: "linear-gradient(120deg, #f0f4ff 0%, #fff 100%)" }}
      >
        <I18nextProvider i18n={i18n}>
          <Topbar onBurgerClick={() => setSidebarOpen(true)} />
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          {children}
          <BottomBar />
          <WhatsAppButton />
        </I18nextProvider>
      </body>
    </html>
  );
}
