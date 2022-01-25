import Line from "./line/line";

import timelineStyles from "./timeline.module.css";
export default function Timeline() {
  return (
    <div className={timelineStyles.timeline}>
      <h1>Обо мне</h1>
      <div className={timelineStyles.content}>
        <div className={timelineStyles.text}>
          <h2>2012 - 2014</h2>
          <h3>Уральский федеральный университет</h3>
          <p>
            Получил высшее образование по специальности "Радиотехника" Успел
            поработать в <a href="https://ru.d-test.ru/">D-test</a>, написал
            алгоритм для{" "}
            <a href="https://ru.d-test.ru/catalog/izmeritel_nye_sistemy/lazernaya_sistema_izmereniya_tolshiny_polotna/">
              измерения толщины жвачки
            </a>{" "}
            :
          </p>
        </div>
        <Line width={"2px"} height={"200px"} color={"white"} />
      </div>

      <div className={timelineStyles.content}>
        <div className={timelineStyles.text}>
          <h2>2012 - 2014</h2>
          <h3>Уральский федеральный университет</h3>
          <p>
            Получил высшее образование по специальности "Радиотехника" Успел
            поработать в <a href="https://ru.d-test.ru/">D-test</a>, написал
            алгоритм для{" "}
            <a href="https://ru.d-test.ru/catalog/izmeritel_nye_sistemy/lazernaya_sistema_izmereniya_tolshiny_polotna/">
              измерения толщины жвачки
            </a>{" "}
            :
          </p>
        </div>
        <Line width={"2px"} height={"200px"} color={"white"} />
      </div>
    </div>
  );
}
