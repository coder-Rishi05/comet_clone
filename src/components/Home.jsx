import React from "react";
import { GoDownload } from "react-icons/go";

const Home = () => {
  return (
    <div className="w-full h-full gap-10 flex items-center py-40 flex-col ">
      <div className="text">
        <p className="text-md mb-6   text-gray-500 text-center font-100 ">
          A new browser from{" "}
          <a
            href="https://www.perplexity.ai/"
            className="underline cursor-pointer transition-all ease-in-out hover:text-teal-400"
          >
            Perplexity
          </a>
        </p>
        <h1 className="text-7xl  text-black tracking-tighter italic font-normal  ">
          The browser that works for you
        </h1>
      </div>
      <div className="flex items-center gap-4  bg-neutral-900  px-6 py-4 rounded-full text-xl font-normal  download-btn">
        <i className="p-4 bg-white rounded-full ">
          <GoDownload className="text-black  bg-white rounded-full " />
        </i>
        <p>Download Comet</p>
      </div>
    </div>
  );
};

export default Home;
