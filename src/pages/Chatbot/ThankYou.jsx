import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import checkAnimation from "../../check.json";

import { useNavigate } from "react-router-dom";
import { CreateVoteExperienceMutation } from "../../graphcms/mutations/vote-experience";
import { useMutation } from "react-query";

export default function ThankYou() {
  const [hasVoted, setHasVoted] = useState(false);
  const mutation = useMutation(
    async (rate) => await CreateVoteExperienceMutation(rate)
  );

  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (hasVoted) navigate("/");
    }, 2000);

    return () => clearTimeout(timerId);
  }, [hasVoted]);

  const handleVote = (rate) => {
    mutation.mutate(rate);
    !mutation.isLoading && setHasVoted(true);
  };

  const rates = [
    {
      emoji: "🙁",
      value: 1,
    },
    {
      emoji: "😕",
      value: 2,
    },
    {
      emoji: "😐",
      value: 3,
    },
    {
      emoji: "🙂",
      value: 4,
    },
    {
      emoji: "🥰",
      value: 5,
    },
  ];
  return (
    <div className="flex justify-center items-center h-screen px-5">
      <div
        className="fixed -z-10 top-0 left-0 h-screen w-screen bg-repeat bg-black/90"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1646044661/dagyaw/logo_xu43n2.svg)`,
        }}
      />
      <div className="bg-white p-5 rounded gap-10 text-center md:p-12">
        <h2 className="bg-gradient-to-r from-[#00959F] to-[#E17D06] bg-clip-text p-2 text-2xl text-transparent">
          Thank You and Stay Safe!
        </h2>

        {!hasVoted ? (
          <div className=" space-y-5 p-7 rounded">
            <p className="font-medium text-zinc-700">
              Are you happy with our service?
            </p>

            <div className="space-x-2 py-2 text-center">
              {rates.map((rate, index) => (
                <span
                  key={index}
                  role="img"
                  className="cursor-pointer text-3xl hover:pb-2 active:text-4xl"
                  aria-label="sheep"
                  onClick={() => handleVote(rate.value)}
                >
                  {rate.emoji}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center gap-2 py-12">
            <Lottie
              className="h-12"
              animationData={checkAnimation}
              loop={false}
            />
            <p className="text-lg font-medium text-green-600">
              Rate successfully submitted!
            </p>
          </div>
        )}
        <div className="flex flex-col">
          <p className="font-medium text-zinc-700">Connect with us</p>
          <div className="flex items-center justify-center gap-5 py-5">
            <img
              className="h-8 cursor-pointer transition-all hover:-translate-y-1 hover:opacity-100"
              src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931208/dagyaw/socials/facebook_xlgitp.png"
              alt="facebook logo"
            />
            <img
              className="h-7 cursor-pointer transition-all hover:-translate-y-1 hover:opacity-100"
              src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931208/dagyaw/socials/twitter_pt4zp7.png"
              alt="twitter logo"
            />
            <img
              className="h-7 cursor-pointer transition-all hover:-translate-y-1 hover:opacity-100"
              src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1644931208/dagyaw/socials/youtube_g5oflr.png"
              alt="youtube logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
