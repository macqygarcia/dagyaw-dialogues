import { useState } from "react";
import { PlayIcon } from "@heroicons/react/solid";

import VideoBackground from "../../components/shared/VideoBackground";
import Modal from "../../components/shared/Modal";

export default function Gradient() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="h-184 relative">
      {isModalOpen ? (
        <Modal
          onClick={() => setModalOpen(!isModalOpen)}
          isModalOpen={isModalOpen}
        />
      ) : (
        <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-2">
          <span className="lg:text-lg animate-reveal">Welcome to</span>
          <h2 className="bg-gradient-to-r animate-reveal from-zinc-800 via-black to-neutral-800 bg-clip-text pb-2 text-4xl font-bold text-transparent md:text-5xl xl:text-7xl">
            Dagyaw Dialogues
          </h2>
          <button
            onClick={() => setModalOpen(!isModalOpen)}
            className="animate-reveal mt-5 flex cursor-pointer items-center gap-2 rounded-full border-2 border-zinc-900 py-1 pl-2 pr-4 text-sm font-bold transition-all hover:scale-105 active:scale-95"
          >
            <PlayIcon className="h-9" />
            Omnibus Video
          </button>
          <VideoBackground />
          <span className="h-184 absolute top-0 left-0 -z-10 block w-full bg-gradient-to-r from-[#EC6F43] to-[#00959F] opacity-75 md:via-[#E17D06]" />
        </div>
      )}
    </div>
  );
}
