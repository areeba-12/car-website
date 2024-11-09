"use client";
import pic from "../../../public/Hilux.jpg";
import pic2 from "../../../public/HR V.jpg";
import pic3 from "../../../public/civic.jpg";
import pic4 from "../../../public/lamborgane.webp";
import pic5 from "../../../public/toyotta.jpg";
import pic6 from "../../../public/car3.png"
import Image from "next/image";
// import SmoothAnimatedSection from './animation';

const cardata = [
  { image: pic, 
    heading: "The Power of Adventure: Hilux 2024", 
    p: "Take on the toughest roads with the new Hilux 2024. With its rugged design, off-road capabilities, and powerful engine, this pickup is built for those who love adventure. Unleash the power that’s ready for any challenge."},

  { image: pic2, 
    heading: "Drive in Style: HR-V 2024", 
    p: "Step into the future of driving with the 2024 HR-V. This sleek, compact SUV blends modern design with versatile functionality. Whether you're navigating city streets or taking a weekend getaway, the HR-V delivers comfort, efficiency, and style."},

  { image: pic3, 
    heading: "Sleek and Sporty: Civic 2024", 
    p: "The 2024 Civic isn't just a car – it's a statement. With dynamic performance, cutting-edge technology, and a stylish design, it’s built for those who demand more. Drive with confidence and elevate your experience on every journey."},

  { image: pic4, 
    heading: "Unleash Luxury: Lamborghini 2024", 
    p: "Feel the rush of performance and design like never before. The 2024 Lamborghini combines raw power with unparalleled luxury, ensuring every drive is nothing short of extraordinary. A supercar that’s as iconic as it is powerful."},

  { image: pic5, 
    heading: "Toyota 2024: Reliability Meets Innovation", 
    p: "The 2024 Toyota is the perfect blend of reliability and innovation. Whether you’re cruising through the city or embarking on an adventure, Toyota continues to offer exceptional performance, modern features, and unmatched durability."},

  { image: pic6, 
    heading: "Unmatched Performance: Sports Car XCN-356 2024", 
    p: "Experience the thrill of the open road with the Sports Car XCN-356 2024. Designed for the passionate driver, this sports car combines cutting-edge engineering with breathtaking speed. From acceleration to handling, it’s built to exceed expectations."},

  { image: pic, 
    heading: "Pure Adrenaline: Sports Car XCN-356 2024", 
    p: "Rev your engines and feel the adrenaline surge in the Sports Car XCN-356 2024. With precision engineering and a sleek aerodynamic design, this car promises to deliver exceptional performance and unforgettable driving experiences."},

  { image: pic2, 
    heading: "Drive the Future: Sports Car XCN-356 2024", 
    p: "The future of driving is here. The Sports Car XCN-356 2024 blends advanced technology with powerful performance to deliver an unforgettable experience. Ready for track-day thrills or cruising around town, this car does it all."},

  { image: pic3, 
    heading: "Speed Redefined: Sports Car XCN-356 2024", 
    p: "Speed, precision, and control – the Sports Car XCN-356 2024 is the ultimate sports car for those who seek both luxury and performance. With a design that stands out and power that gets you there faster, this car is in a class of its own."},

  { image: pic4, 
    heading: "Performance Meets Elegance: Sports Car XCN-356 2024", 
    p: "Elegant yet fierce, the Sports Car XCN-356 2024 is the perfect balance of luxury and speed. With its sleek curves and heart-pounding performance, it's built for drivers who want to turn heads and leave rivals in the dust."},

  { image: pic5, 
    heading: "Master the Road: Sports Car XCN-356 2024", 
    p: "Master every curve with the Sports Car XCN-356 2024. Combining precision handling with incredible horsepower, it’s built to dominate any road. Get behind the wheel and experience driving like never before."},

  { image: pic6, 
    heading: "The Ultimate Driving Machine: Sports Car XCN-356 2024", 
    p: "Built for those who crave power, agility, and style, the Sports Car XCN-356 2024 delivers everything you need in a high-performance vehicle. With its stunning design and electrifying acceleration, it's a car that defines the thrill of the ride."},

  { image: pic, 
    heading: "Pure Power: Toyotta Car 2024", 
    p: "Power, performance, and prestige – the Sports Car XCN-356 2024 gives you all three. With superior engineering and top-tier features, this car will change your perception of speed and driving pleasure."},

  { image: pic3, 
    heading: "Feel the Rush: Sports Car XCN-356 2024", 
    p: "Ready to feel the rush? The Sports Car XCN-356 2024 brings a high-octane experience to the road, with impressive performance specs and an iconic design. Speed, luxury, and excitement, all in one car."},

  { image: pic2, 
    heading: "Exhilaration Awaits: Sports Car 2024", 
    p: "The 2024 Sports Car is not just a car; it's a statement. With blistering speed, a sleek design, and advanced tech, this sports car promises to take your driving experience to the next level."},
  ];

const Cards = () => {
  return (
    <>
    {/* <SmoothAnimatedSection> */}
      <h1 className="text-4xl sm:text-[40px] md:text-[56px] font-extrabold font-serif text-center text-yellow-500 bg-gradient-to-r from-indigo-500 via-blue-600 to-indigo-600 p-6 md:p-8 shadow-xl shadow-blue-500/50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400">
        Featured Cars
      </h1>

      <div id="shop" className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900 text-white min-h-screen p-[40px] grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardata.map((card, index) => (
          <div
            key={index}
            className="card bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 p-6 h-[450px] border-t-4 border-transparent hover:border-t-4 hover:border-red-400 overflow-hidden relative"
          >
            <div className="relative w-full h-[200px] overflow-hidden rounded-md">
              <Image
                src={card.image}
                alt={card.heading}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500 ease-in-out transform hover:scale-110"
              />
            </div>
            <h2 className="text-xl font-semibold mt-4 text-gray-800 text-center transition-colors duration-300 hover:text-blue-500">
              {card.heading}
            </h2>
            <p className="text-gray-600 text-sm text-center mt-2">{card.p}</p>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* </SmoothAnimatedSection> */}
    </>
  );
};

export default Cards;
