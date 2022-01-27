import React from "react";
import Map from "./map/map";
import contactsStyles from "./contacts.module.css";
import githubIcon from "../../images/github-icon.png";
import linkedinIcon from "../../images/linkedin-icon.png";

export default function Contacts() {
  return (
    <section className={contactsStyles.contacts}>
      <section className={contactsStyles.info}>
        <h2>Contact information</h2>
        <p>
          Phone number: <br /> <strong>+7-902-255-21-32</strong>
        </p>
        <p>
          Email: <br />
          <strong>alexanderilinykhdev@yandex.ru</strong>
        </p>
        <section className={contactsStyles.links}>
          <a href="https://github.com/AlexanderIlinykhDev/">
            <img src={githubIcon} className={contactsStyles.linkImg} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/alexandr-iljinykh-2a00451a4">
            <img src={linkedinIcon} className={contactsStyles.linkImg} alt="" />
          </a>
        </section>
      </section>

      <section className={contactsStyles.map}>
        <h2>
          Here you can see <br /> where I currently am!
        </h2>
        <Map />
      </section>
    </section>
  );
}
