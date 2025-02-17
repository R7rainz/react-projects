import React from "react";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
export default function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "scroll-smooth" },
        React.createElement("div", { className: "space-grotesk" },
            React.createElement(ThemeProvider, { attribute: "class", defaultTheme: "dark", enableSystem: true }, children))));
}
