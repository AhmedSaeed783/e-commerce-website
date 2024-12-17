import React from "react";

const Brand = () => {
  return (

      <div className="  mt-10 w-[90%] mx-auto bg-[#2A254B] flex max-lg:flex-col justify-between text-white">
        {/* left side */}
        <div className="relative xl:p-20 sm:p-10 p-5 xl:w-[70%] leading-snug tracking-widest">
          <div>
            <h1 className="text-3xl pb-10">
              The furniture brand for the future, with timeless designs
            </h1>
            <a href="#" className=" px-4 py-3 bg-[#494569]">
              View Collection
            </a>
          </div>

          <div className="lg:absolute lg:bottom-20 max-lg:mt-10 font-thin xl:w-[70%]">
            <p>
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>
        </div>

        {/* right side */}
        <div className="h-[80vh] flex xl:w-[30%] max-lg:hidden">
          <img
            src="/assets/image/image.png"
            alt="brand image"
            className="h-full object-cover"
          />
        </div>
      </div>

  );
};

export default Brand;
