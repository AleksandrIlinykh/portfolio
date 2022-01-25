import { useRef, useEffect } from "react";

import lineStyles from "./line.module.css";
export default function Line({ width, height, color }) {
  const line = useRef(null);
  useEffect(() => {
    line.current.style.width = width;
    line.current.style.height = height;
    line.current.style.backgroundColor = color;
    console.log(line.current);
  }, []);

  return <div className={lineStyles.line} ref={line}></div>;
}
