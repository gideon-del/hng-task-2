import Image from "next/image";
import React from "react";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { LiaTvSolid } from "react-icons/lia";
import { LuCalendarDays } from "react-icons/lu";
const MovieHeader = () => {
  return (
    <header className=" border-r border-r-black/30 rounded-r-[45px]">
      <figure className="flex justify-center items-center gap-6 font-dmSans text-2xl font-bold mb-28 mt-14 px-5">
        <Image alt="movie box" src={"/tv.png"} width={50} height={50} />
        <span>MovieBox</span>
      </figure>
      <nav>
        <ul className="text-[#666] font-semibold text-2xl font-poppins flex  flex-col gap-20  ">
          <li className="flex items-center px-9 gap-4">
            <GoHome /> <span>Home</span>
          </li>
          <li className="flex items-center px-9 gap-4 ">
            <BiCameraMovie /> <span>Movie</span>
          </li>
          <li className="flex items-center px-9 gap-4">
            <LiaTvSolid /> <span>TV Series</span>
          </li>
          <li className="flex items-center px-9 gap-4">
            <LuCalendarDays /> <span>Upcoming</span>
          </li>
        </ul>
      </nav>
      <div></div>
    </header>
  );
};

export default MovieHeader;
