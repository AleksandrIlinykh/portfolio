import Line from "./line/line";
import Content from "./content/content";

import { timelineData } from "../../../data/timelineData";

import timelineStyles from "./timeline.module.css";
export default function Timeline() {
  return (
    <div className={timelineStyles.timeline}>
      <h1>Обо мне</h1>
      <div className={timelineStyles.content}>
        {timelineData.map((timelineElement) => (
          <>
            <Content
              date={timelineElement.date}
              header={timelineElement.header}
              text={timelineElement.text}
              key={timelineElement.id}
            />
            <Line width={"2px"} height={"200px"} color={"white"} />
          </>
        ))}
      </div>
    </div>
  );
}
