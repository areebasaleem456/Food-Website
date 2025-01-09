import React from "react";
import Image from "next/image";
const products = [
  {
    id: 1,
    name: "Spicy Shwarma",
    category: "Desert Storm",
    price: 37,
    image: "/shwarma.jpg",
    bgColor: "bg-teal-500",
  },

  {
    id: 2,
    name: "Chicken Roll",
    category: "Chicken Charm",
    price: 45,
    image: "/roll.jpg",
    bgColor: "bg-amber-500",
  },
  {
    id: 3,
    name:"Fried Chicken",
    category: "Chicken Charm",
    price: 45,
    image: "/friedchicken.jpg",
    bgColor: "bg-teal-500",
  },
  {
    id: 4,
    name:"Chicken Nuggets",
    category: " Blazing Nuggets",
    price: 48,
    image: "/nuggets.jpg",
    bgColor: "bg-amber-500",
  },
   {
    id: 5,
    name: " Grilled Veggie Shashlik",
    category: "Mediterranean Mashup",
    price: 60,
    image: "/shashlik.jpg",
    bgColor: "bg-teal-500",
  },
  {
    id: 6,
    name: "Spicy Fries",
    category: "French Delight",
    price: 20,
    image: "/fries.jpg",
    bgColor: "bg-amber-500",
  },
  


];

const Productlist = () => {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center my-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative flex-col overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-2 scale-150 group:hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="152"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />

            <rect
              y="107.48"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />

             

          </svg>
          <div className="relative pt-10 pb-5 px-5 flex items-center justify-center group:hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 50%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <Image height={224} width={224} src={product.image} alt={product.name}  className="relative w-72 h-52"/>
          </div>
          <div className="relative text-white px-5 font-semibold">
            <span className="block opacity-75 ">{product.category}</span>
            <div >
              <span className="block font-bold text-2xl pt-1">{product.name}</span>
              
            </div>
            <span className="block bg-white rounded-md pl-5 mb-5 text-orange-500 text-xs font-bold px-2 py-1 leading-none items-center w-32 text-center mt-5">{product.price}</span>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Productlist;
