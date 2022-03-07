import {
  DocumentTextIcon,
  PaperClipIcon,
  PlayIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/outline";

export default function Download({
  subTitle,
  title,
  date,
  briefer,
  documentation,
}) {
  return (
    <div className="text-center border-4 border-zinc-800 relative w-full p-12 flex flex-col justify-center items-center gap-5 bg-black rounded-md sm:mx-auto sm:max-w-sm lg:max-w-sm">
      <img
        src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931118/dagyaw/logo512_epw9m9.png"
        alt="Dagyaw Logo"
        className="h-14 z-10 bg-black border border-[#EC6F43] px-3 py-2 rounded-lg"
      />

      {/* Mac Window */}
      <div className="relative p-4 w-63 h-40 flex flex-col items-center justify-center rounded border-4 border-t-8 border-zinc-200">
        <p className="text-zinc-100 uppercase font-thin text-[0.5rem]">
          {subTitle}
        </p>
        <h3 className="uppercase self font-bold leading-5 text-[#EC6F43]">
          {title}
        </h3>

        {/* Bottom Section */}
        <span className="mt-3 text-zinc-400 text-[0.7rem] uppercase tracking-wide">
          {date}
        </span>
        <div className="absolute -top-[0.3rem] left-[0.1rem] flex items-center gap-[1px]">
          <span className="block h-[0.2rem] w-[0.2rem] bg-[#FD5652] rounded-full z-20" />
          <span className="block h-[0.2rem] w-[0.2rem] bg-[#FDBD41] rounded-full z-20" />
          <span className="block h-[0.2rem] w-[0.2rem] bg-[#33C949] rounded-full z-20" />
        </div>
        <img
          src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1646198957/dagyaw/group-islands_kgtwgf.png"
          alt="Dagyaw Logo"
          className="w-16 absolute -bottom-2 -right-5"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center flex-wrap gap-2">
        <a
          href={briefer}
          className="cursor-pointer mt-2 text-xs flex justify-center items-center gap-1 rounded-full border-2 px-3 py-2 border-[#67A464] text-[#67A464]"
          download="briefer"
        >
          <PaperClipIcon className="h-4" />
          <span className="whitespace-nowrap text-xs font-bold">Briefer</span>
        </a>
        <a
          href={documentation}
          className="cursor-pointer mt-2 text-xs flex justify-center items-center gap-1 rounded-full border-2 px-3 py-2 border-[#00959F] text-[#00959F]"
          download="documentation"
        >
          <DocumentTextIcon className="h-4" />
          <span className="whitespace-nowrap text-xs font-bold">
            Documentation
          </span>
        </a>
      </div>
    </div>
  );
}
