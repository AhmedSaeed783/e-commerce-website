import React from "react";

export default function GlobalBrand() {
  return (
    <div className="w-full flex max-lg:flex-col justify-between">

        {/* left side */}
        <div className="relative lg:w-1/2 w-full lg:px-20 sm:px-10 px-5 lg:py-20 py-10 ">
      <h1 className="text-2xl">
        From a studio in London to a global brand with over 400 outlets
      </h1>
      <div className="mt-5">
        <p>
          When we started Avion, the idea was simple. Make high quality
          furniture affordable and available for the mass market. 
        </p>

        <p className="mt-5">
        Handmade, and
          lovingly crafted furniture and homeware is what we live, breathe and
          design so our Chelsea boutique become the hotbed for the London
          interior design community.
        </p>
      </div>

      <div className="mt-5">
        <a href="#" className="py-3 px-6 text-lg lg:absolute lg:bottom-10  bg-gray-100">Get In Touch</a>
      </div>
        </div>

        {/* right side */}
        <div className="lg:w-1/2 w-full">
            <img src="/assets/image/Product card-6.png" alt="global brand image" className="w-full"/>
        </div>
    </div>
  );
}
