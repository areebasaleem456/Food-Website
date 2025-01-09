import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

const Menuitem = () => {
  const productImages = [
    "/food1.jpg",
    "/food2.jpg",
    "/food3.jpg",
    "/food4.jpg",
    "/food5.jpg",
    "/food6.jpg",


  ];
  return (
    <div className="relative text-center p-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.1,
        }}
      />
      <h1 className="font-bold text-4xl mb-4 text-white z-10 relative underline
      ">
       Our Most Requested Items
      </h1>
      <h1 className="z-10 relative text-white underline text-3xl">Order Now</h1>
      <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
        {Array.from({length:6}).map((_, index)=>(
            <div key={index} className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative">
             <a href="#">
                <Image height={224} width={224} src={productImages[index]} alt={`Product ${index + 1}`} className="h-80 w-72 object-cover rounded-t-xl" />
                <div className="px-4 py-3 w-72">
                    <span className="text-slate-500 mr-3 uppercase text-xs">Our Specialities</span>
                    <p className="text-lg font-bold text-red-700 truncate block capitalize">Desi Foods{index+1} </p>
                    <div className="flex items-center ">
                        <p className="text-lg font-semibold text-black my-3 cursor-auto">$200</p>
                        <br />
                        <p className="text-sm text-blue-800 cursor-auto ml-2 line-through">$230</p>
                        <div className="ml-auto ">
                        <FaShoppingCart  className="w-5 h-5 text-blue-800"/>
                        </div>

                    </div>
                </div>
             </a>
            </div>
        ))}

      </section>
    </div>
  );
};
export default Menuitem;
