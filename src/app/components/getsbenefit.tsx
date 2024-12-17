import React from "react";

const GetsBenefit = () => {
  return (
    <div className=" mx-auto bg-gray-50 lg:px-20 sm:px-10 px-5 lg:py-20 py-10">
    <div className="text-gray-800 lg:w-[70%] w-[95%] bg-white mx-auto lg:px-20 sm:px-10 px-5 lg:py-20 py-10">
      <h1 className="text-2xl text-center">
        Join the club and get the benefits
      </h1>

      <div className="text-center my-5 w-[60%] mx-auto">
        <p>
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
      </div>
      <div className="flex w-full mx-auto sm:mt-10 mt-5">
        <div className="flex justify-center items-center w-full mx-auto">
        <input
          type="text"
          placeholder="your@email.com"
          name=""
          id="email"
          required
          className="bg-gray-100 px-2 py-2 w-[60%]"
        />
      <button className="bg-[#2a254b] py-2 px-4 text-white">Sign up</button>
        </div>
      </div>
    </div>
    </div>
  );
};  

export default GetsBenefit;
