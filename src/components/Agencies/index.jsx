import { agencies } from "./data";
import { code_ngo } from "./data";

export default function Agencies() {
  return (
    <div className="z-10 flex w-full flex-col items-center justify-center gap-5 px-10 sm:max-w-md md:max-w-lg lg:max-w-2xl lg:gap-10">
      <div className="flex gap-3 sm:gap-6">
        {agencies.map((agency, index) => (
          <a key={index} href={agency.href}>
            <img
              alt={agency.alt}
              height={agency.height}
              width={agency.height}
              src={agency.img}
              className="opacity-80 transition-all hover:scale-105 hover:opacity-100"
            />
          </a>
        ))}
      </div>
      <a href={code_ngo.href}>
        <img
          alt={code_ngo.alt}
          src={code_ngo.name}
          className="col-span-2 col-start-1 h-20 rounded-md bg-white p-4 opacity-80 transition-all hover:scale-105 hover:opacity-100 sm:h-24 lg:h-32 lg:p-6"
        />
      </a>
    </div>
  );
}
