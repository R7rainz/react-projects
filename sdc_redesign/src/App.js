import React from "react";
import Header from "./components/Header";
import WelcomeSection from "./components/WelcomeSection";
import MembersShowcase from "./components/MembersShowcase";
import EventsSection from "./components/EventsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
function App() {
    return (React.createElement("div", { className: "min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100" },
        React.createElement(Header, null),
        React.createElement(WelcomeSection, null),
        React.createElement(MembersShowcase, null),
        React.createElement(EventsSection, null),
        React.createElement(ContactSection, null),
        React.createElement(Footer, null)));
}
export default App;
