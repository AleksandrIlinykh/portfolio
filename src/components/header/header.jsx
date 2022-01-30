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
            <a href="#about" className={headerStyles.link}>
              <p>Обо мне</p>
            </a>
          </li>
          <li
            className={headerStyles.headerNavElem}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <a href="#projects" className={headerStyles.link}>
              <p>Проекты</p>
            </a>
          </li>
          <li
            className={headerStyles.headerNavElem}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <a href="#contacts" className={headerStyles.link}>
              <p>Контакты</p>
            </a>
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
