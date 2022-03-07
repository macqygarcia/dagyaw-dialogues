import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUpIcon, FlagIcon, GlobeIcon } from "@heroicons/react/outline";

export default function BottomMenu() {
  const [hidden, setIsHidden] = useState(true);
  return (
    <div
      className={`fixed bottom-0 z-50 w-full pb-5 bg-gradient-to-t from-black
        transform transition-transform ease-in-out duration-300
        ${hidden ? "translate-y-20" : ""}
        `}
    >
      <div className="flex flex-col items-center justify-center">
        <ChevronUpIcon
          onClick={() => setIsHidden(!hidden)}
          className={`text-white bg-black rounded-full p-1 z-40 h-5 cursor-pointer lg:h-7 place-self-center
                        transition-all ease-in-out duration-300
                      ${
                        hidden
                          ? "animate-bounce rotate-0 opacity-50"
                          : "rotate-180 opacity-100"
                      }`}
        />
        <h3 className="text-center z-20 text-zinc-200 px-4 py-2 uppercase font-bold tracking-widest">
          View Episodes
        </h3>
      </div>
      <section className="z-50 h-full text-center flex items-center justify-center gap-2">
        <Link
          to="/national"
          className="px-4 py-2 rounded-md border-2 border-zinc-200 text-zinc-200 cursor-pointer mt-2 text-xs flex justify-center items-center gap-1"
        >
          <FlagIcon className="h-5" />
          <p className="font-semibold text-lg">National</p>
        </Link>

        <Link
          to="/regions"
          className="px-4 py-2 rounded-md border-2 border-zinc-200 text-zinc-200 cursor-pointer mt-2 text-xs flex justify-center items-center gap-1"
        >
          <GlobeIcon className="h-5" />
          <p className="font-semibold text-lg">Regional</p>
        </Link>
      </section>
    </div>
  );
}
