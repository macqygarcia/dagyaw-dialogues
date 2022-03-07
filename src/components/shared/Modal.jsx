import { XIcon } from "@heroicons/react/outline";
import YoutubePlayer from "react-player/youtube";

export default function Modal({ onClick, isModalOpen }) {
  return (
    <div className="flex h-full w-screen items-center justify-center bg-gradient-to-r from-[#EC6F43] to-[#00959F] opacity-75 md:via-[#E17D06]">
      <div
        className={`relative z-50 transition-all duration-300 ease-in-out ${
          isModalOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <YoutubePlayer
          url="https://www.youtube.com/watch?v=yxvVyqFmi5E"
          controls
          fluid={true}
          autoPlay={true}
          className="border border-zinc-900"
        />
        <XIcon
          onClick={onClick}
          className="absolute -right-5 -top-5 h-12 cursor-pointer rounded-full bg-black/40 p-2 text-white transition-all hover:scale-105 active:scale-95"
        />
      </div>
    </div>
  );
}
