import aboutStyles from './about.module.css';
import Timeline from './timeline/timeline';

export default function About() {
  return (
    <div className={aboutStyles.about}>
      <Timeline />
    </div>
  );
}
