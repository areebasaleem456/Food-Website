import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-black to-grey-700 font-sans px-6 py-12 mb-7'>
      <div className='absolute inset-0 opacity-55'>
        <Image height={224} width={224} src="/bg picture.avif" alt="banner" className='w-full h-full object-cover'/>
      </div>
      <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center'>
        <h2 className='text-white sm:text-5xl font-bold mb-4 underline'>Discover Our Menu</h2>
        <p className='text-white text-xl text-center underline mb-6 max-w-xl pt-5'>Shop Now For Amazing Discounts</p>
        <button type='button' className='bg-blue-700 text-white text-sm font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-cyan-600 transition duration-300'>Get Amazing Deals After 12PM</button>
      </div>
    </div>
  )
}

export default Banner