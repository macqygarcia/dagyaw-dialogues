import {
  FireIcon,
  InformationCircleIcon,
  LibraryIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

export default function EDagyaw() {
  const objectives = [
    {
      firstContent: "Give people ",
      emphasis: "opportunity",
      secondContent: "to engage with government",
      Icon: LibraryIcon,
    },
    {
      firstContent: "Help people get",
      emphasis: "informed",
      secondContent: "on what the government is doing",
      Icon: InformationCircleIcon,
    },
    {
      firstContent: "Know people's",
      emphasis: "pulse",
      secondContent: "on certain topics or issues",
      Icon: FireIcon,
    },
    {
      firstContent: "Make people ",
      emphasis: "empowered",
      secondContent: "and encourage them to keep engaging government",
      Icon: UserGroupIcon,
    },
  ];
  return (
    <section className="bg-white 2xl:my-36">
      <div className="md:h-208 relative flex flex-col items-center justify-center gap-5 p-5  py-20 lg:gap-12 xl:mx-auto xl:max-w-7xl">
        <video className="h-48 animate-bounce" loop muted autoPlay>
          <source
            src="https://res.cloudinary.com/macqygarcia-dilg/video/upload/v1645611733/dagyaw/Dagyaw_Bot_jfetpd.webm"
            type="video/mp4"
          />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <h2 className="bg-gradient-to-r from-[#00959F] to-[#E17D06] bg-clip-text p-2 text-4xl text-transparent md:text-5xl xl:text-6xl">
          e-Dagyaw Mo!
        </h2>
        <p className="text-center text-xl text-zinc-800">
          Aims to engage citizens using <b>socmed cards</b> and{" "}
          <b>vlog-like strategy</b> shared through Social Media platforms:
          Facebook and Youtube. Through this engagement, it speficifically aims
          to:
        </p>
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map(
            ({ firstContent, emphasis, secondContent, Icon }, index) => (
              <div
                key={index}
                className="group text-neutral-8e00 flex cursor-pointer flex-col items-center justify-center gap-3 p-7 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              >
                <Icon className="h-16 group-hover:text-blue-700" />
                <p className="text-center text-sm">
                  {firstContent}{" "}
                  <b className="group-hover:text-blue-700">{emphasis}</b>{" "}
                  {secondContent}
                </p>
              </div>
            )
          )}
        </section>
      </div>
    </section>
  );
}
