import { useEpisodes } from "../graphcms/queries/national";
import Episodes from "../components/Episodes";

export default function National() {
  const { status, isLoading, data, isError, error, isFetching } = useEpisodes();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error}...</span>;
  }

  return (
    <div className="pt-20">
      <h2 className="bg-gradient-to-r mb-7 from-[#00959F] to-[#67A464] bg-clip-text pb-2 text-center text-4xl text-transparent md:text-5xl xl:text-6xl">
        National Episodes
      </h2>
      <Episodes episodes={data[0]?.episode} />
      <div
        className="fixed -z-10 top-0 left-0 h-screen w-screen bg-repeat bg-black/90"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1646044661/dagyaw/logo_xu43n2.svg)`,
        }}
      />
    </div>
  );
}
