import { useEffect, useState, useRef } from "react";

export default function useOutsideAlert(initialIsVisible) {
  const [isShow, setIsShow] = useState(initialIsVisible);
  const ref = useRef(null);
  const handleEnter = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsShow(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handleEnter, true);
    // document.querySelectorAll('.velere').forEach(x => {
    //     x.addEventListener("mouseleave", handleEnter, true);
    //     x.addEventListener("mouseenter", handleEnter, true);
    // })
    return () => {
      document.removeEventListener("mouseenter", handleEnter, true);
    //   document.querySelectorAll('.velere').forEach(x => {
    //     x.removeEventListener("mouseleave", handleEnter, true);
    //     x.removeEventListener("mouseenter", handleEnter, true);
    // })
    };
  });
  return { isShow, setIsShow, ref };
}