import Header from "../header/header";
import Home from "../home/home";
import appStyles from "./app.module.css";
function App() {
  return (
    <div className={appStyles.app}>
      <Header />
      <div className={appStyles.content}>
        <Home />
      </div>
    </div>
  );
}

export default App;
