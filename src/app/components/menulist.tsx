"use client";
import { useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { Product } from "./types";
import ProductCard from "./productcard";
import Image from "next/image";

const Menulist:React.FC = () : ReactNode => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckOut, setIsCheckOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
    const toggleCart = () => {
      setShowCart((prev) => !prev);
    };

    const goToCheckOut = () => {
      setIsCheckOut(true);
    };
    const clearCart = () => {
      setCart([]);
      localStorage.removeItem("cart");
    };

    return (
      <div className="relative min-h-screen py-6 my-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
          style={{
            backgroundImage: "url('/bg picture.avif')",
          }}
        ></div>
        <div className="relative z-10 ">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h1 className="text-4xl font-bold text-white underline capitalize mb-4">
              Delicious Items In our menu
            </h1>
            <p className="text-white text-xl pt-5">
              Explore our suggestions of mouth watering items.Fresh ingridients,
              tasty flavors, and the best experience.
            </p>
          </div>
          {/* product section */}
          <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
            {products.map((product)=>(
              <ProductCard key={product.image} {...product} onAddToCart={addToCart}/>
            ))};

          </div>
          {/* cart section */}
          <div className="max-w-6xl mx-auto mt-8">
            <button
              onClick={toggleCart}
              className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-in-out transform"
            >
              {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
            </button>
            {showCart && (
              <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold mb-4 text-blue-600 capitalize">
                  Your cart items include
                </h2>
                {cart.length > 0 ? (
                  <div>
                    <ul>
                      {cart.map((product, index) => (
                        <li
                          className="flex items-center justify-left mb-6 transform transition-all duration-300 ease-in-out "
                          key={index}
                        >
                          <Image height={20} width={20}
                            src={product.image}
                            alt={product.name}
                            className="w-48 h-28 sm:w-32 inline-block transition-transform duration-300 ease-in-out transform text-black"
                          />
                          <span className="ml-4 text-lg font-medium text-black">
                            {product.name} - ${product.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between mt-6 text-black">
                      <span className="font-semibold text-xl ">
                        Total: $
                        {cart.reduce(
                          (total, product) => total + product.price,
                          0
                        )}
                      </span>
                      <div>
                        <button
                          onClick={goToCheckOut}
                          className="bg-green-600 py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-green-700 trasitio duration-300 ease-in-out text-white transform hover:scale-110 capitalize"
                        >
                          Proceed to checkout
                        </button>

                        <button
                          onClick={clearCart}
                          className="bg-red-600 py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-red-700 trasitio duration-300 ease-in-out text-white ml-4 transform hover:scale-110 capitalize"
                        >
                          clear cart
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-lg text-slate-600 capitalize">
                    Your cart is empty
                  </p>
                )}
              </div>
            )}
          </div>
          {/* checkout section */}
          {isCheckOut && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
              <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
                <h2 className="text-4xl font-bold text-blue-600 mb-4">
                  Checkout
                </h2>
                <p className="text-lg text-red-600">
                  Please confirm your order before proceeding
                </p>
                <div className="mt-4">
                  <ul>
                    {cart.map((product, index) => (
                      <li key={index} className="flex justify-between mb-4">
                        <span>{product.name}</span>
                        <span>${product.price}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between mt-4">
                    <span className="font-semibold">Total:</span>
                    <span className="font-semibold ">
                      $
                      {cart.reduce(
                        (total, product) => total + product.price,
                        0
                      )}
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex justify-between">
                  <button
                    onClick={() => setIsCheckOut(false)}
                    className="bg-slate-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-slate-600 transition duration-300"
                  >
                    Close
                  </button>

                  <button
                    onClick={() =>
                      alert("Order Confirm... Will Deliever You Soon")
                    }
                    className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-green-600 transition duration-300"
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          )}

          
        </div>
      </div>
    );
  };


export default Menulist;
