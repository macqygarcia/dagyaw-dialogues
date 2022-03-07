import Agencies from "../../components/Agencies";

export default function LeadOrganizations() {
  return (
    <div className="relative">
      <section className="h-184 flex flex-col items-center justify-center bg-zinc-100">
        <Agencies />
        <div className="py-10">
          <h2 className="bg-gradient-to-br from-[#00959F] to-[#67A464] bg-clip-text py-2 text-4xl text-transparent md:text-5xl xl:text-6xl">
            Lead Organizations
          </h2>
        </div>
      </section>
      <img
        src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1645597054/dagyaw/wave_i5nmjc.svg"
        alt="Wave lines"
        className="absolute top-0 left-0 h-full w-full object-cover opacity-10"
      />
    </div>
  );
}
