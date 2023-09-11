import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import wick from "../public/wick.png";
import { AiFillPlayCircle } from "react-icons/ai";
import Link from "next/link";
const HomeHeader = ({ onChange }) => {
  return (
    <header
      className="mb-14 md:min-h-[600px] min-h-[400px] text-white py-6 px-4"
      style={{
        backgroundImage: `url(${wick.src})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1241px] mx-auto ">
        <div className=" font-bold md:flex md:justify-between items-center mb-24 search-bar-grid justify-between  ">
          <Link href={"/"}>
            <figure
              className="flex flex-row gap-6 items-center  my-3 "
              style={{ gridArea: "logo" }}
            >
              <Image alt="movieBox" src="/tv.png" width={50} height={50} />
              <figcaption> MovieBox</figcaption>
            </figure>
          </Link>
          <div
            className="border-2 border-white rounded-md py-2 px-3 focus-within:border-blue-500 transition flex basis-3/5 justify-between items-center text-xl"
            style={{
              gridArea: "input",
            }}
          >
            <input
              type="text"
              placeholder="What do you want to watch?"
              className=" basis-3/4 focus-within:outline-none bg-transparent"
              onChange={(e) => onChange(e.target.value.trim())}
            />

            <IoSearch />
          </div>
          <div
            style={{
              gridArea: "login",
            }}
          >
            <span>Sign in</span>
          </div>
        </div>
        <div className="md:max-w-[404px]  md:text-start text-center  font-dmSans flex flex-col gap-4 md:items-start items-center ">
          <h2 className="text-white text-5xl font-bold ">
            John Wick 3 : Parabellum
          </h2>
          <p className="md:max-w-[302px]text-sm font-medium">
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
