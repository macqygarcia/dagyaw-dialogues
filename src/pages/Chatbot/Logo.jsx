import { XIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function Logo({ isVisible, setIsVisible }) {
  const [minimize, setMinimize] = useState(false);

  const handleLogoClick = () => {
    if (minimize) {
      setMinimize(false);
      return;
    }
    setIsVisible(true);
  };
  return (
    !isVisible && (
      <div
        className={`cursor-pointer fixed ${
          minimize ? "-right-5 bottom-0" : "right-5 bottom-28"
        } z-150  md:right-5 lg:right-10 xl:bottom-10 xl:right-10`}
      >
        <div className="relative flex flex-col justify-center items-center">
          {!minimize && (
            <div className="relative">
              <XIcon
                onClick={() => setMinimize(true)}
                className="absolute z-10 top-4 right-2 h-3 animate-slideup text-zinc-900"
              />
              <div className="flex flex-col items-center animate-slideup translate-y-2 px-7 py-4 text-red rounded-xl shadow-2xl bg-white">
                <p className="text-zinc-700 text-lg">Hello!</p>
                <p className="text-black text-lg font-bold">I'm Yani</p>
              </div>
              <TriangleShape />
            </div>
          )}
          <video
            onClick={() => handleLogoClick()}
            className={`h-32 transition-all duration-300 ease-in-out ${
              minimize ? "scale-50 opacity-20 hover:opacity-100" : "scale-100"
            }`}
            loop
            muted
            autoPlay
            playsinline
          >
            <source
              src="https://res.cloudinary.com/macqygarcia-dilg/video/upload/v1645611733/dagyaw/Dagyaw_Bot_jfetpd.webm"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    )
  );
}

function TriangleShape() {
  return (
    <>
      <div className="w-16 animate-slideup overflow-hidden inline-block rotate-180 translate-x-2">
        <div className="h-3 w-5 bg-zinc-200 rotate-45 transform origin-bottom-left" />
      </div>
    </>
  );
}
