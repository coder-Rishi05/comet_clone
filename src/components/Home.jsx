import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col ">
      <div className="text">
        <p className="text-xl  text-gray-500 text-center font-100 ">
          A new browser from{" "}
          <a
            href="https://www.perplexity.ai/"
            className="underline cursor-pointer transition-all ease-in-out hover:text-teal-400"
          >
            Perplexity
          </a>
        </p>
        <h1 className="text-6xl text-black  ">
          The browser that works for you
        </h1>
      </div>
      <div className="download-btn">Download Comet</div>
    </div>
  );
};

export default Home;
