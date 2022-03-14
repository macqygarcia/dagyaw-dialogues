import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import National from "./National";
import Regional from "./Regional";
import About from "./About";
import ContactUs from "./Contact";
import Downloads from "./Downloads";
import DataPrivacy from "./DataPrivacy";
import ViewTopics from "./ViewTopics";
import Initial from "./Chatbot/Initial";
import MoreAboutDagyaw from "./Chatbot/MoreAboutDagyaw";
import ProposeTopic from "./Chatbot/ProposeTopic";
import SelectedTopics from "./Chatbot/SelectedTopics";
import SignUp from "./Chatbot/SignUp";
import ThankYou from "./Chatbot/ThankYou";
import RegionEpisodes from "./Sections/Regions/RegionEpisodes";

export default function Router({ children }) {
  return (
    <>
      <BrowserRouter>
        {children}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/national" element={<National />} />
          <Route path="/regions" element={<Regional />} />
          <Route path="/regions/:regionId" element={<RegionEpisodes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/data-privacy-notice" element={<DataPrivacy />} />
          <Route path="/recommend-topics" element={<ViewTopics />} />
          {/* Chatbot Routes */}
          <Route path="/chatbot" element={<Initial />} />
          <Route
            path="/chatbot/more-about-dagyaw"
            element={<MoreAboutDagyaw />}
          />
          <Route path="/chatbot/selected-topics" element={<SelectedTopics />} />
          <Route path="/chatbot/propose-a-topic" element={<ProposeTopic />} />
          <Route path="/chatbot/selected-topics" element={<SelectedTopics />} />
          <Route path="/chatbot/sign-up" element={<SignUp />} />
          <Route path="/chatbot/thank-you" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
