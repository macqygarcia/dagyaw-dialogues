export const Input = ({
  type,
  fieldName,
  register,
  placeHolder,
  isRequired,
}) => {
  return (
    <div className="flex w-full flex-col justify-start gap-2">
      <label htmlFor={fieldName} className="text-sm">
        {placeHolder}
        {isRequired && `*`}
      </label>
      <input
        className="rounded-md border border-zinc-400 text-sm"
        id={fieldName}
        type={type}
        placeholder={placeHolder}
        {...register(fieldName, {
          required: { value: isRequired, message: "This is required" },
        })}
      />
    </div>
  );
};
