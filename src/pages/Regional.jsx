import Regions from "./Sections/Regions";

export default function Regional() {
  return (
    <div className="py-20">
      <h2 className="bg-gradient-to-r mb-7 from-[#00959F] to-[#67A464] bg-clip-text pb-2 text-center text-4xl text-transparent md:text-5xl xl:text-6xl">
        Regional Episodes
      </h2>
      <Regions />
      <div
        className="fixed -z-10 top-0 left-0 h-screen w-screen bg-repeat bg-black/90"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1646044661/dagyaw/logo_xu43n2.svg)`,
        }}
      />
    </div>
  );
}
