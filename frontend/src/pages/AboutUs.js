import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col-reverse md:flex-row h-screen">
                {/* Left Section - About Content */}
                <div className='md:w-1/2 text-left lg:h-screen flex flex-col justify-center p-8'>
                    <div className="flex-1 bg-white md:h-[85vh] flex flex-col justify-center items-start text-left space-y-4">
                        <h1 className="text-4xl font-semibold mb-4">About Us</h1>

                        <p className="text-lg">
                            Welcome to Shoezy! We are a premier shoe store dedicated to providing high-quality footwear for both men and women. Our mission is to offer a diverse selection of stylish and comfortable shoes that cater to all your needs.
                        </p>

                        <p className="text-lg">
                            At Shoezy, we value integrity, excellence, and customer satisfaction. With years of experience in the industry, our team is passionate about helping you find the perfect pair of shoes that fit your lifestyle and preferences.
                        </p>

                        <p className="text-lg">
                            Thank you for choosing Shoezy. If you have any questions or need assistance, feel free to reach out to us. We're here to help you step into comfort and style.
                        </p>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="flex-1 flex justify-center items-center p-4">
                    <div className='w-full max-w-md rounded-3xl overflow-hidden'>
                        <img
                            src='https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt='Shoes Display'
                            className='w-full h-auto rounded-xl shadow-2xl shadow-gray-300'
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
