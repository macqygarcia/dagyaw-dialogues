import { useParams } from "react-router-dom";
import Episodes from "../../../components/Episodes";
import Loading from "../../../components/shared/Loading";
import { useRegionEpisodes } from "../../../graphcms/queries/regions";

export default function RegionEpisodes() {
  let { regionId } = useParams();

  const { status, isLoading, data, isError, error, isFetching } =
    useRegionEpisodes(regionId);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <span>Error: {error}...</span>;
  }

  return (
    <div className="2xl:grid 2xl:h-screen 2xl:place-content-center 2xl:place-items-center bg-zinc-900">
      <h2 className="bg-gradient-to-r mb-7 from-[#00959F] to-[#67A464] bg-clip-text pb-2 text-center text-4xl text-transparent md:text-5xl xl:text-6xl">
        {` ${data?.short} ${data?.episode.length > 1 ? "Episodes" : "Episode"}`}
      </h2>
      <Episodes episodes={data?.episode} />
    </div>
  );
}
