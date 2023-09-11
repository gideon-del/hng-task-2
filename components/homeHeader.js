import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import wick from "../public/wick.png";
import { AiFillPlayCircle } from "react-icons/ai";
const HomeHeader = ({ onChange, movie }) => {
  return (
    <header
      className="mb-14 min-h-[600px] text-white"
      style={{
        backgroundImage: `url(${wick.src})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1241px] mx-auto ">
        <div className=" font-bold flex justify-between items-center mb-24 ">
          <figure className="flex flex-row gap-6 items-center  my-3">
            <Image alt="movieBox" src="/tv.png" width={50} height={50} />
            <figcaption> MovieBox</figcaption>
          </figure>
          <div className="border-2 border-white rounded-md py-2 px-3 focus-within:border-blue-500 transition flex basis-3/5 justify-between items-center text-xl">
            <input
              type="text"
              placeholder="What do you want to watch?"
              className=" basis-3/4 focus-within:outline-none bg-transparent"
              onChange={(e) => onChange(e.target.value.trim())}
            />

            <IoSearch />
          </div>
          <div>
            <span>Sign in</span>
          </div>
        </div>
        <div className="max-w-[404px] font-dmSans flex flex-col gap-4 items-start ">
          <h2 className="text-white text-5xl font-bold ">
            John Wick 3 : Parabellum
          </h2>
          <p className="max-w-[302px] text-sm font-medium">
            John Wick is on the run after killing a member of the international
            assassins&apos; guild, and with a $14 million price tag on his head,
            he is the target of hit men and women everywhere.
          </p>
          <button className="px-4 py-2 text-sm rounded-md text-white bg-rose/700 flex justify-between items-center gap-2">
            <AiFillPlayCircle /> <span>WATCH TRAILER</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
