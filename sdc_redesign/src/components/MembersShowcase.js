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
import React from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LinkedinIcon as LinkedIn } from "lucide-react";
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
        name: "Dr. XYZ",
        subject: "Computer Science",
        image: "/placeholder.svg",
        linkedin: "https://linkedin.com",
    },
    {
        name: "Dr. Cristiano Ronaldo",
        subject: "Data Science",
        image: "/placeholder.svg",
        linkedin: "https://linkedin.com",
    },
];
export default function MembersShowcase() {
    var sectionRef = useRef(null);
    var sliderRef = useRef(null);
    var _a = useState(0), activeIndex = _a[0], setActiveIndex = _a[1];
    useEffect(function () {
        var section = sectionRef.current;
        var slider = sliderRef.current;
        if (!section || !slider)
            return;
        gsap.fromTo(section, { opacity: 0, y: 50 }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
        });
        var slideWidth = 320; // width + gap
        var totalWidth = slideWidth * members.length;
        var duration = 5; // Time for one member to pass (in seconds)
        // Create a timeline for the infinite scroll
        var tl = gsap.timeline({ repeat: -1 });
        // Animate the slider
        tl.to(slider, {
            x: -totalWidth,
            duration: duration * members.length,
            ease: "none",
            modifiers: {
                x: gsap.utils.unitize(function (x) { return Number.parseFloat(x) % totalWidth; }), // Allows for seamless looping
            },
        });
        // Update active index
        var updateActiveIndex = function () {
            var progress = tl.progress();
            var newActiveIndex = Math.floor(progress * members.length) % members.length;
            setActiveIndex(newActiveIndex);
        };
        // Add the updateActiveIndex function to the ticker
        gsap.ticker.add(updateActiveIndex);
        // Spotlight effect
        var updateSpotlight = function () {
            var centerX = window.innerWidth / 2;
            var sliderRect = slider.getBoundingClientRect();
            gsap.utils.toArray(slider.children).forEach(function (child, index) {
                var childRect = child.getBoundingClientRect();
                var childCenterX = childRect.left + childRect.width / 2;
                var distanceFromCenter = Math.abs(childCenterX - centerX);
                var maxDistance = window.innerWidth / 2;
                var scale = gsap.utils.clamp(0.8, 1.1, 1.1 - (distanceFromCenter / maxDistance) * 0.3);
                var brightness = gsap.utils.clamp(50, 100, 100 - (distanceFromCenter / maxDistance) * 50);
                gsap.to(child, {
                    scale: scale,
                    filter: "brightness(".concat(brightness, "%)"),
                    duration: 0.2,
                });
            });
        };
        // Add the updateSpotlight function to the ticker
        gsap.ticker.add(updateSpotlight);
        return function () {
            tl.kill();
            gsap.ticker.remove(updateActiveIndex);
            gsap.ticker.remove(updateSpotlight);
        };
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
        React.createElement("div", { className: "relative overflow-hidden py-20" },
            React.createElement("div", { className: "absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10" }),
            React.createElement("div", { className: "absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10" }),
            React.createElement("div", { ref: sliderRef, className: "flex space-x-8 py-8", style: {
                    width: "".concat(members.length * 320 * 2, "px"), // Double the width for seamless looping
                    willChange: "transform",
                } }, __spreadArray(__spreadArray([], members, true), members, true).map(function (member, index) { return (React.createElement("div", { key: "".concat(member.name, "-").concat(index), className: "w-64 flex-shrink-0 transition-all duration-500" },
                React.createElement("div", { className: "relative w-64 h-64 mb-4 group" },
                    React.createElement("img", { src: member.image || "/placeholder.svg", alt: member.name, className: "rounded-lg w-full h-full object-cover" }),
                    React.createElement("div", { className: "absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 bg-secondary/80 rounded-lg ".concat(index % members.length === activeIndex ? "opacity-0 group-hover:opacity-100" : "opacity-0") },
                        React.createElement("p", { className: "text-sm font-semibold mb-2 text-white" }, member.role),
                        React.createElement("a", { href: member.linkedin, target: "_blank", rel: "noopener noreferrer" },
                            React.createElement(LinkedIn, { className: "w-6 h-6 text-white" })))),
                React.createElement("h3", { className: "text-xl font-semibold text-center text-secondary dark:text-secondary-dark" }, member.name))); })))));
}
