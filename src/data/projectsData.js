import burger1 from '../images/projects/burger/burger1.png';
import burger2 from '../images/projects/burger/burger2.png';
import burger3 from '../images/projects/burger/burger3.png';
import burger4 from '../images/projects/burger/burger4.png';
import kitchen from '../images/projects/kitchen/kitchen.png';
import corp1 from '../images/projects/corp/corp1.png';
import corp2 from '../images/projects/corp/corp2.png';
import corp3 from '../images/projects/corp/corp3.png';
import corp4 from '../images/projects/corp/corp4.png';
import corp5 from '../images/projects/corp/corp5.png';
import corp6 from '../images/projects/corp/corp6.png';
import corp7 from '../images/projects/corp/corp7.png';
import pp1 from '../images/projects/pp/pp1.png';
import pp2 from '../images/projects/pp/pp2.png';
import pp3 from '../images/projects/pp/pp3.png';
import pp4 from '../images/projects/pp/pp4.png';
import chat1 from '../images/projects/chat/chat1.png';
import admin from '../images/projects/admin/admin.png';
import lisa1 from '../images/projects/lisa/lisa1.png';
import lisa2 from '../images/projects/lisa/lisa2.png';
import lisa3 from '../images/projects/lisa/lisa3.png';

export const projectData = [
  {
    id: 1,
    header: 'React - burger (study project)',
    text: `An online store for hamburgers with an order constructor, authorization, and WEB sockets for the confirmation of the order status is being used as a training project by Yandex courses. The goal of the project was to practice hard-skills and main technologies stack.`,
    tags: [
      'Javascript',
      'Typescript',
      'React',
      'Redux',
      'React hooks',
      'react-dnd',
      'AJAX',
      'react-dom-router',
      'web-socket',
      'Jest',
      'Cypress',
    ],
    link: 'https://github.com/AlexanderIlinykhDev/react-burger',
    images: [
      <img src={burger1} alt="image" />,
      <img src={burger2} alt="image" />,
      <img src={burger3} alt="image" />,
      <img src={burger4} alt="image" />,
    ],
  },
  {
    id: 2,
    header: 'Group chat  (study project)',
    text: `Yandex's workshop for training uses group chat. The project's aim is collaboration, I playd the part of components styling and refactoring.`,
    tags: ['Javascript', 'React', 'Redux', 'Legasy-code', 'refactoring'],
    link: 'https://github.com/08-pk-team-03/react-project-kitchen-frontend',
    images: [<img src={kitchen} alt="" />],
  },
  {
    id: 3,
    header: 'Lisaalert education platform  (volunteer work)',
    text: `The app provides training programs for those interested in learning about search engine events, as well as the option to enroll in courses and access text, video, webinars, and tests. My responsibilities included managing team communication, breaking down the design into components, assigning tasks and scheduling when to implement them, reviewing the code of front-end developers, and coordinating with the backend.`,
    tags: ['Javascript', 'React', 'Redux', 'Axios', 'react-router-dom'],
    images: [
      <img src={lisa1} alt="" />,
      <img src={lisa2} alt="" />,
      <img src={lisa3} alt="" />,
    ],
  },
  {
    id: 4,
    header: 'Corporate portal  (current work)',
    text: `A large project for company employees filled with features (employee contacts, corporate vehicle registration, ordering certificates, training materials and education programs, food orders, a corporate fleet market, etc.). Redux-Saga and Redux-Toolkit were used to write the logic and state management. I've written a number of services (ordering documents, registering for business transportation, and creating employee expense reports), and the project is still in progress. I'm refactoring code right now.`,
    tags: [
      'Typescript',
      'React',
      'Redux-toolkit',
      'Redux-saga',
      'Next.js',
      'Axios',
      'Jest',
      'React-hook-form',
    ],
    images: [
      <img src={corp1} alt="image" />,
      <img src={corp2} alt="image" />,
      <img src={corp3} alt="image" />,
      <img src={corp4} alt="image" />,
      <img src={corp5} alt="image" />,
      <img src={corp6} alt="image" />,
      <img src={corp7} alt="image" />,
    ],
  },
  {
    id: 5,
    header: 'Corporate portal admin service (current work)',
    text: `The application was developed to create/edit/delite news for corporate portal, administrate education programms - I have completely writen news part.`,
    tags: ['Typescript', 'React', 'Redux-toolkit', 'Axios', 'react-quill'],
    images: [<img src={admin} alt="image" />],
  },
  {
    id: 6,
    header: 'Pickup point administrator app',
    text: `The application was developed to manage the points of issue for orders, and it includes features for showing sales data, information about the location and status of orders, and management of the points of issue for orders' staff members. I entirely revised the app: javascript to typescript conversion, embedding of the zustand state manager, fetch to axios conversion, and ant design to internal design library conversion.`,
    tags: [
      'Typescript',
      'React',
      'Zustand',
      'Axios',
      'Refactoring',
      'react-table',
      'victory.js',
    ],
    images: [
      <img src={pp1} alt="image" />,
      <img src={pp2} alt="image" />,
      <img src={pp3} alt="image" />,
      <img src={pp4} alt="image" />,
    ],
  },
  {
    id: 7,
    header: 'Chat for developers',
    text: `A fresh project for which I made a Figma design layout and made up a layout (suspended due to more complex tasks).`,
    tags: ['Typescript', 'React', 'Zustand', 'Axios', 'Refactoring'],
    images: [<img src={chat1} alt="image" />],
  },
];
