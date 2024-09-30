import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col-reverse md:flex-row h-screen">
                <div className='md:w-1/2 text-left lg:h-screen'>
                    <div className="flex-1 p-8 bg-white md:h-[85vh] flex flex-col justify-center items-center text-center">
                        <h1 className="top-0 left-4 text-4xl font-semibold m-4">Contact Us</h1>

                        <div className="w-[90%] md:w-[70%]">
                            <form>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="mt-1 p-2 w-full border border-gray-700 rounded-full py-3 px-6"
                                        placeholder='Full Name'
                                    />
                                </div>

                                <div className="mb-4">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="mt-1 p-2 w-full border border-gray-700 rounded-full py-3 px-6"
                                        placeholder='Email'
                                    />
                                </div>

                                <div className="mb-4">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="mt-1 p-4 w-full border border-gray-700 rounded-xl"
                                        placeholder="Type your message here..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-black text-white py-3 px-6 rounded-full focus:outline-none focus:ring focus:border-gray-600 w-full"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="flex-1 flex justify-center items-center">
                    <div className='rounded-3xl max-h-[90%] max-w-[90%] overflow-hidden'>
                        <img
                            src='<img src="https://assets.adidas.com/images/w_1880,f_auto,q_auto/ef3d527ee78745478a9231e07d83f2e7_9366/JI1281_02_standard_hover.jpg">'
                            alt=''
                            className='rounded-xl shadow-2xl shadow-gray-300'
                        />

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
