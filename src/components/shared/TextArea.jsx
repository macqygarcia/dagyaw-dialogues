export const TextArea = ({ fieldName, register, placeHolder, isRequired }) => {
  return (
    <div className="flex w-full flex-col justify-start gap-2">
      <label htmlFor={fieldName} className="text-sm">
        {placeHolder}
      </label>
      <textarea
        className="rounded-md border border-zinc-400 text-sm"
        id={fieldName}
        {...register(fieldName, {
          required: { value: isRequired, message: "This is required" },
        })}
      ></textarea>
    </div>
  );
};
