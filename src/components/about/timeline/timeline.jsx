import Line from "./line/line";
import Content from "./content/content";

import { timelineData } from "../../../data/timelineData";

import timelineStyles from "./timeline.module.css";
export default function Timeline() {
  return (
    <div className={timelineStyles.timeline}>
      <h2 className={timelineStyles.header}>Обо мне</h2>
      <div className={timelineStyles.content}>
        {timelineData.map((timelineElement) => (
          <>
            <Line width={"2px"} height={"200px"} color={"white"} />
            <Content
              date={timelineElement.date}
              header={timelineElement.header}
              text={timelineElement.text}
              key={timelineElement.id}
            />
          </>
        ))}
      </div>
    </div>
  );
}
