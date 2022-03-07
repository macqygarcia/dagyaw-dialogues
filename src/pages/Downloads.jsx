import DownloadList from "./Sections/Downloads";

export default function Downloads() {
  return (
    <>
      <DownloadList />
      <div
        className="fixed -z-10 top-0 left-0 h-screen w-screen bg-repeat bg-black/90"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1646044661/dagyaw/logo_xu43n2.svg)`,
        }}
      />
    </>
  );
}
