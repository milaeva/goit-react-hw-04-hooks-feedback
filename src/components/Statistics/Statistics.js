import s from "./Statistics.module.css";

export default function Statistics({ good, neutral, bad, total, percantage }) {
  return (
    <ul className={s.list}>
      <li>
        <p className={s.item}>Good: {good}</p>
      </li>
      <li>
        <p className={s.item}>Neutral: {neutral}</p>
      </li>
      <li>
        <p className={s.item}>Bad: {bad}</p>
      </li>
      <li>
        <p className={s.item}>Total: {total} </p>
      </li>
      <li>
        <p className={s.item}>Positive feedback: {percantage}%</p>
      </li>
    </ul>
  );
}
