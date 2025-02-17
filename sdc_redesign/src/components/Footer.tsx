import { Github, Twitter, Linkedin } from "lucide-react"
import React from "react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">SDC Club</h3>
            <p className="text-sm text-gray-300">
              Empowering students to innovate, create, and collaborate in the world of technology.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#welcome" className="hover:text-accent-dark transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#members" className="hover:text-accent-dark transition-colors duration-300">
                  Members
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-accent-dark transition-colors duration-300">
                  Events
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent-dark transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent-dark transition-colors duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent-dark transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent-dark transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} SDC Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

