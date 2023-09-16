import './styles.css';
import { useState } from "react";

type Props = {
  options: string[];
};

export default function ListOfOptions({ options }: Props) {
  const [optionSelected, setOpcaoSelecionada] = useState<string | null>(null);

  function handleOptionSelected(event: React.ChangeEvent<HTMLInputElement>) {
    if (typeof event.target.value === "string") {
      setOpcaoSelecionada(event.target.value);
    }
  }

  return (
    <div className="list-of-options">
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              name="opcao"
              value={option}
              checked={option === optionSelected}
              onChange={handleOptionSelected}
            />
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
