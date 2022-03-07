export const Radio = ({
  fieldName,
  register,
  placeHolder,
  isRequired,
  options,
}) => {
  return (
    <div className="flex w-full flex-col justify-start gap-2">
      <label htmlFor={fieldName} className="text-sm">
        {placeHolder}
        {isRequired && `*`}
      </label>
      <div className="grid gap-2 2xl:grid-cols-3">
        {options?.map((g, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-2 rounded-md border border-zinc-400 px-4 py-2"
          >
            <span className="text-sm">{g.name}</span>
            <input
              type="radio"
              id="gender"
              name="gender"
              value={g.name}
              {...register(fieldName, {
                required: { value: isRequired, message: "This is required" },
              })}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
