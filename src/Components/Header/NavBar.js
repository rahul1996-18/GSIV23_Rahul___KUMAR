import React from "react";
import SearchBar from "../SearchBar";
import { AiFillHome } from "react-icons/ai";

const NavBar = () => {
  return (
    <>
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
        <SearchBar />
        <div>
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <a
              className="ml-2 text-xl text-neutral-800 dark:text-neutral-200"
              href="/"
            >
              <AiFillHome className="w-8 h-8" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
