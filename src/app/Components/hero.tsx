"use client";
import pic from "../../../public/carhd.png";
import pic1 from "../../../public/slide1.jpg";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <header
      className="bg-no-repeat bg-cover bg-center h-screen "
      style={{ backgroundImage: `url(${pic1.src})` }}
    >
      <div className="container mx-auto pt-[250px] md:p-16 flex flex-col justify-center items-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-start">
            <div className="lg:max-w-lg lg:p-10">
              <h1 className="text-3xl font-semibold text-white dark:text-white lg:text-4xl mt-[100px]">
                Best place to choose <br /> your{" "}
                <span className="text-red-600">Favorite Cars</span>
              </h1>
              <p className="mt-3 text-lg text-gray-200 italic dark:text-white lg:text-3xl">
              "RevLine Showroom is the ultimate destination to find your dream car. 
              With a wide range of premium models, from sleek luxury vehicles to 
              reliable pre-owned options, we have something for everyone". 
              </p>
              <button className="px-9 py-4 mt-7 mb-5 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-700 rounded-lg lg:w-auto hover:bg-red-500 hover:border hover:outline-none focus:bg-blue-600">
                Discover your Dream Car
              </button>
            </div>
          </div>

          <div className="object-cover flex items-center justify-center mt-20 sm:mt-24 md:mt-32 lg:mt-40 xl:mt-48">
            <Image
              className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-3/4 2xl:w-2/3 h-auto transform transition-all duration-500 ease-in-out hover:scale-150 hover:rotate-2 hover:shadow-2xl  opacity-90 hover:opacity-100"
              src={pic}
              alt="Catalogue"
              height={800}
              width={400}
            />
          </div>
        </div>
      </div>
      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-white">
            Our Premium Services
          </h2>
          <p className="text-lg mb-10 text-gray-200">
            We offer a range of services to make your car buying experience as
            smooth as possible.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="flex justify-center mb-4">
                <i className="fas fa-credit-card text-4xl text-blue-400"></i>{" "}
                {/* Example icon */}
              </div>
              <h3 className="text-2xl font-semibold mb-4">Car Financing</h3>
              <p className="text-gray-300 mb-4">
                Flexible financing options tailored to your needs.
              </p>
              <button className="px-6 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors">
                Learn More
              </button>
            </div>
            {/* Service 2 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="flex justify-center mb-4">
                <i className="fas fa-wrench text-4xl text-blue-400"></i>{" "}
                {/* Example icon */}
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Vehicle Maintenance
              </h3>
              <p className="text-gray-300 mb-4">
                Keep your car running smoothly with expert maintenance services.
              </p>
              <button className="px-6 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors">
                Learn More
              </button>
            </div>
            {/* Service 3 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="flex justify-center mb-4">
                <i className="fas fa-shield-alt text-4xl text-blue-400"></i>{" "}
                {/* Example icon */}
              </div>
              <h3 className="text-2xl font-semibold mb-4">Car Insurance</h3>
              <p className="text-gray-300 mb-4">
                Get the best coverage for your new car with our insurance
                options.
              </p>
              <button className="px-6 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors">
                Learn More
              </button>
            </div>
            {/* Service 4 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="flex justify-center mb-4">
                <i className="fas fa-exchange-alt text-4xl text-blue-400"></i>{" "}
                {/* Example icon */}
              </div>
              <h3 className="text-2xl font-semibold mb-4">Trade-in Value</h3>
              <p className="text-gray-300 mb-4">
                Get the best value for your current car when you trade it in.
              </p>
              <button className="px-6 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-15 bg-gradient-to-r from-slate-800 via-red-500 to-slate-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-white pt-5">
            What Our Customers Say
          </h2>
          <p className="text-lg mb-5 text-gray-200">
            See what our satisfied customers have to say about their car buying
            experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
            {/* Testimonial 1 */}
            <div className="bg-gray-600 p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
              <p className="text-lg italic text-gray-300 mb-4">
                ~ The experience was seamless. I got the car I wanted at an
                amazing price!
              </p>
              <h3 className="font-semibold text-xl text-white">John Doe</h3>
              <p className="text-gray-500">Verified Buyer</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-600 p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
              <p className="text-lg italic text-gray-300 mb-4">
                ~ Excellent customer service. They helped me find the perfect
                car for my family.
              </p>
              <h3 className="font-semibold text-xl text-white">Jane Smith</h3>
              <p className="text-gray-500">Verified Buyer</p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-gray-600 p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
              <p className="text-lg italic text-gray-300 mb-4">
                ~ The entire team was amazing and made the car buying process so
                easy!
              </p>
              <h3 className="font-semibold text-xl text-white">Michael Lee</h3>
              <p className="text-gray-500">Verified Buyer</p>
            </div>
            {/* Testimonial 4 */}
            <div className="bg-gray-600 p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
              <p className="text-lg italic text-gray-300 mb-4">
                ~ I love my new car! The process was simple, and the staff was
                so friendly.
              </p>
              <h3 className="font-semibold text-xl text-white">
                Sarah Johnson
              </h3>
              <p className="text-gray-500">Verified Buyer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black mt-0 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Copyright, Revline-Showroom, All
            Rights Reserved | Developed by{" "}
            <span className="font-semibold">Syeda Areeba</span>
          </p>
        </div>
      </footer>
    </header>
  );
};

export default Hero;
