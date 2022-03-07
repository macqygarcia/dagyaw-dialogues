import { agencies, code_ngo } from "../Agencies/data";

export default function Logos() {
  return (
    <div className="hidden py-10 w-full md:flex md: justify-between md:items-center md:gap-5 ">
      <img
        src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931118/dagyaw/logo512_epw9m9.png"
        alt=""
        className="rounded-lg border border-[#EC6F43] bg-zinc-900 p-3 sm:block md:h-20 lg:h-24"
      />

      <div className="flex items-center gap-2">
        {agencies.map((agency, index) => (
          <a key={index} href={agency.href}>
            <img
              alt={agency.alt}
              height={agency.height}
              width={agency.height}
              src={agency.img}
              className="h-16 w-16 opacity-80 transition-all hover:scale-105 hover:opacity-100 lg:h-20 lg:w-20"
            />
          </a>
        ))}
        <a href={code_ngo.href}>
          <img
            alt={code_ngo.alt}
            src={code_ngo.name}
            className="col-span-2 col-start-1 h-20 rounded-md bg-white p-4 opacity-80 transition-all hover:scale-105 hover:opacity-100 md:h-20 lg:h-24"
          />
        </a>
      </div>
    </div>
  );
}
