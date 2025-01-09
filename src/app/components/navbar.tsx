import React from 'react'
import { FaHamburger ,FaSearch,FaBolt  } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <div className='grid xl:grid-cols-1 grid-cols-1 bg-gradient-to-r from-black to-slate-700'>
        <div className='p-5'>
          <div className='py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-bl to-grey-900'>
            <div className='flex justify-between items-center'>
              <div className='flex justify-items-center items-center gap-2'>
                {/* logo */}
                <FaHamburger className='w-6 h-6 text-yellow-400 hover:text-orange-800' />
                {/* search icon */}
                <div style={{position:"relative"}}>
                  <input type="text" placeholder='Search Your Favorite Food' className='rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block text-orange-800 ' />

                 < FaSearch className='w-5 h-5 text-yellow-400 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block'/>
                </div>
              </div>
              <div className='flex justify-center items-center gap-2 '>
                <FaBolt className=' w-5 h-5 text-amber-400 hidden lg:block md:block'/>
                <p className='text-sm text-white hidden lg:block md:block'>Order now and get it with</p>
                <span className='text-amber-400'>15 minutes!</span>
              
              {/* cart icon */}
              < FaCartShopping className="p-1 w-8 h-8 rounded-full ring-2 text-sky-400 relative hover:text-amber-400"/>
              <Image height={20} width={20} src="/mypicture.jpeg" alt="user picture" className='inline-block w-8 h-8 rounded-full ring-2 ring-sky-400 hover:text-amber-400' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar