import { Link } from "react-router-dom";

export default function Region({ region }) {
  return (
    <div className="relative w-full flex flex-col justify-center items-center cursor-pointer sm:max-w-sm sm:gap-5 backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-2xl overflow-hidden group">
      <img
        src={region?.photo?.url}
        alt={region?.short}
        className="z-20 opacity-40 w-full h-full transition-all duration-300 ease-in-out group-hover:opacity-70 group-hover:scale-105"
      />

      <div className="absolute z-20 bottom-5 left-5">
        <p className="text-zinc-200 font-bold uppercase">{region.short}</p>
        <p className="text-zinc-200 leading-3">{region.long}</p>
      </div>
      <div className="absolute z-10 top-0 left-0 h-full w-full bg-black" />

      <Link
        to={`/regions/${region.id}`}
        prefetch="intent"
        className="absolute z-20 text-white font-thin uppercase text-sm opacity-0 bg-zinc-900 px-4 py-2 rounded-lg tracking-wider group-hover:opacity-100 transition-all duration-300 ease-in-out"
      >
        View Episodes
      </Link>
    </div>
  );
}
