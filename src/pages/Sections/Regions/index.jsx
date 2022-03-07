import Region from "./Region";
import Loading from "../../../components/shared/Loading";
import { useRegions } from "../../../graphcms/queries/regions";

export default function Regions({ regions }) {
  const { status, isLoading, data, isError, error, isFetching } = useRegions();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <span>Error: {error}...</span>;
  }

  return (
    <div className="mx-auto grid sm:grid-cols-2 lg:grid-cols-3 lg:place-items-center 2xl:max-w-6xl 2xl:grid-cols-4">
      {data?.map((region) => (
        <Region key={region.id} region={region} />
      ))}
    </div>
  );
}
