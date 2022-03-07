import ContactCard from "./ContactCard";

export default function NationalContact({ national }) {
  return (
    <div className="lg:mx-auto lg:max-w-4xl py-44 mb-36">
      <h2 className="bg-gradient-to-r from-[#00959F] to-[#67A464] bg-clip-text text-transparent pb-2 text-center mb-5 font-bold text-4xl py-7">
        NATIONAL TECHNICAL WORKING GROUP SECRETARIAT
      </h2>
      <span className="block mb-5 font-bold text-4xl text-center py-7"></span>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {national.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.name}
            email={contact.email}
            number={contact.number && contact.number}
          />
        ))}
      </div>
    </div>
  );
}
