import Logo from "../../logo.svg";
export default function Hero() {
  return (
    <div className="h-208 flex w-full flex-col shadow-2xl items-center justify-center bg-gradient-to-r from-black via-neutral-900 to-black">
      <div
        className="absolute block h-full w-3/4 rounded-full bg-repeat"
        style={{
          backgroundImage: `url(${Logo})`,
        }}
      />
      <div className="z-20 w-64 md:absolute md:w-80">
        <img
          alt="Dagyaw Virtual Towhall"
          width="635"
          height="293"
          src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931174/dagyaw/hero/center_bmyb1q.webp"
        />
      </div>
      <div className="sm:w-144 md:w-184 lg:w-208 2xl:w-232 relative z-10 w-96 p-5">
        <img
          alt="Dagyaw Virtual Towhall"
          width="914"
          height="637"
          src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931175/dagyaw/hero/islands_dxzld7.webp"
        />

        <img
          alt="Dagyaw Virtual Towhall"
          width="30"
          height="30"
          src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931175/dagyaw/hero/plug_vrwf6q.webp"
          className="absolute left-3 top-20 animate-bounce 2xl:left-32"
        />
        <img
          alt="Dagyaw Virtual Towhall"
          width="40"
          height="40"
          src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931174/dagyaw/hero/building_ali9ep.webp "
          className="absolute left-2 bottom-20 animate-bounce 2xl:left-16 2xl:bottom-44"
        />
        <img
          alt="Dagyaw Virtual Towhall"
          width="40"
          height="40"
          src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931174/dagyaw/hero/drop_t4vjql.webp"
          className="absolute left-10 bottom-5 animate-bounce"
        />
        <img
          alt="Dagyaw Virtual Towhall"
          width="25"
          height="25"
          src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931174/dagyaw/hero/education_xen5ci.webp"
          className="absolute right-20 bottom-9 animate-bounce 2xl:bottom-24 2xl:right-28"
        />
        <img
          alt="Dagyaw Virtual Towhall"
          width="20"
          height="20"
          src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931175/dagyaw/hero/scale_udhhe4.webp"
          className="absolute right-6 bottom-24 animate-bounce 2xl:right-14"
        />
        <img
          alt="Dagyaw Virtual Towhall"
          width="30"
          height="30"
          src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931174/dagyaw/hero/health_qckg17.webp"
          className="absolute right-16 top-10 animate-bounce 2xl:right-48 2xl:top-36"
        />
        <img
          alt="Dagyaw Virtual Towhall"
          width="20"
          height="20"
          src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931174/dagyaw/hero/fire_dr57wi.webp"
          className="absolute right-24 top-8 animate-bounce 2xl:right-80 2xl:top-24"
        />
        <img
          alt="Dagyaw Virtual Towhall"
          width="30"
          height="30"
          src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931175/dagyaw/hero/house_ozrpu7.webp"
          className="absolute left-32 top-10 animate-bounce 2xl:left-96"
        />
      </div>
      <div className="z-10 w-60 2xl:mx-auto 2xl:max-w-5xl">
        <img
          alt="Dagyaw Virtual Towhall"
          width="329"
          height="300"
          src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931175/dagyaw/hero/person_kczmso.webp"
        />
      </div>
    </div>
  );
}
