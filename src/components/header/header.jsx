import headerStyles from "./header.module.css";

export default function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className={headerStyles.header}>
      <div className={headerStyles.logo}>
        <h1>ALEXANDER ILINYKH</h1>
      </div>
      <div className={headerStyles.controls}>
        <ul
          className={
            headerStyles.headerNav +
            " " +
            (isMenuOpen && headerStyles.headerNavActive)
          }
        >
          <li className={headerStyles.headerNavElem}>home</li>
          <li className={headerStyles.headerNavElem}>about</li>
          <li className={headerStyles.headerNavElem}>skills</li>
          <li className={headerStyles.headerNavElem}>portfolio</li>
          <li className={headerStyles.headerNavElem}>contact</li>
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
