import Episode from "./Episode";

export default function Episodes({ episodes }) {
  return (
    <div
      className={`p-5 ${
        episodes?.length > 1
          ? "flex flex-col items-stretch justify-center gap-5 md:mx-auto md:grid md:max-w-2xl md:grid-cols-2 lg:flex lg:max-w-full lg:flex-row lg:gap-2 2xl:max-w-5xl 2xl:gap-5"
          : "grid place-items-center"
      }`}
    >
      {episodes?.map((e) => (
        <Episode key={e.id} episode={e} />
      ))}
    </div>
  );
}
