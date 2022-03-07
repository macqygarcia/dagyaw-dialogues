import {
  FlagIcon,
  GlobeIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

export default function TabMenu({ section, handleSection }) {
  const tabs = [
    {
      label: "Feedback",
      Icon: PaperAirplaneIcon,
    },
    {
      label: "National",
      Icon: FlagIcon,
    },
    {
      label: "Regional",
      Icon: GlobeIcon,
    },
  ];
  return (
    <ul className="py-5 flex w-full items-center justify-center gap-12 bg-[#1b1b1b]">
      {tabs.map(({ label, Icon }, index) => (
        <li
          key={index}
          onClick={() => handleSection(index)}
          className={`flex cursor-pointer flex-col items-center justify-center gap-1 pb-2 transition-all hover:scale-105 ${
            section === index ? "text-zinc-200" : "text-zinc-500"
          }`}
        >
          <Icon className="h-8" />
          <span className="block whitespace-nowrap text-xs font-medium">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
