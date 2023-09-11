import Image from "next/image";
import React from "react";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { LiaTvSolid } from "react-icons/lia";
import { LuCalendarDays } from "react-icons/lu";
import Link from "next/link";
const MovieHeader = () => {
  return (
    <header className=" md:border-r md:border-r-black/30 md:rounded-r-[45px]">
      <Link href={"/"}>
        <figure className="flex justify-center items-center gap-6 font-dmSans text-2xl font-bold md:mb-28 ,md:mt-14 px-5 my-3 ">
          <Image alt="movie box" src={"/tv.png"} width={50} height={50} />
          <span>MovieBox</span>
        </figure>
      </Link>
      <nav className=" bg-white px-2 py-4 ">
        <ul className="text-[#666] font-semibold md:text-2xl text-base font-poppins justify-between flex  md:flex-col md:gap-20  ">
          <li className="flex flex-col md:flex-row items-center  md:px-9 justify-between md:gap-4">
            <GoHome /> <span>Home</span>
          </li>
          <li className="flex items-center md:px-9 md:flex-row flex-col  justify-between gap-2 md:gap-4 ">
            <BiCameraMovie /> <span>Movie</span>
          </li>
          <li className="flex items-center md:px-9  md:flex-row flex-col justify-between gap-2 md:gap-4">
            <LiaTvSolid /> <span>TV Series</span>
          </li>
          <li className="flex items-center md:px-9 md:flex-row flex-col justify-between  gap-2 md:gap-4">
            <LuCalendarDays /> <span>Upcoming</span>
          </li>
        </ul>
      </nav>
      <div></div>
    </header>
  );
};

export default MovieHeader;
