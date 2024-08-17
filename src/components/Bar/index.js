import React, { useState } from "react";
import Logo from "../../images/logo.png";
import { HiOutlineFilter } from "react-icons/hi";
import cafeList from "../../data/cafeList";

function Bar() {
  const [open, setOpen] = useState(false);

  const openHandle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="fixed top-4 px-2 w-full z-30">
        <div className="p-1 rounded bg-white shadow-lg inline-block">
          <img src={Logo} alt="My Coffee's" className="w-12" />
        </div>
        <div className="absolute right-0 mr-2 top-0">
          <button
            className="p-2 rounded bg-white shadow-lg"
            onClick={openHandle}
          >
            <HiOutlineFilter size={24} />
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 ${
          open === false ? `-right-full` : `right-0`
        } w-[62%] h-full bg-white transition-all z-20`}
      >
        <div className="p-4">
          <h2 className="font-semibold text-lg">Kafe Seç</h2>
          <div className="mt-4">
            {/* cafe list */}
            {
              cafeList.map((cafe, index) => (
                <div key={index}>
                  <input type="checkbox" id={cafe.id} name={cafe.name} value={cafe.name} />
                  <label htmlFor={cafe.id}>{cafe.name}</label>
                </div>
              ))
            }            
          </div>
        </div>
      </div>
    </>
  );
}

export default Bar;
