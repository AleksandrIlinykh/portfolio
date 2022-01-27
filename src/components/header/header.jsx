import headerStyles from "./header.module.css";

export default function Header({ isMenuOpen, setIsMenuOpen }) {
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
            " " +
            (isMenuOpen && headerStyles.headerNavActive)
          }
        >
          <li
            className={headerStyles.headerNavElem}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <a href="#about">обо мне</a>
          </li>
          <li
            className={headerStyles.headerNavElem}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <a href="#projects">проекты</a>
          </li>
          <li
            className={headerStyles.headerNavElem}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <a href="#contacts">контакты</a>
          </li>
        </ul>

        <div
          className={
            headerStyles.hamburger +
            " " +
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
