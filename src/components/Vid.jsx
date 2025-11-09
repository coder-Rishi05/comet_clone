import { AiOutlinePlayCircle } from "react-icons/ai";
const Vid = () => {
  return (
    <>
      <div className="page2 bg-neutral-200 w-full h-screen flex items-center justify-center ">
        <div className="box   flex items-center justify-center ">
          <div className="img w-[65vw] relative ">
            <img
              className="w-full h-full object-center object-cover"
              src="public/solar.png"
              alt=""
            />
            <button className="absolute flex gap-2 items-center justify-center shadow-2xl top-[70%] rounded-full left-1/2 -translate-z-1/2 -translate-x-1/2 cursor-pointer transition-all duration-500 hover:scale-[1.03] px-4 py-3 bg-white ">
              <AiOutlinePlayCircle className="size-5  font-light " />
              <p className=" text-sm capitalize">Watch film</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vid;
