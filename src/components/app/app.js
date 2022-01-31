import { useState, useEffect } from "react";
import Header from "../header/header";
import Home from "../home/home";
import About from "../about/about";
import Projects from "../projects/projects";
import Contacts from "../contacts/contacts";
import Line from "../about/timeline/line/line";
import appStyles from "./app.module.css";
import OnScrollContainer from "../common/on-scroll-container/on-scroll-container";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Portfolio";
  });

  return (
    <div className={appStyles.app}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className={appStyles.content}>
        <div className={appStyles.block}>
          <Home />
        </div>
        <Line width={"200px"} height={"2px"} color={"white"} />
        <div className={appStyles.block}>
          <h2 className={appStyles.h2}>Обо мне</h2>
          <About />
        </div>

        <Line width={"200px"} height={"5px"} color={"white"} />
        <div className={appStyles.block}>
          <h2 className={appStyles.h2}>Мои проекты:</h2>
          <Projects />
        </div>
        <Line width={"200px"} height={"5px"} color={"white"} />
        <div className={appStyles.block}>
          <h2 className={appStyles.h2} id="contacts">
            Контакты
          </h2>
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
