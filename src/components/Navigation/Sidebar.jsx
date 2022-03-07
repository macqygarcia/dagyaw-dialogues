import { useState } from "react";
import { Link } from "react-router-dom";

import { navdata } from "./data";

export default function Sidebar() {
  const [isOPen, setIsOPen] = useState(false);
  return (
    <div
      className={`w-full overflow-hidden bg-[#171717] text-zinc-100 transition-all duration-300 ease-out lg:hidden ${
        isOPen ? "h-screen z-300 fixed" : "h-14"
      } `}
    >
      {/* LOGO DAGYAW DIALOGUES */}
      <div className=" group flex w-screen cursor-pointer items-center justify-center py-4">
        <Link to="/">
          <span className="3s inline-block pt-[1px] text-center text-lg uppercase tracking-wider text-zinc-100 transition-all ease-out group-hover:text-[#00959F]">
            Dagyaw Dialogues
          </span>
        </Link>
      </div>

      {/* = Nav */}
      <div
        className="absolute top-5 left-5 flex cursor-pointer flex-col gap-2 p-2"
        onClick={() => setIsOPen(!isOPen)}
      >
        <span
          className={`inline-block h-[1px] w-5 origin-center transform bg-zinc-100 transition-all duration-100 ease-in-out ${
            isOPen ? "translate-y-[5px] rotate-45" : "translate-y-0 rotate-0"
          }`}
        />
        <span
          className={`inline-block h-[1px] w-5 origin-center transform bg-zinc-100 transition-all duration-100 ease-in-out ${
            isOPen
              ? "-translate-[1px] -translate-y-[4px] -rotate-45"
              : "-translate-y-0 -rotate-0"
          }`}
        />
      </div>

      <span
        className={`inline-block h-[1px] w-screen bg-zinc-700 
      
      `}
      />
      <nav className="h-screen w-screen ">
        <ul className="flex h-screen flex-col gap-4 divide-y-[1px] divide-zinc-700 px-10">
          {navdata.map((link, index) => (
            <Link to={link.href} key={index}>
              <li
                onClick={() => setIsOPen(false)}
                className="3s cursor-pointer pt-3 text-lg font-light text-zinc-300 transition-all ease-out hover:text-zinc-100"
              >
                {link.link}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
