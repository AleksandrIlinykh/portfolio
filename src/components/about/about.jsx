import aboutStyles from "./about.module.css";
import Timeline from "./timeline/timeline";

export default function About() {
  return (
    <div className={aboutStyles.about}>
      <h2 className={aboutStyles.header}>Обо мне</h2>
      <Timeline />
    </div>
  );
}
