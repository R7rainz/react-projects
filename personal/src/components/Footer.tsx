import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h5 className="font-bold mb-2">Company</h5>
                    <ul>
                        <li><NavLink to="/about" className="hover:underline">About Us</NavLink></li>
                        <li><NavLink to="/team" className="hover:underline">Our Team</NavLink></li>
                        <li><NavLink to="/careers" className="hover:underline">Careers</NavLink></li>
                        <li><NavLink to="/blog" className="hover:underline">Blog</NavLink></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold mb-2">Services</h5>
                    <ul>
                        <li><NavLink to="/consulting" className="hover:underline">Consulting</NavLink></li>
                        <li><NavLink to="/development" className="hover:underline">Development</NavLink></li>
                        <li><NavLink to="/design" className="hover:underline">Design</NavLink></li>
                        <li><NavLink to="/marketing" className="hover:underline">Marketing</NavLink></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold mb-2">Resources</h5>
                    <ul>
                        <li><NavLink to="/faq" className="hover:underline">FAQ</NavLink></li>
                        <li><NavLink to="/support" className="hover:underline">Support</NavLink></li>
                        <li><NavLink to="/privacy-policy" className="hover:underline">Privacy Policy</NavLink></li>
                        <li><NavLink to="/terms-of-service" className="hover:underline">Terms of Service</NavLink></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold mb-2">Contact</h5>
                    <ul>
                        <li><NavLink to="/contact" className="hover:underline">Contact Us</NavLink></li>
                        <li><a href="mailto:info@yourcompany.com" className="hover:underline">info@yourcompany.com</a></li>
                        <li><a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a></li>
                        <li><NavLink to="/locations" className="hover:underline">Our Locations</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto text-center mt-8 text-sm">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
