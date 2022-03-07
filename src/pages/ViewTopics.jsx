import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { InformationCircleIcon } from "@heroicons/react/solid";

import Loading from "../components/shared/Loading";
import { useTopics } from "../graphcms/queries/topics";
import Topics from "./Sections/Topics";

export default function ViewTopics() {
  const navigate = useNavigate();
  const [hasSelected, setHasSelected] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  let subTopicsSelected = [];

  const {
    status,
    isLoading,
    data: topics,
    isError,
    error,
    isFetching,
  } = useTopics();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <span>Error: {error}...</span>;
  }

  const handleSubTopics = (subTopic, id) => {
    const foundSubTopic = subTopicsSelected.find((s) => s.id === id);

    if (foundSubTopic) {
      subTopicsSelected = subTopicsSelected.filter(
        (s) => s.id !== foundSubTopic.id
      );
      return;
    }

    if (subTopicsSelected.length == 2) {
      subTopicsSelected.push({ id, name: subTopic });
      navigate("/chatbot/selected-topics", { state: subTopicsSelected });
      return;
    }

    const newSubTopic = { id, name: subTopic };
    subTopicsSelected.push(newSubTopic);
  };

  return (
    <div className="relative pb-20">
      {/* Can't Find Topic */}
      {isVisible && (
        <div className="py-3 px-5 flex flex-col items-center justify-center top-0 left-0 w-full bg-blue-800 text-center text-sm sm:text-base">
          <p className="z-10 text-sm text-blue-200">
            Please choose your top three priority topics that you would like us
            to consider for a Dagyaw Episode. None of these matches a topic you
            want to discussed?
          </p>
          <span
            onClick={() => navigate("/chatbot/propose-a-topic")}
            className="ml-2 cursor-pointer group text-sm text-white flex items-center"
          >
            Propose my own topic
            <ChevronRightIcon className="h-3 mt-[1px] transition group-hover:translate-x-1" />
          </span>
        </div>
      )}

      <h2 className="text-zinc-200 w-full px-5 text-xs md:text-base my-10 text-center 2xl:mx-auto 2xl:max-w-7xl">
        <InformationCircleIcon className="h-4 inline -translate-y-1 md:h-5" />
        <em>
          These topics are based partly on the United Nation’s Sustainable
          Development Goals as well as thematic concerns raised by citizens
          during previous Dagyaw Open Government Town Hall Meetings
        </em>
      </h2>

      {/* Grid of all Topics */}
      <div className="mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:place-items-center 2xl:max-w-7xl">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="group border-4 border-zinc-800 rounded relative flex h-100 cursor-pointer flex-col items-center justify-center overflow-hidden bg-black sm:max-w-sm sm:gap-5 lg:max-w-xs"
          >
            <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform text-center uppercase transition-opacity group-hover:opacity-0 ">
              <h3 className="block text-xl font-bold text-zinc-200">
                {topic.name}
              </h3>
            </div>
            <img
              src={topic.photo.url}
              alt={topic.name}
              className={`z-10 h-full w-full object-cover opacity-20 transition-all duration-700 group-hover:-translate-y-full
              ${hasSelected ? "-translate-y-full" : "translate-y-0"}
              `}
            />
            <Topics
              handleSubTopics={handleSubTopics}
              topic={topic.name}
              subTopics={topic.subTopics}
            />
          </div>
        ))}
      </div>
      <div
        className="fixed -z-10 top-0 left-0 h-screen w-screen bg-repeat bg-black/90"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1646044661/dagyaw/logo_xu43n2.svg)`,
        }}
      />
    </div>
  );
}
