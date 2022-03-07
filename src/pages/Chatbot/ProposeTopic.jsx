import { CreateVisitorMutation } from "../../graphcms/mutations/visitor";
import { CreateProposeTopicMutation } from "../../graphcms/mutations/propose-topic";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { sortObject  } from "../../lib/useSortObject";
import { Input } from "../../components/shared/Input";
import { useRegions, useSectors, useGenders } from "../../graphcms/queries";
import { Radio } from "../../components/shared/Radio";
import { TextArea } from "../../components/shared/TextArea";

export default function ProposeTopic() {
  const navigate = useNavigate();
  const { data: regions } = useRegions();
  const { data: sectors } = useSectors();
  const { data } = useGenders();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { topic, question, ...values } = data;
    let { age } = values;
    const parsedAge = parseInt(age);
    
    let parseData = { ...values, age: parsedAge };
    parseData = sortObject(parseData)
    const visitorId = await CreateVisitorMutation(parseData);
    
    await CreateProposeTopicMutation(
      visitorId,
      topic,
      question
    );

    navigate("/chatbot/thank-you");
  };

  return (
    <div className="grid place-items-center py-10">
      <div
        className="fixed -z-10 top-0 left-0 h-screen w-screen bg-repeat bg-black/90"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1646044661/dagyaw/logo_xu43n2.svg)`,
        }}
      />
      <h2 className="bg-gradient-to-r uppercase from-[#00959F] to-[#67A464] bg-clip-text text-transparent pb-2 text-center mb-5 font-bold text-4xl py-7 lg:max-w-2xl lg:mx-auto">
        Propose a topic
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white mb-36 w-full space-y-7 rounded-md p-7 sm:max-w-xl lg:mx-auto lg:max-w-xl 2xl:p-10"
      >
        <div className="mb-10">
          
        </div>
        <div className="grid gap-5 2xl:grid 2xl:grid-cols-2">
          <Input
            fieldName="email"
            register={register}
            errors={errors}
            placeHolder="Email"
            isRequired={true}
            type="email"
          />
          <Input
            fieldName="firstName"
            register={register}
            errors={errors}
            placeHolder="First Name"
            isRequired={false}
            type="text"
          />
          <Input
            fieldName="lastName"
            register={register}
            errors={errors}
            placeHolder="Last Name"
            isRequired={false}
            type="text"
          />
          <Input
            fieldName="age"
            register={register}
            errors={errors}
            placeHolder="Age"
            isRequired={false}
            type="number"
          />
        </div>
        <Radio
          fieldName="gender"
          register={register}
          placeHolder="Gender"
          isRequired={true}
          options={data?.enumValues}
        />

        <div className="grid gap-5 2xl:grid 2xl:grid-cols-2">
          <div className="flex w-full flex-col justify-start gap-2">
            <label htmlFor="region" className="text-sm" required>
              Region*
            </label>
            <select
              {...register("region", {
                required: { value: true, message: "This is required" },
              })}
              className="w-full rounded-md border border-zinc-400 text-sm"
            >
              <option>Please select</option>
              {regions?.map((region) => (
                <option
                  key={region.id}
                  id="region"
                  name="region"
                  value={region.id}
                >
                  {region.short}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-full flex-col justify-start gap-2">
            <label htmlFor="sector" className="text-sm" required>
              Sector*
            </label>
            <select
              {...register("sector", {
                required: { value: true, message: "This is required" },
              })}
              className="w-full rounded-md border border-zinc-400 text-sm"
              required
            >
              <option>Please select</option>
              {sectors?.map((sector) => (
                <option key={sector.id} value={sector.id}>
                  {sector.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Input
          fieldName="organization"
          register={register}
          errors={errors}
          placeHolder="Organization"
          isRequired={true}
          type="text"
        />
        <Input
          fieldName="topic"
          register={register}
          errors={errors}
          placeHolder="Propose Topic"
          isRequired={true}
          type="text"
        />
        <TextArea
          fieldName="question"
          register={register}
          errors={errors}
          placeHolder="Type your question for this topic..."
          isRequired={true}
        />
        <span className="block">
          By clicking submit, you agree to our{" "}
          <Link to="/data-privacy-notice" className="text-blue-700">
            Data Privacy Policy
          </Link>
          . You may receive email notifications from us and can opt out any
          time.
        </span>
        <button
          className="group z-30 flex w-full items-center justify-center gap-2 rounded-md bg-zinc-200 px-4 py-2 text-base text-zinc-700 transition-all hover:bg-zinc-300 hover:text-zinc-900 active:scale-90"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
