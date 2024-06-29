import React from 'react';
import OutlineButton from '../ui/OutlinedButton';

const StartWithUs: React.FC = () => {
    return (
        <div className="bg-gray-100 md:py-16 py-8">
            <div className="container-x">
                <div className="md:flex justify-between gap-12 items-center">

                    <h1 className="md:text-4xl text-3xl font-extrabold text-title pb-1 flex-shrink-0">You can start with us!</h1>
                    <p className="text-description py-4">Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.</p>
                    <div className="flex-shrink-0">
                        <OutlineButton >Learn More →</OutlineButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartWithUs;