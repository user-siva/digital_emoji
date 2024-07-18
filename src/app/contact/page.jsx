import React from 'react';
import Link from "next/link";

function Contact() {
    return (
        <>
            <div id="contact" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <div className="intro text-center mb-16">
                    <div className='title mb-10'>
                        <span style={{ color: '#263B7E' }} className="text-title-left font-bold text-3xl">Contact</span>
                        <span style={{ color: '#5C1F5B' }} className="text-title-right font-bold text-3xl "> Us</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-2 text-blue-600">Hey There!</h2>
                    <p className="text-lg text-gray-700">We’re more than happy to have a conversation.</p>
                </div>
                <div className="cards grid grid-cols-1 md:grid-cols-3 gap-4">
                   
                    <Link href="contact/project-enquiry" legacyBehavior>
                        <h6 className="rounded-lg bg-white transform transition-transform duration-300 hover:scale-105 h-80 w-72 cursor-pointer shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-lg font-light mb-10">Project Enquiry</h3>
                            <h6 className="mb-6 text-2xl font-bold text-center">Let us help you realise your vision.</h6>
                            <span className="group text-blue-600 transition duration-300">
                                Let’s Talk
                                <span className="block ml-20 mr-20 max-w-2 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
                            </span>
                        </h6>
                    </Link>
                    <Link  href="contact/career" legacyBehavior>
                        <h6 className="rounded-lg bg-white transform transition-transform duration-300 hover:scale-105 h-80 w-72 cursor-pointer shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-lg font-light mb-10">Career Enquiry</h3>
                            <h6 className="mb-6 text-2xl font-bold text-center">Let us help you realise your vision.</h6>
                            <span className="group text-blue-600 transition duration-300">
                                Join Us!
                                <span className="block ml-20 mr-20 max-w-2 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
                            </span>
                        </h6>
                    </Link>
                    <Link href="contact/general-enquiry" legacyBehavior>
                        <h6 className="rounded-lg bg-white transform transition-transform duration-300 hover:scale-105 h-80 w-72 cursor-pointer shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-lg font-light mb-10">General Enquiry</h3>
                            <h6 className="mb-6 text-2xl font-bold text-center">Let us help you realise your vision.</h6>
                            <span className="group text-blue-600 transition duration-300">
                                Say Hi!
                                <span className="block ml-20 mr-20 max-w-2 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
                            </span>
                        </h6>
                    </Link>
                
                </div>
            </div>
           
        </>
    );
}

export default Contact;
