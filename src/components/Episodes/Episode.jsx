import { PaperClipIcon, PlayIcon } from "@heroicons/react/outline";
import { format } from "date-fns";
import Logo from "../../logo.svg";
import dagyaw from "../../dagyaw-logo.png";
import islands from "../../group-islands.png";

export default function Episode({ episode }) {
  return (
    <div className="text-center border-4 border-zinc-800 relative w-full p-12 flex flex-col justify-center items-center gap-5 bg-black rounded sm:mx-auto sm:max-w-sm lg:max-w-xs">
      <img
        src={dagyaw}
        alt="Dagyaw Logo"
        className="h-14 z-10 bg-black border border-[#EC6F43] px-3 py-2 rounded-lg"
      />

      {/* Mac Window */}
      <div className="relative p-4 w-63 h-40 flex flex-col items-center justify-center rounded border-4 border-t-8 border-zinc-200">
        <p className="text-zinc-100 uppercase font-thin text-[0.5rem]">
          {episode.subTitle}
        </p>
        <h3 className="uppercase self font-bold leading-5 text-[#EC6F43]">
          {episode.title}
        </h3>

        {/* Bottom Section */}
        <span className="mt-3 text-zinc-400 text-[0.7rem] uppercase tracking-wide">
          {format(Date.parse(episode.date), "MMMM dd, yyyy")}
        </span>
        <div className="absolute -top-[0.3rem] left-[0.1rem] flex items-center gap-[1px]">
          <span className="block h-[0.2rem] w-[0.2rem] bg-[#FD5652] rounded-full z-20" />
          <span className="block h-[0.2rem] w-[0.2rem] bg-[#FDBD41] rounded-full z-20" />
          <span className="block h-[0.2rem] w-[0.2rem] bg-[#33C949] rounded-full z-20" />
        </div>
        <img
          src={islands}
          alt="Dagyaw Logo"
          className="w-16 absolute -bottom-2 -right-5"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2">
        {episode?.referenceMaterial?.fileUrl?.url && (
          <a
            href={episode?.referenceMaterial?.fileUrl?.url}
            className="cursor-pointer mt-2 text-xs flex justify-center items-center gap-1 rounded border-2 px-3 py-2 border-[#00959F] text-[#00959F]"
            download="briefer"
          >
            <PaperClipIcon className="h-4" />
            <span className="whitespace-nowrap text-xs font-bold">
              Download Briefer
            </span>
          </a>
        )}

        <button className="flex justify-center items-center gap-1 bg-[#5A9657] px-3 py-2 rounded text-zinc-200">
          <PlayIcon className={`h-5 group-hover:text-white`} />
          <span className="whitespace-nowrap text-xs font-bold">
            Play Episode
          </span>
        </button>
      </div>
    </div>
  );
}
