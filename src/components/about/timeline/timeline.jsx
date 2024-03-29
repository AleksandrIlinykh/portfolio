import Line from './line/line';
import Content from './content/content';

import { timelineData } from '../../../data/timelineData';

import timelineStyles from './timeline.module.css';
import OnScrollContainer from '../../common/on-scroll-container/on-scroll-container';
export default function Timeline() {
  return (
    <div className={timelineStyles.timeline}>
      <div className={timelineStyles.content}>
        {timelineData.map((timelineElement, index) => (
          <div key={index}>
            <Line width={'2px'} height={'200px'} color={'white'} />
            <OnScrollContainer>
              <Content
                date={timelineElement.date}
                header={timelineElement.header}
                text={timelineElement.text}
              />
            </OnScrollContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
