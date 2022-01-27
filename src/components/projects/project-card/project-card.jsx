import { useState } from "react";
import projectCardStyles from "./project-card.module.css";

import githubIconWhite from "../../../images/github-icon-white.png";

export default function ProjectCard({
  header = "React - burger",
  text = `Учебный проект Яндекс - практикума, представляющий собой
интернет-магазин бургеров с конструктором заказа, авторизацией,
запросами к API сервера.`,
  tags = ["Javascript", "Typescript", "React", "Redux"],
  link = "https://github.com/AlexanderIlinykhDev/react-burger",
  imgSrc,
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
        <h2 className={projectCardStyles.header}>{header}</h2>
        <div className={projectCardStyles.content}>
          <div className={projectCardStyles.imageContainer}>{imgSrc}</div>

          <div
            className={`${projectCardStyles.description} ${
              isDescription && projectCardStyles.active
            }`}
          >
            <p className={projectCardStyles.text}>{text}</p>
            <p className={projectCardStyles.tags}>
              {`Теги: `}
              {tags.map((tag) => (
                <span className={projectCardStyles.tag}>{tag + " "}</span>
              ))}
            </p>
            <div className={projectCardStyles.links}>
              <a href={link}>
                <img
                  src={githubIconWhite}
                  className={projectCardStyles.linkImg}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
