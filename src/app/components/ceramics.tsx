import React from 'react'

export default function Ceramics() {
  return (
      <div className="text-gray-800 w-full lg:px-20 sm:px-10 px-5 lg:py-20 py-10">
         <h1 className="text-2xl">Ceramics</h1>
   
         {/* cards */}
         <div className="flex justify-between items-center lg:space-x-10 md:space-x-3 max-md:flex-col my-10 md:text-lg">
   
           {/* 1st card */}
           <div>
           <img src='/assets/image/Product Card.png' alt='product card'/>
           </div>
   
           {/* 2nd card */}
           <div className="max-md:mt-5">
           <img src='/assets/image/Product Card-1.png' alt='product card'/>
           </div>
   
           {/* 3rd card */}
           <div className="max-md:mt-5">
             <img src='/assets/image/Product Card-2.png' alt='product card'/>
           </div>
   
           {/* 4th card */}
           <div className="max-md:mt-5">
           <img src='/assets/image/Product Card-3.png' alt='product card'/>
           </div>
   
         </div>
       </div>
  )
}
