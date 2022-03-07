import Loading from "../components/shared/Loading";
import { useContacts } from "../graphcms/queries/contacts";
import Logo from "../logo.svg";
import TabMenu from "../components/TabMenu";
import FeedbackForm from "./Sections/FeedbackForm";
import NationalContact from "./Sections/Contacts/National";
import RegionalContact from "./Sections/Contacts/Regional";
import { useState } from "react";

export default function ContactUs() {
  const { status, isLoading, data, isError, error, isFetching } = useContacts();

  const [national, ...regions] = data || [];

  const allregions = regions?.sort().reverse();

  const [section, setSection] = useState(0);

  const handleSection = (section) => {
    setSection(section);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <span>Error: {error}...</span>;
  }

  return (
    <div>
      <TabMenu handleSection={handleSection} section={section} />
      {section === 0 && <FeedbackForm />}
      {section === 1 && <NationalContact national={national?.contacts} />}
      {section === 2 && <RegionalContact regions={allregions} />}

      <div
        className="fixed -z-10 top-0 left-0 h-screen w-screen bg-repeat bg-black/90"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/macqygarcia-dilg/image/upload/v1646044661/dagyaw/logo_xu43n2.svg)`,
        }}
      />
    </div>
  );
}
