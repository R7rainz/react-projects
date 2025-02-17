"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, Clock } from "lucide-react";
import React from "react";
gsap.registerPlugin(ScrollTrigger);
var events = [
    {
        name: "Annual Hackathon",
        date: "July 15-17, 2023",
        time: "48 hours",
        location: "Virtual Event",
        description: "Join us for 48 hours of coding, innovation, and fun!",
        color: "from-primary to-secondary",
    },
    {
        name: "Tech Talk: AI in Healthcare",
        date: "August 5, 2023",
        time: "2:00 PM - 4:00 PM",
        location: "Main Auditorium",
        description: "Learn about the latest AI applications in healthcare.",
        color: "from-secondary to-accent",
    },
    {
        name: "Workshop: Intro to React",
        date: "September 10, 2023",
        time: "10:00 AM - 3:00 PM",
        location: "Computer Lab 3",
        description: "A hands-on workshop for beginners to learn React.",
        color: "from-accent to-primary",
    },
];
export default function EventsSection() {
    var sectionRef = useRef(null);
    useEffect(function () {
        var section = sectionRef.current;
        var eventCards = gsap.utils.toArray(".event-card");
        gsap.fromTo(section, { opacity: 0, y: 50 }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
        });
        eventCards.forEach(function (card, index) {
            gsap.fromTo(card, { opacity: 0, y: 50 }, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                },
            });
        });
    }, []);
    return (React.createElement("section", { id: "events", ref: sectionRef, className: "py-20 bg-background-light dark:bg-background-dark" },
        React.createElement("div", { className: "container mx-auto px-6" },
            React.createElement("h2", { className: "text-4xl font-bold mb-12 text-center text-primary dark:text-primary-dark" }, "Upcoming Events"),
            React.createElement("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3" }, events.map(function (event) { return (React.createElement("div", { key: event.name, className: "event-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br ".concat(event.color) },
                React.createElement("h3", { className: "text-2xl font-semibold mb-2 text-white" }, event.name),
                React.createElement("div", { className: "flex items-center text-white mb-2" },
                    React.createElement(Calendar, { className: "w-4 h-4 mr-2" }),
                    React.createElement("span", null, event.date)),
                React.createElement("div", { className: "flex items-center text-white mb-2" },
                    React.createElement(Clock, { className: "w-4 h-4 mr-2" }),
                    React.createElement("span", null, event.time)),
                React.createElement("div", { className: "flex items-center text-white mb-4" },
                    React.createElement(MapPin, { className: "w-4 h-4 mr-2" }),
                    React.createElement("span", null, event.location)),
                React.createElement("p", { className: "mb-6 text-white" }, event.description),
                React.createElement("button", { className: "w-full bg-white text-primary font-semibold py-2 px-4 rounded-full hover:bg-opacity-90 transition-colors duration-300" }, "Register Now"))); })))));
}
