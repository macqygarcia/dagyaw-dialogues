import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { XIcon } from "@heroicons/react/outline";
import { Button } from "../../../components/shared/Button";

export default function MessageBox({ isVisible, setIsVisible }) {
  const [viewKnowMore, setViewKnowMore] = useState(false);

  return (
    <div>
      <section className={`fixed bottom-0 ${isVisible ? "z-50" : "-z-10"}`}>
        <div
          className={`bg-[#FFFFFF] relative w-screen rounded-t-2xl px-5 pb-5 pt-10 shadow-lg transition-transform transform duration-200 ease-in-out
        lg:mx-auto lg:max-w-sm lg:rounded-2xl lg:fixed lg:bottom-5 lg:right-5
        ${isVisible ? "translate-y-0" : "translate-y-100 z-10"}
      `}
        >
          <XIcon
            className="h-9 z-150 p-2 absolute top-5 right-5 cursor-pointer hover:h-9"
            onClick={() => setIsVisible(false)}
          />

          <div className="relative w-full h-28 flex items-center justify-center animate-bounce">
            <img
              className="z-20 h-28"
              src="https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1647234771/dagyaw/output-onlinegiftools_j7xdlm.gif"
              alt="Dagyaw Bot Logo"
            />
            <div className="-z-10 bg-black h-12 w-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Sections */}
          <div>
            {viewKnowMore ? (
              <KnowMoreDagyaw
                isVisible={isVisible}
                viewKnowMore={viewKnowMore}
                setIsVisible={setIsVisible}
                setViewKnowMore={setViewKnowMore}
              />
            ) : (
              <Initial
                setIsVisible={setIsVisible}
                viewKnowMore={viewKnowMore}
                setViewKnowMore={setViewKnowMore}
              />
            )}
          </div>
        </div>
      </section>
      {isVisible && (
        <div className="z-40 h-screen w-screen fixed top-0 left-0 bg-black opacity-40 lg:hidden" />
      )}
    </div>
  );
}

function Initial({ setIsVisible, viewKnowMore, setViewKnowMore }) {
  const navigate = useNavigate();

  const navigatePropose = () => {
    setIsVisible(false);
    navigate("/chatbot/propose-a-topic");
  };
  return (
    <div
      className={`w-full transition-all duration-1000 ease-in-out ${
        viewKnowMore ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="pb-5 text-center">
        <p className="text-zinc-700 text-2xl">Hello! I'm Yani</p>
        <p className="font-bold text-xl">Welcome to Dagyaw Portal!</p>
        <p className="py-2 text-zinc-500 text-sm">How can I help you?</p>
      </div>

      <div className="space-y-2">
        <Button
          handleClick={() => setViewKnowMore(true)}
          label="Know more about Dagyaw"
        />
        <Button
          handleClick={() => navigatePropose()}
          label="Recomment a topic"
        />
      </div>
    </div>
  );
}

function KnowMoreDagyaw({
  isVisible,
  setIsVisible,
  viewKnowMore,
  setViewKnowMore,
}) {
  const navigate = useNavigate();

  const navigateAbout = () => {
    setViewKnowMore(false);
    setIsVisible(false);
    navigate("/about");
  };

  const navigateDownloads = () => {
    setViewKnowMore(false);
    setIsVisible(false);
    navigate("/downloads");
  };

  return (
    <div className="flex flex-col items-center ">
      <div
        className={`pb-5 text-center transition-all duration-1000 ease-in-out ${
          viewKnowMore ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="font-bold text-xl">More about Dagyaw</p>
        <p className="py-2 text-zinc-500 text-sm">Please select one option</p>
      </div>
      <div className="space-y-2">
        <Button
          handleClick={() => navigateAbout()}
          label="Objectives of Dagyaw"
        />
        <a
          href="http://ogp.dbm.gov.ph/index.php/dagyaw#what-is-dagyaw-2020"
          className="inline-block bg-zinc-200 rounded-2xl text-center p-4 w-full font-bold transition-all duration-200 hover:text-white hover:bg-[#00959F] active:scale-95"
        >
          View past episodes
        </a>
        <Button
          handleClick={() => navigateDownloads()}
          label="View Downloads"
        />
      </div>
    </div>
  );
}
