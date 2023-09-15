import "./styles.css";
import gameImg from "../../assets/game.png";

export default function SectionGames() {
  return (
    <section id="games">
      <h2>Jogos</h2>
      <div className="games-container">
        <div className="card-games-container">
          <img className="card-games-img" src={gameImg} alt="Jogo" />
          <h3>Horizon Forbidden West</h3>
          <div className="card-games-manufacturer">
            <div className="card-games-manufacturer-de">De</div>
            <p>Sony Interactive Entertainment</p>
          </div>
          <div className="card-games-classification">9.7</div>
        </div>
        <div className="card-games-container">
          <img className="card-games-img" src={gameImg} alt="Jogo" />
          <h3>Horizon Forbidden West</h3>
          <div className="card-games-manufacturer">
            <div className="card-games-manufacturer-de">De</div>
            <p>Sony Interactive Entertainment</p>
          </div>
          <div className="card-games-classification">9.7</div>
        </div>
        <div className="card-games-container">
          <img className="card-games-img" src={gameImg} alt="Jogo" />
          <h3>Horizon Forbidden West</h3>
          <div className="card-games-manufacturer">
            <div className="card-games-manufacturer-de">De</div>
            <p>Sony Interactive Entertainment</p>
          </div>
          <div className="card-games-classification">9.7</div>
        </div>
      </div>
    </section>
  );
}
