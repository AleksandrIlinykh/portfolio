import { useEffect, useState } from 'react';
import headerStyles from './header.module.css';

export default function Header({
  isMenuOpen,
  setIsMenuOpen,
  aboutRef,
  projectsRef,
  contactsRef,
  scrollToAbout,
  scrollToProjects,
  scrollToContacts,
}) {
  const [isAboutActive, setIsAboutActive] = useState(true);
  const [isProjectActive, setIsProjectActive] = useState(false);
  const [isContactsActive, setIsContactsActive] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      console.log('projectsRef', projectsRef.current.offsetTop);
      console.log('window', window.scrollY);
      if (Math.abs(window.scrollY - aboutRef.current.offsetTop) < 100) {
        setIsAboutActive(true);
        setIsProjectActive(false);
        setIsContactsActive(false);
      }
      if (Math.abs(window.scrollY - projectsRef.current.offsetTop) < 100) {
        setIsAboutActive(false);
        setIsProjectActive(true);
        setIsContactsActive(false);
      }
      if (Math.abs(window.scrollY - contactsRef.current.offsetTop) < 500) {
        setIsAboutActive(false);
        setIsProjectActive(false);
        setIsContactsActive(true);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={headerStyles.header}>
      <div className={headerStyles.logo}>
        <h1 className={headerStyles.logoText}>
          <a href="#home" className={headerStyles.logoLink}>
            ALEXANDER ILINYKH
          </a>
        </h1>
      </div>
      <div className={headerStyles.controls}>
        <ul
          className={
            headerStyles.headerNav +
            ' ' +
            (isMenuOpen && headerStyles.headerNavActive)
          }
        >
          <li
            className={headerStyles.headerNavElem}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <a
              className={`${headerStyles.link} + ${
                isAboutActive && headerStyles.active
              }`}
              onClick={() => {
                scrollToAbout();
              }}
            >
              <p>About me</p>
            </a>
          </li>
          <li
            className={headerStyles.headerNavElem}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <a
              className={`${headerStyles.link} + ${
                isProjectActive && headerStyles.active
              }`}
              onClick={() => {
                scrollToProjects();
              }}
            >
              <p>Projects</p>
            </a>
          </li>
          <li
            className={headerStyles.headerNavElem}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <a
              className={`${headerStyles.link} + ${
                isContactsActive && headerStyles.active
              }`}
              onClick={() => {
                scrollToContacts();
              }}
            >
              <p>Contacts</p>
            </a>
          </li>
        </ul>

        <div
          className={
            headerStyles.hamburger +
            ' ' +
            (isMenuOpen && headerStyles.hamburgerActive)
          }
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <span className={headerStyles.hamburgerLine}></span>
          <span className={headerStyles.hamburgerLine}></span>
          <span className={headerStyles.hamburgerLine}></span>
        </div>
      </div>
    </nav>
  );
}
