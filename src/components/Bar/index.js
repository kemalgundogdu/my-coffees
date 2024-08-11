import React from "react";
import Logo from "../../images/logo.png";
import { HiOutlineFilter } from "react-icons/hi";

function Bar() {
  return (
    <div className="absolute flex items-center gap-4 justify-between z-50 bg-white rounded py-2 px-1 top-5 left-1/2 transform -translate-x-1/2 w-[90%] md:max-w-[350px]">
      <img src={Logo} alt="My Coffee's" className="w-12" />
      {/* filter button and sort button */}
      <div className="flex justify-end mt-2 mr-2 gap-2">
        <button className="flex items-center gap-0 px-2 py-1 text-sm border rounded">
          <HiOutlineFilter className="mr-2 h-4 w-4" />
          Filtrele
        </button>
      </div>
    </div>
  );
}

export default Bar;