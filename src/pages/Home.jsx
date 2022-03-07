import EDagyaw from "./Sections/EDagyaw";
import Gradient from "./Sections/Gradient";
import Hero from "./Sections/Hero";
import ImageCarousel from "./Sections/ImageCarousel";
import CoCreation from "./Sections/CoCreation";
import OpenGovernment from "./Sections/OpenGovernment";
import LeadOrganizations from "./Sections/LeadOrganizations";
import { useEffect } from "react";
import { CreateVisitMutation } from "../graphcms/mutations/visitor";

export default function Home() {
  useEffect(() => {
    CreateVisitMutation("home");
  }, []);
  return (
    <div>
      <Gradient />
      <Hero />
      <ImageCarousel />
      <EDagyaw />
      <CoCreation />
      <OpenGovernment />
      <LeadOrganizations />
    </div>
  );
}
