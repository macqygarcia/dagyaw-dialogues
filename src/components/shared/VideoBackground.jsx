export default function VideoBackground() {
  return (
    <div className="absolute top-0 left-0 -z-10 opacity-60">
      <video
        className="h-184 w-screen object-cover object-center"
        loop
        muted
        autoPlay
      >
        <source
          src="https://res.cloudinary.com/macqygarcia-dilg/video/upload/v1645177495/dagyaw/video-background_jdcfbc.mp4"
          type="video/mp4"
        />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
