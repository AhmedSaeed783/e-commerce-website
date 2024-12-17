import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";

const DifferentBrand = () => {
  return (
    <div className="text-gray-800 w-full lg:px-20 sm:px-10 px-5 lg:py-20 py-10">
      <h1 className="text-2xl text-center">What makes our brand different</h1>

      {/* cards */}
      <div className="flex justify-between items-center lg:space-x-10 md:space-x-3 max-md:flex-col my-10 md:text-lg">

        {/* 1st card */}
        <div>
          <TbTruckDelivery className="text-3xl" />
          <h2 className="mt-5">Next day as standard</h2>
          <p className="mt-3">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>

        {/* 2nd card */}
        <div className="max-md:mt-5">
        <IoIosCheckmarkCircleOutline className="text-3xl" />
          <h2 className="mt-5">Made by ture artisans</h2>
          <p className="mt-3">
          Handmade crafted goods made with
          real passion and craftmanship
          </p>
        </div>

        {/* 3rd card */}
        <div className="max-md:mt-5">
          <img className="w-7" src="/assets/image/sprout.png" alt=""/>
          <h2 className="mt-5">Unbeatable prices</h2>
          <p className="mt-3">
          For our materials and quality you won’t find better prices anywhere
          </p>
        </div>

        {/* 4th card */}

        <div className="max-md:mt-5">
          <img className="w-7" src="/assets/image/purchase.png" alt="" />
          <h2 className="mt-5">Recycled packaging</h2>
          <p className="mt-3">
          We use 100% recycled packaging to ensure our footprint is manageable
          </p>
        </div>

      </div>
    </div>
  );
};

export default DifferentBrand;
