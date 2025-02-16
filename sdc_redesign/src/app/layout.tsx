import React from "react";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="scroll-smooth">
      <div className="space-grotesk">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </div>
    </div>
  );
}
