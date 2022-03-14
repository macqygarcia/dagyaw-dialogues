export default function VideoBackground() {
  return (
    <div className="absolute top-0 left-0 -z-10 opacity-60">
      <video
        className="h-184 w-screen object-cover object-center"
        loop
        muted
        autoPlay
        playsInline
      >
        <source
          src="https://res.cloudinary.com/macqygarcia-dilg/video/upload/v1645177495/dagyaw/video-background_jdcfbc.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/macqygarcia-dilg/video/upload/v1647230539/dagyaw/video-background_jdcfbc_knlbys.ogv"
          type="video/ogg"
        />
        <source
          src="https://res.cloudinary.com/macqygarcia-dilg/video/upload/v1647230554/dagyaw/video-background_jdcfbc_jq7wjl.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
