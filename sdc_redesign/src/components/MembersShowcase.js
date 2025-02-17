"use client";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LinkedinIcon as LinkedIn } from "lucide-react";
import React from "react";
gsap.registerPlugin(ScrollTrigger);
var members = [
    { name: "John Doe", role: "Developer", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
    { name: "Jane Smith", role: "Designer", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
    { name: "Mike Johnson", role: "Project Manager", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
    { name: "Emily Brown", role: "Data Scientist", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
    { name: "Chris Lee", role: "UI/UX Designer", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
];
var teachers = [
    {
        name: "Prof. Alice Williams",
        subject: "Computer Science",
        image: "/placeholder.svg",
        linkedin: "https://linkedin.com",
    },
    { name: "Dr. Robert Taylor", subject: "Data Science", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
];
export default function MembersShowcase() {
    var sectionRef = useRef(null);
    var _a = useState(0), activeIndex = _a[0], setActiveIndex = _a[1];
    useEffect(function () {
        var section = sectionRef.current;
        gsap.fromTo(section, { opacity: 0, y: 50 }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
        });
        var interval = setInterval(function () {
            setActiveIndex(function (prevIndex) { return (prevIndex + 1) % members.length; });
        }, 3000);
        return function () { return clearInterval(interval); };
    }, []);
    return (React.createElement("section", { id: "members", ref: sectionRef, className: "py-20 bg-background-light dark:bg-background-dark" },
        React.createElement("div", { className: "container mx-auto px-6" },
            React.createElement("h2", { className: "text-4xl font-bold mb-12 text-center text-primary dark:text-primary-dark" }, "Our Teachers"),
            React.createElement("div", { className: "flex justify-center space-x-8 mb-16" }, teachers.map(function (teacher) { return (React.createElement("div", { key: teacher.name, className: "text-center" },
                React.createElement("div", { className: "relative w-40 h-40 mx-auto mb-4 group" },
                    React.createElement("img", { src: teacher.image || "/placeholder.svg", alt: teacher.name, className: "rounded-full transition-all duration-300 group-hover:scale-110 w-full h-full object-cover" }),
                    React.createElement("div", { className: "absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/80 rounded-full" },
                        React.createElement("p", { className: "text-sm font-semibold mb-2 text-white" }, teacher.subject),
                        React.createElement("a", { href: teacher.linkedin, target: "_blank", rel: "noopener noreferrer" },
                            React.createElement(LinkedIn, { className: "w-6 h-6 text-white" })))),
                React.createElement("h3", { className: "text-xl font-semibold text-primary dark:text-primary-dark" }, teacher.name))); })),
            React.createElement("h2", { className: "text-4xl font-bold mb-12 text-center text-primary dark:text-primary-dark" }, "Our Members")),
        React.createElement("div", { className: "overflow-hidden" },
            React.createElement("div", { className: "flex space-x-8 py-8 animate-scroll" }, __spreadArray(__spreadArray([], members, true), members, true).map(function (member, index) { return (React.createElement("div", { key: "".concat(member.name, "-").concat(index), className: "w-64 flex-shrink-0 transition-all duration-300 ".concat(index % members.length === activeIndex ? "scale-110 shadow-lg z-10" : "scale-100") },
                React.createElement("div", { className: "relative w-64 h-64 mb-4 group" },
                    React.createElement("img", { src: member.image || "/placeholder.svg", alt: member.name, className: "rounded-lg transition-all duration-300 group-hover:scale-105 w-full h-full object-cover" }),
                    React.createElement("div", { className: "absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-secondary/80 rounded-lg" },
                        React.createElement("p", { className: "text-sm font-semibold mb-2 text-white" }, member.role),
                        React.createElement("a", { href: member.linkedin, target: "_blank", rel: "noopener noreferrer" },
                            React.createElement(LinkedIn, { className: "w-6 h-6 text-white" })))),
                React.createElement("h3", { className: "text-xl font-semibold text-center text-secondary dark:text-secondary-dark" }, member.name))); })))));
}
