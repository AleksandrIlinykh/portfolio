import linkStyles from "./link.module.css";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

export default function Link({ type, text }) {
  const icon = () => {
    if (type === "download") {
      return <FileDownloadOutlinedIcon fontSize={"large"} />;
    }
    if (type === "openNewTab") {
      return <OpenInNewOutlinedIcon fontSize={"large"} />;
    }
  };
  return (
    <div className={linkStyles.link}>
      {icon()}
      <a href="">{text}</a>
    </div>
  );
}
