import React from "react";

const Footer = () => {
  return (
    <footer className="text-white body-font bg-gradient-to-r from-black to-gray-600">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col text-white">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left text-white">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        
        <span className="ml-3 text-2xl text-white font-bold">Foods Diary</span>
      </a>
      <p className='text-white mt-2 ml-2'>Our Food Diary is a mouth-watering online destination where foodies can discover much more.. </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          INFORMATIONAL
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a href="/" className="text-white hover:text-gray-800">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-800">About Us </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-800">Contact</a>
          </li>
          <li>
            <a href="/productlist" className="text-white hover:text-gray-800">Items List</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          SUPPORT
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-gray-800">Help Centre</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Phone Support</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Email Support</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Live Chat</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          LEGAL
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-gray-800">Terms Of Use</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Privacy Policy</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Cookie Policy</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Disclaimer</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          SOCIAL ACCOUNTS
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a href="https://www.facebook.com/tooba.saleem.3954?mibextid=ZbWKwL" target="_blank" className="text-white hover:text-gray-800">Facebook</a>
          </li>
          <li>
            <a href="https://github.com/account" target="_blank" className="text-white hover:text-gray-800">Github</a>
          </li>
          <li>
            <a href="http://www.linkedin.com/in/areeba-saleem-67025a2ba" target="_blank" className="text-white hover:text-gray-800">Linkedin</a>
          </li>
          <li>
            <a  className="text-white hover:text-gray-800 cursor-pointer">Instagram</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gradient-to-r from-black to-gray-600">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row font-semibold">
      <p className="text-white text-sm text-center sm:text-left ml-[500px] ">
        © 2025 CopyRight Claimed
        <a
          href="https://twitter.com/knyttneve"
          rel="noopener noreferrer"
          className="text-white ml-1"
          target="_blank"
        >
          All Rights Are Reserved.
        </a>
      </p>
      
    </div>
  </div>
</footer>
  );
};

export default Footer;
