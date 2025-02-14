import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <header className="bg-blue-600 w-full py-4">
                <h1 className="text-white text-3xl text-center">Consultation Company</h1>
            </header>
            <main className="flex-1 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Welcome to Our Consultation Services</h2>
                <p className="text-center mb-8 max-w-md">
                    We provide expert consultation services to help you achieve your business goals. 
                    Our team of experienced professionals is here to assist you with all your needs.
                </p>
                <Link to="/services" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Our Services
                </Link>
            </main>
            <footer className="bg-gray-800 w-full py-4 mt-8">
                <p className="text-white text-center">&copy; 2023 Consultation Company. All rights reserved.</p>
            </footer>
        </div>
    );
}