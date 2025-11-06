import React from "react";
import { GoDownload } from "react-icons/go";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-20 py-6">
      <div className="left  flex items-center justify-center gap-5 ">
        <div className="logo size-10 flex items-center justify-center shadow-amber-100 shadow-2xl bg-neutral-50 rounded-full ">
          <img
            className="size-7  object-center object-cover "
            src="public/perBlack.png"
            alt=""
          />
        </div>
        <h1 className="">commet</h1>
      </div>
      <div className="right flex items-center justify-center gap-5 ">
        <div className="flex items-center px-5 py-3 gap-3 text-white bg-[#26919E] rounded-full ">
          <GoDownload className="font-bold size-5" />
          <p className=" capitalize">download</p>
        </div>
        <div className="logo size-10 flex items-center justify-center shadow-amber-100 shadow-2xl bg-neutral-50 rounded-full ">
          <img
            className="size-7  object-center object-cover "
            src="public/perBlack.png"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
