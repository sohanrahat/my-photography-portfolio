import React, { useState } from 'react';

const ContactPageContent = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Email:', email);
        console.log('Message:', message);
    };

    return (
        <div className="flex flex-col" style={{ backgroundColor: 'rgba(235,234,230,1)' }}>
            {/* Main Content - Full Screen Split */}
            <div className="flex flex-col lg:flex-row">
                {/* Left Column - Image (2/3 of screen) */}
                <div className="w-full lg:w-2/3 relative h-64 lg:h-screen">
                    <img
                        src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop"
                        alt="Architectural interior view"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>

                {/* Right Column - Contact Form (1/3 of screen) */}
                <div className="w-full lg:w-1/3 flex flex-col border-l border-t border-b border-black">
                    {/* Contact Info Section */}
                    <div className="flex-1 border-b border-black p-6 lg:p-10 flex flex-col justify-center">
                        <h2 className="text-[12px] font-mono uppercase tracking-wider text-black mb-6 -ml-4">
                            CONTACT
                        </h2>
                        <p className="text-[12px] font-mono uppercase tracking-wider text-black leading-[1.4] text-justify">
                            Please feel free to reach out with any questions, inquiries, or collaboration ideas. I will be happy to discuss a potential projects. Thank you for your interest in my work, and I look forward to connecting with you.
                        </p>
                    </div>

                    {/* Contact Form Section */}
                    <div className="flex-1 p-6 lg:p-10 flex flex-col justify-center">
                        <div className="space-y-4 lg:space-y-6">
                            <div>
                                <h3 className="text-[12px] font-mono uppercase tracking-wider text-black mb-4 -ml-4">
                                    ADDRESS E-MAIL
                                </h3>
                                <textarea
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full h-[20px] bg-transparent border-none outline-none text-[10px] font-mono tracking-wider text-black resize-none"
                                    style={{ backgroundColor: 'rgba(235,234,230,1)' }}
                                />
                                <div className="w-full h-[1px] bg-black mb-4"></div>
                            </div>

                            <div>
                                <h3 className="text-[12px] font-mono uppercase tracking-wider text-black mb-4 -ml-4">
                                    MESSAGE
                                </h3>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full h-[80px] bg-transparent border-none outline-none text-[10px] font-mono tracking-wider text-black resize-none"
                                    style={{ backgroundColor: 'rgba(235,234,230,1)' }}
                                />
                                <div className="w-full h-[1px] bg-black mb-4"></div>
                            </div>


                            <button
                                onClick={handleSubmit}
                                className="w-full h-[40px] bg-black text-[10px] font-mono uppercase tracking-wider hover:bg-gray-800 transition-colors"
                                style={{ color: 'rgba(235,234,230,1)' }}
                            >
                                SEND
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPageContent;