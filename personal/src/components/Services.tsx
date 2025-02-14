import React from 'react';

const services = [
    { id: 1, name: 'Business Consulting', description: 'Expert advice to improve your business operations.' },
    { id: 2, name: 'Market Analysis', description: 'In-depth market research and analysis.' },
    { id: 3, name: 'Financial Planning', description: 'Comprehensive financial planning services.' },
    { id: 4, name: 'IT Solutions', description: 'Innovative IT solutions to streamline your business.' },
];

const Services: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Our Services</h1>
            <ul className="space-y-4">
                {services.map(service => (
                    <li key={service.id} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold">{service.name}</h2>
                        <p className="text-gray-700">{service.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Services;