import "./message.css";

export default function Message({text}) {
  return (
    <li className="item">
      {text}
    </li>
  );
}
