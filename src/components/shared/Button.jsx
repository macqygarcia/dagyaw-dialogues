export const Button = ({ handleClick, label }) => (
  <button
    onClick={handleClick}
    className="bg-zinc-200 rounded-2xl text-center p-4 w-full font-bold transition-all duration-200 hover:text-white hover:bg-[#00959F] active:scale-95"
  >
    {label}
  </button>
);
