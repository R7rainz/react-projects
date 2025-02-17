"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import StarfieldBackground from "./StarfieldBackground";
import React from "react";
export default function WelcomeSection() {
    var sectionRef = useRef(null);
    var textRef = useRef(null);
    var ctaRef = useRef(null);
    var logoRef = useRef(null);
    useEffect(function () {
        var section = sectionRef.current;
        var text = textRef.current;
        var cta = ctaRef.current;
        var logo = logoRef.current;
        if (!section || !text || !cta || !logo)
            return;
        // Initial animations
        gsap.fromTo(logo, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" });
        gsap.fromTo(text, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" });
        gsap.fromTo(cta, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power3.out" });
        // Mouse move parallax effect
        var handleMouseMove = function (e) {
            var clientX = e.clientX, clientY = e.clientY;
            var moveX = clientX - window.innerWidth / 2;
            var moveY = clientY - window.innerHeight / 2;
            gsap.to(logo, {
                x: moveX * 0.02,
                y: moveY * 0.02,
                duration: 0.5,
                ease: "power1.out",
            });
            gsap.to(text, {
                x: moveX * 0.01,
                y: moveY * 0.01,
                duration: 0.5,
                ease: "power1.out",
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return function () {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return (React.createElement("section", { id: "welcome", ref: sectionRef, className: "relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030014] dark:bg-[#020010]" },
        React.createElement(StarfieldBackground, null),
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" }),
        React.createElement("div", { className: "relative z-10 flex flex-col items-center justify-center gap-8" },
            React.createElement("div", { className: "relative w-48 h-48 mb-8", ref: logoRef },
                React.createElement("div", { className: "absolute inset-0 animate-pulse-slow" },
                    React.createElement("img", { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qia84mSgcTnPZxYGe8B6yVdGW2uRjN.png", alt: "SDC Logo", className: "w-full h-full object-contain drop-shadow-[0_0_15px_rgba(123,97,255,0.3)]" })),
                React.createElement("img", { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qia84mSgcTnPZxYGe8B6yVdGW2uRjN.png", alt: "SDC Logo", className: "absolute inset-0 w-full h-full object-contain" })),
            React.createElement("h1", { ref: textRef, className: "text-6xl md:text-8xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500" }, "Welcome to SDC Club"),
            React.createElement("div", { ref: ctaRef, className: "flex flex-col items-center gap-6" },
                React.createElement("p", { className: "text-xl md:text-2xl text-center text-gray-300" }, "Innovate. Create. Collaborate."),
                React.createElement("button", { className: "relative group" },
                    React.createElement("div", { className: "absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-200" }),
                    React.createElement("div", { className: "relative px-8 py-3 bg-black rounded-full leading-none flex items-center" },
                        React.createElement("span", { className: "text-gray-200 group-hover:text-white transition duration-200" }, "Join Us")))))));
}
