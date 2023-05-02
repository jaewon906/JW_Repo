import { useEffect } from "react";
import style from "../css/jw_main.module.css";

export default function Main() {

  useEffect(() => {

    function fn1(e) {
      let a = document.documentElement.scrollHeight,
        b = document.documentElement.clientHeight,
        c = document.documentElement.scrollTop,
        progress = c / (a - b);
      console.log(progress);
    }

    window.addEventListener("scroll", fn1);

    return ()=>{window.removeEventListener("scroll", fn1);}

  },[]);

  return (
    <div className={style.container}>
      <div className={style.box}></div>
      <div className={style.box}></div>
      <div className={style.box}></div>
      <div className={style.box}></div>
    </div>
  );
}
