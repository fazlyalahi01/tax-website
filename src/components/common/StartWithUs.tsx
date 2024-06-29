"use client"
import React from 'react';
import OutlineButton from '../ui/OutlinedButton';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import ContactForm from '../contact/ContactForm';

const StartWithUs: React.FC = () => {
    return (
        <div className="bg-gray-100 md:py-16 py-8">
            <div className="container-x">
                <div className="md:flex justify-between gap-12 items-center">

                    <h1 className="md:text-4xl text-3xl font-extrabold text-title pb-1 flex-shrink-0">Want to work with us?</h1>
                    <p className="text-description py-4">If you are interested in working with us, please fill out the form. One of our team members will get in touch with you shortly.</p>
                    <div className="flex-shrink-0">
                        <Dialog>
                            <DialogTrigger>
                                <OutlineButton >Contact Now →</OutlineButton>
                            </DialogTrigger>
                            <DialogContent className='bg-white px-4 pt-12 pb-8'>
                                <ContactForm />
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartWithUs;