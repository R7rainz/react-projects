import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                    If you have any questions or need further information, feel free to reach out to us.
                </p>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                    <p className="text-gray-600">contact@consultantcompany.com</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Helpline</h3>
                    <p className="text-gray-600">+1 234 567 890</p>
                </div>
                <div className="mt-6">
                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                        Send us a message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;