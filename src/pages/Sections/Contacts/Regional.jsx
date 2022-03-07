import ContactCard from "./ContactCard";

export default function RegionalContact({ regions }) {
  return (
    <div className="px-5 sm:mx-auto sm:max-w-xl lg:max-w-7xl mb-36">
      <h2 className="lg:mt-20 lg:mb-16 bg-gradient-to-r from-[#00959F] to-[#67A464] bg-clip-text text-transparent pb-2 text-center mb-5 font-bold text-4xl py-7 lg:max-w-2xl lg:mx-auto">
        REGIONAL TECHNICAL WORKING GROUP SECRETARIAT
      </h2>
      <div className="grid mt-7 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {regions?.map((region) => (
          <div key={region.id}>
            <p className="text-zinc-300 text-center text-2xl uppercase font-semibold mb-5">
              {region.short}
            </p>
            <div className="grid gap-5">
              {region?.contacts?.map((contact, index) => (
                <ContactCard
                  key={index}
                  name={contact.name}
                  email={contact.email}
                  number={contact.number && contact.number}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
