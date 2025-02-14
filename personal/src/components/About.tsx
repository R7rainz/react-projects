import React from 'react';

const About: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
                <p className="text-lg mb-6">
                    Welcome to our consulting company. We specialize in providing top-notch consulting services to help businesses achieve their goals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold mb-2">Sales</h2>
                        <p className="text-lg">We have achieved over $10 million in sales over the past year.</p>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold mb-2">People Consulted</h2>
                        <p className="text-lg">We have consulted with over 500 clients worldwide.</p>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                        <p className="text-lg">Our mission is to provide exceptional consulting services that drive business success.</p>
                    </div>
                    <div className="bg-red-100 p-4 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
                        <p className="text-lg">Our vision is to be the leading consulting firm recognized for our innovative solutions and client satisfaction.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;