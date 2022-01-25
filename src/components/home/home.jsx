import homeStyles from "./home.module.css";
import myPhoto from "../../images/myPhoto.png";
import arrowDown from "../../images/arrow-down.png";
import cv from "../../files/cv-alexander-ilinykh.pdf";
export default function Home() {
  return (
    <>
      <div className={homeStyles.home} id="home">
        <div className={homeStyles.content}>
          <section className={homeStyles.about}>
            <p className={homeStyles.text}>
              Опытный инженер, который хочет найти команду единомышленников и
              стать уверенным Front-end разработчиком. Внесу ноту креатива в
              ваши продукты. Работаю с версткой, JS и React.
            </p>
          </section>
          <div className={homeStyles.gradient}>
            <img src={myPhoto} alt="" className={homeStyles.img} />
          </div>
        </div>
      </div>
    </>
  );
}
