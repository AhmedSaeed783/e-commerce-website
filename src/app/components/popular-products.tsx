import React from 'react'

const PopularProducts = () => {
  return (
    <div className="text-gray-800 w-full lg:px-20 sm:px-10 px-5 lg:py-20 py-10">
         <h1 className="text-2xl">Our popular products</h1>
         {/* cards */}
      <div  className="flex justify-between items-center lg:space-x-10 md:space-x-3 max-md:flex-col my-10 md:text-lg">

        {/* 1st Card */}
        <div>
           <img src='/assets/image/Product Card-4.png' alt='product card'/>
           </div>

           {/* 2nd Cards */}
           <div>
           <img src='/assets/image/Product Card.png' alt='product card'/>
           </div>

           {/* 3nd Card */}
           <div>
           <img src='/assets/image/Product Card-5.png' alt='product card'/>
           </div>
           
      </div>
    </div>
    
  )
}

export default PopularProducts
