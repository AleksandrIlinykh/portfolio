import chatImg from "../images/chat.png";
import reactBurgerImg from "../images/react-burger.png";

export const projectData = [
  {
    id: 1,
    header: "React - burger",
    text: `Учебный проект Яндекс - практикума, представляющий собой
      интернет-магазин бургеров с конструктором заказа, авторизацией,
      запросами к API сервера. Цель - практика hard-skills`,
    tags: ["Javascript", "Typescript", "React", "Redux"],
    link: "https://github.com/AlexanderIlinykhDev/react-burger",
    imgSrc: <img src={reactBurgerImg} alt="" />,
  },
  {
    id: 2,
    header: "Коллективный чат",
    text: `Учебный проект Яндекс - практикума, представляющий собой
      коллективный чат. Цель проекта - командная работа, моя роль: стилизация компонентов`,
    tags: ["Javascript", "React", "Redux"],
    link: "https://github.com/08-pk-team-03/react-project-kitchen-frontend",
    imgSrc: <img src={chatImg} alt="" />,
  },
];
