"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import React from "react";
var navItems = [
    { name: "Welcome", href: "#welcome" },
    { name: "Members", href: "#members" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
];
export default function Header() {
    var _a = useState(""), activeSection = _a[0], setActiveSection = _a[1];
    var _b = useState(false), isScrolled = _b[0], setIsScrolled = _b[1];
    var _c = useState("light"), theme = _c[0], setTheme = _c[1];
    useEffect(function () {
        var handleScroll = function () {
            var sections = document.querySelectorAll("section");
            var scrollPosition = window.scrollY;
            sections.forEach(function (section) {
                var sectionTop = section.offsetTop;
                var sectionHeight = section.clientHeight;
                if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50) {
                    setActiveSection(section.id);
                }
            });
            setIsScrolled(scrollPosition > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    var toggleTheme = function () {
        setTheme(theme === "light" ? "dark" : "light");
        document.documentElement.classList.toggle("dark");
    };
    return (React.createElement("header", { className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ".concat(isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md" : "bg-transparent") },
        React.createElement("nav", { className: "container mx-auto px-6 py-4" },
            React.createElement("div", { className: "flex justify-between items-center" },
                React.createElement("ul", { className: "flex space-x-8" }, navItems.map(function (item) { return (React.createElement("li", { key: item.name },
                    React.createElement("a", { href: item.href, className: "text-lg font-semibold transition-colors duration-300 ".concat(activeSection === item.href.slice(1)
                            ? "text-accent dark:text-accent-dark"
                            : "text-gray-800 dark:text-gray-200 hover:text-accent dark:hover:text-accent-dark") },
                        item.name,
                        activeSection === item.href.slice(1) && (React.createElement(motion.div, { className: "h-1 bg-accent dark:bg-accent-dark mt-1", layoutId: "underline", initial: false, transition: { type: "spring", stiffness: 300, damping: 30 } }))))); })),
                React.createElement("button", { onClick: toggleTheme, className: "p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300" }, theme === "light" ? React.createElement(Moon, { className: "w-5 h-5" }) : React.createElement(Sun, { className: "w-5 h-5" }))))));
}
