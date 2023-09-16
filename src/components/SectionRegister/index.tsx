import CheckOption from "../CheckOption";
import ListOfOptions from "../ListOfOptions";
import "./styles.css";

export default function SectionRegister() {
  const options = ["PC", "XBOX", "Playstation"];

  return (
    <section id="register">
      <h2>Faça sua inscrição</h2>
      <div className="register-card-container">
        <form>
          <div className="input-block pt50">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome completo"
            />
          </div>
          <div className="input-block">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
        </form>
        <div className="choose-your-platform">
          Qual sua plataforma preferida?
        </div>
        <div className="listing-options">
          {options && <ListOfOptions options={options} />}
        </div>
        <div>
          <CheckOption />
        </div>
        <div className="input-btn">
          <button className="input-btn-submit mt40" type="submit">
            Enviar
          </button>
          <button className="input-btn-clear" type="submit">
            Limpar
          </button>
        </div>
      </div>
    </section>
  );
}
