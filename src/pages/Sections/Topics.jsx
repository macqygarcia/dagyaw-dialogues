export default function Topics({ handleSubTopics, topic, subTopics }) {
  return (
    <div className="absolute space-y-2 top-1/2 left-1/2 transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 p-5 w-full opacity-0 group-hover:opacity-100">
      <h3 className="block font-bold text-zinc-200 text-lg mb-5 uppercase text-center">
        {topic}
      </h3>
      {subTopics.map(({ id, name }) => (
        <div key={id} className="flex items-start gap-2">
          <input
            type="checkbox"
            onChange={() => handleSubTopics(name, id)}
            name={name}
            id={name}
            className="rounded"
          />
          <p className="text-sm text-white -translate-y-1">{name}</p>
        </div>
      ))}
    </div>
  );
}
