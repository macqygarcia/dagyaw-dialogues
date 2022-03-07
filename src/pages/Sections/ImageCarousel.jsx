import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

export default function ImageCarousel() {
  const slides = [
    "https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1645014823/dagyaw/slides/slide0_thoqwz.png",
    "https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1645014823/dagyaw/slides/slide1_qqswhc.png",
    "https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1645014823/dagyaw/slides/slide2_qgiod6.png",
    "https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1645014823/dagyaw/slides/slide3_d8ohte.png",
    "https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1645014823/dagyaw/slides/slide4_ee9tix.png",
  ];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <>
      <div className="h-184 relative z-10 flex w-full items-center justify-between bg-black">
        <ChevronLeftIcon
          onClick={prevSlide}
          className="z-10 block h-12 cursor-pointer rounded-full bg-zinc-600/50 p-3 text-zinc-200"
        />
        <ChevronRightIcon
          onClick={nextSlide}
          className="z-10 block h-12 cursor-pointer rounded-full bg-zinc-600/50 p-3 text-zinc-200"
        />
        <span className="h-184 absolute top-0 left-0 block w-full bg-gradient-to-r from-zinc-900 via-neutral-900 to-black opacity-75" />
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute top-1/2 left-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 transform"
          >
            {index === current && (
              <>
                <img
                  src={slide}
                  className="animate-fade h-full w-full object-cover shadow-xl"
                  alt="Dagyaw Virtual Townhall Meetings"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
