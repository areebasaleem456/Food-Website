import React from "react";

const Reservation = () => {
  return (
    <section className="bg-gradient-to-r from-black to bg-slate-900 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-white underline capitalize">
          Make a reservation
        </h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4 text-white">
            <input
              type="text"
              placeholder="Enter Your Name Here:"
              className="w-full p-3 border border-grey-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4 text-white">
            <input
              type="email"
              placeholder="Enter Your Mail Here:"
              className="w-full p-3 border border-grey-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4 text-white">
            <input
              type="date"
              className="w-full p-3 border border-grey-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4 text-white">
            <input
              type="time"
              className="w-full p-3 border border-grey-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4 mt-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-teal-300">Reserve Table</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
