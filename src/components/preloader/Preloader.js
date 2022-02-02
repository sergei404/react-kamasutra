import s from "./preloader.module.css";

export default function Preloader() {
  return (
    <div className={s.wrapper}>
      <div className={s.box}></div>
      <div className={s.box}></div>
      <div className={s.box}></div>
      <div className={s.box}></div>
      <div className={s.box}></div>
      <div className={s.box}></div>
      <div className={s.box}></div>
      <div className={s.box}></div>
      <div className={s.box}></div>
      <div className={s.box}></div>
    </div>
  );
}
