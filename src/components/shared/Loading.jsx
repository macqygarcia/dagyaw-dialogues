import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center h-screen w-full bg-white">
      <video className="h-52" loop muted autoPlay>
        <source
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="https://res.cloudinary.com/macqygarcia-dilg/video/upload/v1646197076/dagyaw/loading_gfkn21.mp4"
          type="video/mp4"
        />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
