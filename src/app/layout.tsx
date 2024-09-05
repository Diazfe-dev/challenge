"use client";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Provider } from 'react-redux';
import { store } from "@/infra/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/protected') {
      router.replace('/protected/dashboard');
    }
    if (pathname === '/') {
      router.replace('/protected/dashboard');
    }
  }, []);

  return (
    <html lang="en">
      <body className={cn("dark bg-slate-950", fontSans.className)}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
