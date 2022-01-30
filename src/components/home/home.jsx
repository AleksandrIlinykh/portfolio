import homeStyles from "./home.module.css";
import myPhoto from "../../images/myPhoto.png";
import Link from "../common/link/link";
import cv from "../../files/cv.pdf";
export default function Home() {
  return (
    <>
      <div className={homeStyles.home} id="home">
        <div className={homeStyles.content}>
          <section className={homeStyles.about}>
            <p className={homeStyles.text}>
              Я - опытный инженер, который хочет найти команду единомышленников
              и стать уверенным Front-end разработчиком. Внесу ноту креатива в
              ваши продукты. Работаю с версткой, JS, React и Typescript.
            </p>
            <div className={homeStyles.links} id="about">
              <Link
                type={"download"}
                text={"Резюме"}
                iconSize={"large"}
                href={cv}
                fileName={"IlinykhCV.pdf"}
              />
            </div>
          </section>

          <div className={homeStyles.imgContainer}>
            <img src={myPhoto} alt="" className={homeStyles.img} />
            <div className={homeStyles.gradient}></div>
          </div>
        </div>
      </div>
    </>
  );
}
