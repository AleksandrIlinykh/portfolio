import React from "react";
import Map from "./map/map";
import contactsStyles from "./contacts.module.css";
import githubIcon from "../../images/github-icon-white.png";
import linkedinIcon from "../../images/linkedin-icon-white.png";

export default function Contacts() {
  return (
    <section className={contactsStyles.contacts}>
      <section className={contactsStyles.info}>
        <h2>Контактная информация</h2>
        <p>
          Номер телефона: <br /> <strong>+7-902-255-21-32</strong>
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
        <h2>Я тут!</h2>
        <Map />
      </section>
    </section>
  );
}
