import React from "react";


const Upperheader = () => {
  return (
    <div className="flex item-center justify-center h-[48px] w-full bg-[#FFFFFF] pt-3 pb-3 gap-32 border-b-2">
      <span className="text-black">Avion</span>
    </div>

  );
};

export default Upperheader;

export const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
         
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-9">
            <a href="/plantpots" className="mr-5 hover:text-gray-900">Plants plots</a>
            <a href="/ceramics" className="mr-5 hover:text-gray-900">Ceramics</a>
            <a className="mr-5 hover:text-gray-900">Table</a>
            <a className="mr-5 hover:text-gray-900">Chairs</a>
            <a className="mr-5 hover:text-gray-900">Crockery</a>
            <a className="mr-5 hover:text-gray-900">Tableware</a>
            <a className="mr-5 hover:text-gray-900">Cultery</a>
          </nav>
         </div>
      </header>
    </div>
  );
};
