import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { CreateSubTopicVoteMutation } from "../../graphcms/mutations/vote-subtopic";
import { SubTopicQuestionMutation } from "../../graphcms/mutations/subtopic-questions";
import { useMutation } from "react-query";

export default function SelectedTopics() {
  const navigate = useNavigate();
  const mutation = useMutation((id) => CreateSubTopicVoteMutation(id));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Check if there are subtopics if not navigate to view-topics
  useEffect(() => {
    if (!subTopics) navigate("/view-topics");
  }, []);

  // Get sub topics from view-topics
  const { state: subTopics } = useLocation();

  const subTopicVotes = [];
  const subTopicQuestions = [];

  // Create vote for each subtopic
  const onSubmit = async (data) => {
    // Get questions from /chatbot/selected-topics Form
    // { question0: 'Question', question1: 'Question', question2: '' }
    const { question0, question1, question2 } = data;

    // Get all subtopics from /view-topics (IDs)
    // [{id: 'zxcasdqwe', name: 'Tourism'}]
    const [subTopic0, subTopic1, subTopic2] = subTopics;

    // Get subtopic id from {id: 'zxcasdqwe', name: 'Tourism'}
    const { id: subTopicId0 } = subTopic0;
    const { id: subTopicId1 } = subTopic1;
    const { id: subTopicId2 } = subTopic2;

    if (question0 !== "") {
      const questionId = await SubTopicQuestionMutation(subTopicId0, question0);
      subTopicQuestions.push(questionId);
    }
    if (question1 !== "") {
      const questionId = await SubTopicQuestionMutation(subTopicId1, question1);
      subTopicQuestions.push(questionId);
    }
    if (question2 !== "") {
      const questionId = await SubTopicQuestionMutation(subTopicId2, question2);
      subTopicQuestions.push(questionId);
    }

    subTopics.forEach(async ({ id }) => {
      try {
        const subTopicId = await mutation.mutateAsync(id);
        subTopicVotes.push(subTopicId);
        if (subTopicVotes.length === 3) {
          navigate("/chatbot/sign-up", {
            state: { subTopicVotes, subTopicQuestions },
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    subTopics && (
      <section className="h-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white z-50 rounded-md my-28 p-5 sm:p-10 lg:mx-auto lg:grid lg:max-w-xl lg:place-items-center"
        >
          <div className="flex flex-col items-start gap-5 p-5 sm:p-10 w-full">
            <div className="place-self-center py-5">
              <h2 className="text-xl text-center font-bold">
                You have selected the follow topics:
              </h2>
            </div>

            <div className="w-full space-y-5">
              {subTopics?.map((subTopic, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 text-center"
                >
                  <div className="flex w-full flex-col justify-center items-center gap-2">
                    <p className="bg-[#E17D06] h-10 w-10 text-white rounded-full p-2 font-bold">
                      <span>{index + 1}</span>
                    </p>
                    <label
                      htmlFor="question"
                      className="text-sm font-bold text-zinc-700"
                    >
                      {subTopic.name}
                    </label>
                    <input
                      type="hidden"
                      name={`subTopic${index}`}
                      value={subTopic.id}
                    />
                    <input
                      id="question"
                      {...register(`question${index}`, {
                        required: {
                          value: false,
                          message: "This is required",
                        },
                      })}
                      type="text"
                      className="rounded-lg text-sm w-full"
                      placeholder="Please type specific question for this topic, if any."
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex w-full flex-col gap-2">
              <button
                type="submit"
                className="block w-full rounded-md bg-zinc-200 py-2 text-sm font-bold text-zinc-700 hover:bg-zinc-300 hover:text-zinc-900"
                color="slate"
                size="sm"
                disabled={mutation.isLoading}
              >
                {mutation.isLoading ? "Loading..." : "Next"}
              </button>
              <button
                onClick={() => navigate("/view-topics")}
                className="block w-full rounded-md bg-zinc-200 py-2 text-sm font-bold text-zinc-700 hover:bg-zinc-300 hover:text-zinc-900"
                color="slate"
                size="sm"
              >
                Go Back
              </button>
              <button
                onClick={() => navigate("/chatbot/propose-a-topic")}
                className="block w-full rounded-md bg-zinc-200 py-2 text-sm font-bold text-zinc-700 hover:bg-zinc-300 hover:text-zinc-900"
                color="slate"
                size="sm"
              >
                Propose my own topic
              </button>
            </div>
          </div>
        </form>
        <div
          className="fixed -z-10 top-0 left-0 h-screen w-screen bg-repeat bg-black/90"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1646044661/dagyaw/logo_xu43n2.svg)`,
          }}
        />
      </section>
    )
  );
}
