import React from "react";
import Header from "@/components/Header";
import WelcomeSection from "@/components/WelcomeSection";
import MembersShowcase from "@/components/MembersShowcase";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
export default function Home() {
    return (React.createElement("main", { className: "min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white" },
        React.createElement(Header, null),
        React.createElement(WelcomeSection, null),
        React.createElement(MembersShowcase, null),
        React.createElement(EventsSection, null),
        React.createElement(ContactSection, null),
        React.createElement(Footer, null)));
}
