import s from "./Button.module.css";

export default function Button({ buttonName, increment }) {
  return (
    <li className={s.list}>
      <button className={s.button} onClick={() => increment(buttonName)}>
        {buttonName}
      </button>
    </li>
  );
}
