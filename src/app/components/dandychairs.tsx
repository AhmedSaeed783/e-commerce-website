import React from 'react'

const DandyChair = () => {
  return (
    <div className='w-[100%] flex justify-between text-gray-700'>
      <div className='lg:w-[50%]'>
      <img src="/assets/image/Product Card-11.png" alt=""className='w-full h-screen object-cover' />
      </div>

      <div className='lg:w-[50%] lg:p-20 p-10'>
<h1 className='lg:text-4xl text-2xl tracking-widest leading-snug'>The Dandy Chair</h1>
<p className='sm:text-xl py-5'>£250</p>
<p className='sm:text-xl py-5'>Description</p>
<p>A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
<ul className='py-5'>
  <li className='list-disc ml-4'>Premium material</li>
  <li className='list-disc ml-4'>Handmade upholstery</li>
  <li className='list-disc ml-4'>Quality timeless classic</li>
</ul>

<p className='my-5'>Dimensions</p>
<div className='flex'>
  <div className='mr-5'>
    <p>Height</p>
    <p>110 cm</p>
  </div>
  <div className='mr-5'>
    <p>Width</p>
    <p>75 cm</p>
  </div>
  <div className=''>
    <p>Depth</p>
    <p>50 cm</p>
  </div>
</div>

<div className='flex items-center justify-between'>
  <div className='flex items-center'>
  <p className='mr-5'>Amount: </p>
<div className='my-5 py-2 flex w-28 justify-between bg-gray-100 px-2'>
<p>-</p>
<p>1</p>
<p>+</p>
</div>
  </div>
<div>
  <a href='#' className='py-3 px-8 text-white bg-[#2a254b] text-sm'>Add to Cart</a>
</div>
</div>

      </div>
    </div>
  )
}

export default DandyChair
