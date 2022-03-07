import Router from "./Router";

import { useState } from "react";
import Navbar from "../components/Navigation/Navbar";
import Sidebar from "../components/Navigation/Sidebar";
import Socials from "../components/shared/Socials";
import BottomMenu from "../components/BottomMenu";
import Logo from "./Chatbot/Logo";
import MessageBox from "./Sections/Chatbot/MessageBox";

export default function Layout({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Socials />
      {children}
      <BottomMenu />
      <Logo isVisible={isVisible} setIsVisible={setIsVisible} />
      <MessageBox isVisible={isVisible} setIsVisible={setIsVisible} />
    </Router>
  );
}
