import { useRef, useState } from 'react';
import Header from '../header/header';
import Home from '../home/home';
import About from '../about/about';
import Projects from '../projects/projects';
import Contacts from '../contacts/contacts';
import Line from '../about/timeline/line/line';
import appStyles from './app.module.css';
import OnScrollContainer from '../common/on-scroll-container/on-scroll-container';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToAbout = () => aboutRef.current.scrollIntoView();
  const scrollToProjects = () => projectsRef.current.scrollIntoView();
  const scrollToContacts = () => contactsRef.current.scrollIntoView();

  return (
    <div className={appStyles.app}>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactsRef={contactsRef}
        scrollToAbout={scrollToAbout}
        scrollToProjects={scrollToProjects}
        scrollToContacts={scrollToContacts}
      />
      <div className={appStyles.content}>
        <div className={appStyles.block}>
          <Home />
        </div>
        <Line width={'200px'} height={'2px'} color={'white'} />
        <div className={appStyles.block} ref={aboutRef}>
          <h2 className={appStyles.h2}>About me</h2>
          <About />
        </div>

        <Line width={'200px'} height={'5px'} color={'white'} />
        <div className={appStyles.block} ref={projectsRef}>
          <h2 className={appStyles.h2}>MyProjects</h2>
          <Projects />
        </div>
        <Line width={'200px'} height={'5px'} color={'white'} />
        <div className={appStyles.block} ref={contactsRef}>
          <h2 className={appStyles.h2} id="contacts">
            Contacts
          </h2>
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
