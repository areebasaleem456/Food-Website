import React from "react";
import Image from "next/image";
const floatingImage = () => {
  return (
    <section className="container mx-auto py-10 flex lg:flex-row md:flex-row items-center">
      <div className="lg:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white underline">Delicious Products</h2>
        <p className="text-white mb-4 capitalize font-semibold text-xl ">
          Where flavors meet passion.. Your ultimate food companion
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center capitalize text-white underline">
          Coming Soon: Our new items launches
        </h3>
        <ul className="pt-4">
          <li className="text-white">
            <strong>Tandoori Chicken Quesadilla:</strong>A fusion twist on
            traditional quesadillas, filled with spiced tandoori chicken and
            melted cheese.
          </li>
          <br />

          <li className="text-white">
            <strong>K-Town Burrito:</strong>A Korean-inspired burrito packed
            with marinated beef, kimchi fried rice, and spicy Gochujang sauce.
          </li>
          <br />
          <li className="text-white">
            <strong>Karchi Street Food Burger:</strong>A flavorful burger
            inspired by Indian street food, featuring a spiced lamb patty, mint
            chutney, and crispy onions.
          </li>
          <br />
          <li className="text-white">
            <strong>Tokyo Ramen Bowl:</strong>A steaming bowl of rich tonkotsu
            ramen, topped with braised pork belly, soft-boiled egg, and green
            onions
          </li>
          <br />
        </ul>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
        <Image height={224} width={224} src="/comingsson.png" alt="comingsoon"  className="h-[500px] w-full rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"  />
        
      </div>
    </section>
  );
};
export default floatingImage;
