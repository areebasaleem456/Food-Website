"use client";
import React from 'react'
type Offer ={
  title:string;
  description:string;
}
const SpecialOffers:React.FC =() =>{
const offers:Offer []=[
  {
    title:"Happy Hours",
    description:"Get 50% Off on every drink from 5pm to 7pm "
  },
  {
    title:"Family Deals",
    description:"Order two main courses and avail Family Deal coupan code "
  },
  {
    title:"Weekly Brunch",
    description:"Enjoy one free  complimentary drink "
  },
  {
    title:"Mid Night Pizza",
    description:" order one large piza Enjoy one small pizza free "
  },

];
const  handleOfferClick =(description:string) =>{
  alert (description);
}
return (
  <section className='py-10'>
    <div className='container mx-auto text-center'>
      <h2 className='text-4xl font-bold mb-6 text-white'>Special Offers</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
        {offers.map((offer ,index)=>(
          <button key={index} onClick={()=> handleOfferClick(offer.description)} className='bg-white shadow-lg rounded-lg text-center hover:bg-gray-400 transition duration-300 transform hover:scale-105'>
            <h3 className='text-2xl font-semibold text-red-700 pt-2'>{offer.title}</h3>
            <p className='text-slate-700 mt-3 capitalize font-semibold pb-2'>{offer.description}</p>
          </button>
        ))}
      </div>
    </div>

  </section>
)
}
export default SpecialOffers