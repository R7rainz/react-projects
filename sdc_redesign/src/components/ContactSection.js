"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Send } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);
export default function ContactSection() {
    var _this = this;
    var sectionRef = useRef(null);
    var _a = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    }), formData = _a[0], setFormData = _a[1];
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
    }, []);
    var handleChange = function (e) {
        var _a;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            e.preventDefault();
            // Here you would typically send the form data to your backend
            console.log("Form submitted:", formData);
            // Reset form after submission
            setFormData({ name: "", email: "", subject: "", message: "" });
            return [2 /*return*/];
        });
    }); };
    return (React.createElement("section", { id: "contact", ref: sectionRef, className: "py-20 bg-gradient-to-r from-primary via-secondary to-accent" },
        React.createElement("div", { className: "container mx-auto px-6" },
            React.createElement("h2", { className: "text-4xl font-bold mb-8 text-center text-white" }, "Contact Us"),
            React.createElement("div", { className: "max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden" },
                React.createElement("div", { className: "flex flex-col md:flex-row" },
                    React.createElement("div", { className: "md:w-1/2 p-8 bg-gradient-to-br from-primary to-secondary text-white" },
                        React.createElement("h3", { className: "text-2xl font-semibold mb-4" }, "Get in Touch"),
                        React.createElement("p", { className: "mb-6" }, "We'd love to hear from you. Send us a message and we'll respond as soon as possible."),
                        React.createElement("div", { className: "flex items-center mb-4" },
                            React.createElement(Mail, { className: "w-6 h-6 mr-4" }),
                            React.createElement("span", null, "info@sdcclub.com")),
                        React.createElement("div", { className: "mt-8" },
                            React.createElement("h4", { className: "text-xl font-semibold mb-4" }, "Follow Us"),
                            React.createElement("div", { className: "flex space-x-4" },
                                React.createElement("a", { href: "#", className: "hover:text-accent transition-colors duration-300" },
                                    React.createElement("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true" },
                                        React.createElement("path", { fillRule: "evenodd", d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z", clipRule: "evenodd" }))),
                                React.createElement("a", { href: "#", className: "hover:text-accent transition-colors duration-300" },
                                    React.createElement("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true" },
                                        React.createElement("path", { d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }))),
                                React.createElement("a", { href: "#", className: "hover:text-accent transition-colors duration-300" },
                                    React.createElement("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true" },
                                        React.createElement("path", { fillRule: "evenodd", d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z", clipRule: "evenodd" })))))),
                    React.createElement("div", { className: "md:w-1/2 p-8" },
                        React.createElement("form", { onSubmit: handleSubmit, className: "space-y-6" },
                            React.createElement("div", null,
                                React.createElement("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 dark:text-gray-300" }, "Name"),
                                React.createElement("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, required: true, className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white" })),
                            React.createElement("div", null,
                                React.createElement("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 dark:text-gray-300" }, "Email"),
                                React.createElement("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, required: true, className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white" })),
                            React.createElement("div", null,
                                React.createElement("label", { htmlFor: "subject", className: "block text-sm font-medium text-gray-700 dark:text-gray-300" }, "Subject"),
                                React.createElement("input", { type: "text", id: "subject", name: "subject", value: formData.subject, onChange: handleChange, required: true, className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white" })),
                            React.createElement("div", null,
                                React.createElement("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 dark:text-gray-300" }, "Message"),
                                React.createElement("textarea", { id: "message", name: "message", rows: 4, value: formData.message, onChange: handleChange, required: true, className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white" })),
                            React.createElement("button", { type: "submit", className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" },
                                React.createElement(Send, { className: "w-5 h-5 mr-2" }),
                                "Send Message"))))))));
}
