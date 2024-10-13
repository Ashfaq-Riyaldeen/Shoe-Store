import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Landing = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <Slider {...settings}>
            <div className="relative h-screen w-auto">
                <img
                    src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"        
                    alt="Shoe Collection 1"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-extrabold mb-4">Unleash your style potential with cutting edge footwear designs</h1>
                    <p className="text-lg">Explore our premium collection and step ahead of the fashion curve</p>
                    <a href="/products" className="mt-8 bg-white text-black py-2 px-4 rounded-full hover:bg-gray-300">Shop Now</a>
                </div>
            </div>

            <div className="relative h-screen w-90vw">
                <img
                    src="https://images.unsplash.com/photo-1547053295-bb530ab5af2c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Shoe Collection 2"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-extrabold mb-4">Step into Comfort and Style</h1>
                    <p className="text-lg">Explore our range of stylish and comfortable footwear for every occasion.</p>
                    <a href="/products" className="mt-8 bg-white text-black py-2 px-4 rounded-full hover:bg-gray-300">Shop Now</a>
                </div>
            </div>

            <div className="relative h-screen w-90vw">
                <img
                    src="https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Shoe Collection 3"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-extrabold mb-4">Elevate Your Style with Trendy Shoes</h1>
                    <p className="text-lg">Find the perfect pair to express your unique fashion sense.</p>
                    <a href="/products" className="mt-8 bg-white text-black py-2 px-4 rounded-full hover:bg-gray-300">Shop Now</a>
                </div>
            </div>
        </Slider>
    );
};

export default Landing;
