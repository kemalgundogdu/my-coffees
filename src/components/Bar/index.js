import React, { useState } from "react";
import Logo from "../../images/logo.png";
import { HiOutlineFilter } from "react-icons/hi";
import cafeList from "../../data/cafeList";
import { useName } from "../../context/nameContext";

function Bar() {
  const [open, setOpen] = useState(false);
  const { setName } = useName();

  const openHandle = () => {
    setOpen(!open);
  };

  const handleName = (name) => () => {
    setName(name);
    setOpen(false);
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
        className={`fixed left-0 ${
          open === false ? `-top-full` : `top-0`
        } w-full h-full bg-white transition-all duration-75 z-20 text-center`}
      >
        <div className="p-4 flex flex-col items-center justify-center h-full w-full">
          <h2 className="font-semibold text-lg -mt-20 text-center">Kafe Seç</h2>
          <p className="text-[11px] text-gray-500 -mt-1 text-center">
            Gitmek istediğin kafeyi seçerek devam et
          </p>
          <div className="mt-4">
            {/* cafe list */}
            {cafeList.map((cafe, index) => (
              <div
                key={index}
                className="flex gap-2 mt-3 justify-center items-center"
              >
                <button className="text-sm" onClick={handleName(cafe.name)}>
                  {cafe.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Bar;
