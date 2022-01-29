import Link from "../components/common/link/link";
export const timelineData = [
  {
    id: 1,
    date: "2012 - 2014",
    header: " Обучение в Уральском Федеральном Университете",
    text: [
      `Получил высшее образование по специальности "Радиотехника". Во время учёбы успел
          поработать в  компании `,
      <Link
        type={"openNewTab"}
        text={"D-test"}
        href={"https://ru.d-test.ru/"}
        isBlank={true}
        iconSize={"medium"}
      />,
      ` написал алгоритм для `,
      <Link
        type={"openNewTab"}
        text={"измерения"}
        href={
          "https://ru.d-test.ru/catalog/izmeritel_nye_sistemy/lazernaya_sistema_izmereniya_tolshiny_polotna/"
        }
        isBlank={true}
        iconSize={"medium"}
      />,
      " толщины жвачки на С++.",
    ],
  },
  {
    id: 2,
    date: "2016 - 2018",
    header: "Работа на заводе",
    text: [
      `Трудился на предприятии `,
      <Link
        type={"openNewTab"}
        text={"НПО-Автоматики"}
        href={"https://www.npoa.ru/"}
        isBlank={true}
        iconSize={"medium"}
      />,
      `. Помимо инженерных задач занимался написанием ПО. Самое большое достижение - 
      локализация и устранение ошибки в коде микроконтроллера на assembler 8086, завтавлявшей приборы периодически выходить из строя в течении нескольких лет!`,
    ],
  },
  {
    id: 2,
    date: "2018 - 2020",
    header: "Стартап!",
    text: [
      `Работал в компании `,
      <Link
        type={"openNewTab"}
        text={"Labyrinth"}
        href={"https://labyrinth.pro/"}
        isBlank={true}
        iconSize={"medium"}
      />,
      `, где работал над противоугонной системой. Помимо проектировки антенн и железа занимался рефакторингом кода микроконтроллеров на C++, 
       улучшал UI/UX платформы мониторинга с WEB разработчиками.`,
    ],
  },
  {
    id: 2,
    date: "2021",
    header: "Ещё один завод и коммандировка в Голландию",
    text: [
      `6 месяцев занимался инженерной работой на `,
      <Link
        type={"openNewTab"}
        text={"Заводе ЭМА"}
        href={"https://ema.su/"}
        isBlank={true}
        iconSize={"medium"}
      />,
      `, Целый месяц провёл в Германии и Голландии, работая в лаборатории`,
      <Link
        type={"openNewTab"}
        text={"Dekra"}
        href={
          "https://www.dekra-product-safety.com/en/about-dekra/locations/europe/netherlands/arnhem"
        }
        isBlank={true}
        iconSize={"medium"}
      />,
      `, успешно сопроводив прохождение испытаний медицинских устройств,
   активно общаясь с инженерами на английском и на месте исправляя критические недостатки.`,
    ],
  },
  {
    id: 2,
    date: "2022",
    header: "Настоящий момент",
    text: [
      `Заканчиваю курс  `,
      <Link
        type={"openNewTab"}
        text={"React разработчик"}
        href={"https://practicum.yandex.ru/react/"}
        isBlank={true}
        iconSize={"medium"}
      />,
      ` от Яндекс Практикум, реализуя давнее желание посвятить себя программированию, действую, делаю ошибки, учусь новому!`,
    ],
  },
];
