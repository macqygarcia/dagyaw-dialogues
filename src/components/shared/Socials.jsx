import React from "react";

export default function Socials() {
  return (
    <div className="hidden fixed sm:flex flex-col z-40 h-full ml-2 items-center justify-center gap-5 py-5">
      <a href="https://www.facebook.com/SupportForTheLocalGovernanceProgram">
        <div className="relative h-12 w-12 cursor-pointer rounded-full bg-zinc-200 p-2 transition-all hover:-translate-y-1 hover:opacity-100">
          <img
            className="absolute h-8"
            src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931208/dagyaw/socials/facebook_xlgitp.png"
            alt="facebook logo"
          />
        </div>
      </a>
      <a href="">
        <div className="relative h-12 w-12 transform cursor-pointer rounded-full bg-zinc-200 p-2 transition-all hover:-translate-y-1 hover:opacity-100">
          <img
            className="absolute top-1/2 left-1/2 h-6 -translate-x-1/2 -translate-y-1/2"
            src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931208/dagyaw/socials/twitter_pt4zp7.png"
            alt="twitter logo"
          />
        </div>
      </a>
      <a href="https://www.youtube.com/playlist?list=PLldFZZK1pwB4yMqIrjTflmYiNzWojqYjk">
        <div className="relative h-12 w-12 transform cursor-pointer rounded-full bg-zinc-200 p-2 transition-all hover:-translate-y-1 hover:opacity-100">
          <img
            className="absolute top-1/2 left-1/2 h-6 -translate-x-1/2 -translate-y-1/2"
            src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931208/dagyaw/socials/youtube_g5oflr.png"
            alt="youtube logo"
          />
        </div>
      </a>
    </div>
  );
}
