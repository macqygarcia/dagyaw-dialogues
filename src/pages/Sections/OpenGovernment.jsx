export default function OpenGovernment() {
  return (
    <div className="h-184 relative">
      <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center gap-5 lg:gap-7">
        <img
          alt="Dagyaw Virtual Towhall"
          src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931119/dagyaw/ogp-logo_mdlly8.png"
          className="h-40"
        />
        <div className="text-center">
          <h2 className="bg-gradient-to-br from-[#BF2212] via-[#EC6F43] to-[#E17D06] bg-clip-text text-4xl text-transparent md:text-5xl xl:text-6xl">
            Open Government Partnership
          </h2>
        </div>
        <a
          className="mt-10 block rounded-md border border-zinc-900 px-4 py-2 text-zinc-900 transition-all hover:scale-105 active:scale-95"
          href="https://www.opengovpartnership.org/"
        >
          Learn more about OGP
        </a>
      </div>
      <img
        alt="Dagyaw Virtual Towhall"
        src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931119/dagyaw/ogp-banner_soj2s4.webp"
        className="h-184 absolute top-0 right-0 z-10 object-cover"
      />
      <div className="h-184 absolute top-0 left-0 -z-10 w-full bg-[#FBD4C4]" />
    </div>
  );
}
