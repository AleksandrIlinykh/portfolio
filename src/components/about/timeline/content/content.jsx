import contentStyles from "./content.module.css";
export default function Content({ date, header, text }) {
  return (
    <div className={contentStyles.content}>
      <h2 className={contentStyles.date}>{date}</h2>
      <h3 className={contentStyles.header}>{header}</h3>
      <div className={contentStyles.text}>{text}</div>
    </div>
  );
}
