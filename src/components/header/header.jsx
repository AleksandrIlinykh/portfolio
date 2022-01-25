import headerStyles from "./header.module.css";

export default function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className={headerStyles.header}>
      <div className={headerStyles.logo}>
        <h1 className={headerStyles.logoText}>ALEXANDER ILINYKH</h1>
      </div>
      <div className={headerStyles.controls}>
        <ul
          className={
            headerStyles.headerNav +
            " " +
            (isMenuOpen && headerStyles.headerNavActive)
          }
        >
          <li className={headerStyles.headerNavElem}>обо мне</li>
          <li className={headerStyles.headerNavElem}>проекты</li>
          <li className={headerStyles.headerNavElem}>навыки</li>
          <li className={headerStyles.headerNavElem}>контакты</li>
        </ul>

        <div
          className={
            headerStyles.hamburger +
            " " +
            (isMenuOpen && headerStyles.hamburgerActive)
          }
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            console.log(isMenuOpen);
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
