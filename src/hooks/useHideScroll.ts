import { useEffect } from "react";

const useHideScroll = (flag: boolean, elem: HTMLElement) => {
  useEffect(() => {
    if (flag) {
      elem.style.overflow = "hidden";
    }
    return () => {
      elem.style.overflow = "auto";
    };
  }, [flag]);
};

export default useHideScroll;
