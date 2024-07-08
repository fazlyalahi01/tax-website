import React from 'react';

interface IProps {
    title: string;
    description: string;
}

const ServiceCard: React.FC<IProps> = ({ title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow overflow-hidden  md:flex">
            <div className="p-6">
                <h3 className="text-primary font-bold text-xl">{title}</h3>
                <p className="mt-4 text-description">{description}</p>
                <a href="#" className="mt-4 inline-block text-primary duration-500 hover:text-blue-600 font-semibold text-sm border rounded-full px-4 py-2 bg-blue-50">Read More →</a>
            </div>
        </div>
    );
};

export default ServiceCard;