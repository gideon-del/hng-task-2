import Image from "next/image";
import { IoSearch } from "react-icons/io5";

const HomeHeader = ({ onChange }) => {
  return (
    <header className="mb-14">
      <div className="max-w-[1241px] mx-auto font-bold flex justify-between items-center">
        <figure className="flex flex-row gap-6 items-center  my-3">
          <Image alt="movieBox" src="/tv.png" width={50} height={50} />
          <figcaption> MovieBox</figcaption>
        </figure>
        <div className="border-2 border-black rounded-md py-2 px-3 focus-within:border-blue-500 transition flex basis-3/5 justify-between items-center text-xl">
          <input
            type="text"
            placeholder="What do you want to watch?"
            className=" basis-3/4 focus-within:outline-none"
          />

          <IoSearch />
        </div>
        <div>
          <span>Sign in</span>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
