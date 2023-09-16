import "./styles.css";
import { useState } from "react";

export default function CheckOption() {
  const [optionSelected, setOpcaoSelecionada] = useState<string>("");

  function handleCheckSelected(event: React.ChangeEvent<HTMLInputElement>) {
    if (typeof event.target.value === "string") {
      setOpcaoSelecionada(event.target.value);
    }
  }

  return (
    <div className="checkbox-option">
      <ul>
        <li className="option-item">
          <input
            type="checkbox"
            name="news"
            value={optionSelected}
            onChange={handleCheckSelected}
          />
          <label>Desejo receber novidades.</label>
        </li>
      </ul>
    </div>
  );
}
