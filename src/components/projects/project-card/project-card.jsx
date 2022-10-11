import { useState } from 'react';
import projectCardStyles from './project-card.module.css';
import Carousel from 'nuka-carousel';
import githubIconWhite from '../../../images/github-icon-white.png';

export default function ProjectCard({
  header = 'React - burger',
  text = `Учебный проект Яндекс - практикума, представляющий собой
интернет-магазин бургеров с конструктором заказа, авторизацией,
запросами к API сервера.`,
  tags = ['Javascript', 'Typescript', 'React', 'Redux'],
  link = '',
  images,
}) {
  const [isDescription, setIsDescription] = useState(false);
  return (
    <>
      <div
        className={projectCardStyles.projectCard}
        id="projectCard"
        onMouseEnter={() => setIsDescription(true)}
        onMouseLeave={() => setIsDescription(false)}
      >
        <div className={projectCardStyles.imageContainer}>
          {/*         <div className={projectCardStyles.imageContainer}> */}
          <Carousel autoplay wrapAround>
            {images.map((image) => image)}
          </Carousel>
        </div>

        <div className={projectCardStyles.description}>
          <h2 className={projectCardStyles.header}>{header}</h2>
          <p className={projectCardStyles.text}>{text}</p>

          <div className={projectCardStyles.tagsContainer}>
            {tags.map((tag, index) => (
              <p className={projectCardStyles.tag} key={index}>
                {tag}
              </p>
            ))}
          </div>

          {link ? (
            <div className={projectCardStyles.links}>
              <a href={link}>
                <img
                  src={githubIconWhite}
                  className={projectCardStyles.linkImg}
                  alt=""
                />
              </a>
            </div>
          ) : (
            <p>can't provide repository link - the project is not public</p>
          )}
        </div>
      </div>
    </>
  );
}
