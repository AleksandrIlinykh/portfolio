import Header from "../header/header";
import Home from "../home/home";
import About from "../about/about";
import Projects from "../projects/projects";
import Contacts from "../contacts/contacts";
import appStyles from "./app.module.css";
function App() {
  return (
    <div className={appStyles.app}>
      <Header />
      <div className={appStyles.content}>
        <Home />
        <About />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
