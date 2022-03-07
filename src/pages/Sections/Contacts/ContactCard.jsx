import { SupportIcon } from "@heroicons/react/outline";
export default function ContactCard({ name, email, number }) {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-zinc-300 py-5 px-5">
      <div className="flex flex-col">
        <p className="font-bold text-zinc-900">{name}</p>
        <p className="text-[0.7rem] text-zinc-700">{email}</p>
        <p className="leading-2 text-[0.7rem] text-sm text-zinc-700">
          {number}
        </p>
      </div>
    </div>
  );
}
