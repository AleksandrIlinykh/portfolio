import { useState } from "react";
import Header from "../header/header";
import Home from "../home/home";
import About from "../about/about";
import Projects from "../projects/projects";
import Contacts from "../contacts/contacts";
import appStyles from "./app.module.css";
import OnScrollContainer from "../common/on-scroll-container/on-scroll-container";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={appStyles.app}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className={appStyles.content}>
        <div className={appStyles.block}>
          <Home />
        </div>
        <div className={appStyles.block}>
          <About />
        </div>
        <OnScrollContainer />
        {/*
        <Projects />
        <Contacts /> */}
      </div>
    </div>
  );
}

export default App;
