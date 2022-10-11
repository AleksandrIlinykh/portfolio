import homeStyles from './home.module.css';
import myPhoto from '../../images/myPhoto.png';
import Link from '../common/link/link';
import cv from '../../files/cv.pdf';
export default function Home() {
  return (
    <>
      <div className={homeStyles.home} id="home">
        <div className={homeStyles.content}>
          <section className={homeStyles.about}>
            <p className={homeStyles.text}>
              Hello! I'm Alexander, a front-end developer. React, Typescript,
              Redux, and Axios make up my main stack. I work, learn new things,
              and enjoy my new specialty, which makes me very happy. View my
              qualifications in the "Projects" section.
            </p>
            <div className={homeStyles.links} id="about">
              <Link
                type={'download'}
                text={'resume'}
                iconSize={'large'}
                href={cv}
                fileName={'IlinykhCV.pdf'}
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
