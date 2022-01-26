import linkStyles from "./link.module.css";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

export default function Link({
  type,
  text,
  href,
  iconSize = "large",
  isBlank = false,
}) {
  const icon = () => {
    if (type === "download") {
      return <FileDownloadOutlinedIcon fontSize={iconSize} />;
    }
    if (type === "openNewTab") {
      return <OpenInNewOutlinedIcon fontSize={iconSize} />;
    }
  };
  return (
    <div className={linkStyles.container}>
      <div className={linkStyles.link}>
        {icon()}
        <a
          href={href}
          target={isBlank && "_blank"}
          className={linkStyles.linkElement}
        >
          {text}
        </a>
      </div>
    </div>
  );
}
