import { useRef, useEffect, useState } from "react";
import onScrollContainerStyles from "./on-scroll-container.module.css";

export default function OnScrollContainer({ children }) {
  const [isActive, setIsActive] = useState(false);
  const container = useRef(null);
  const onScroll = () => {
    let positionDelta =
      container.current.getBoundingClientRect().top - window.innerHeight;
    if (positionDelta < -200) {
      setIsActive(true);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`${onScrollContainerStyles.container} ${
        isActive && onScrollContainerStyles.active
      }`}
      ref={container}
    >
      {children}
    </div>
  );
}
