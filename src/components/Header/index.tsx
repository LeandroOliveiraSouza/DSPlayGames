import "./styles.css";
import userIcon from "../../assets/user.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container-content">
          <div className="header__title">
            <h1>DSPlayGames</h1>
          </div>
          <div className="header__nav-list">
            <nav id="header__nav">
              <ul className="header__nav-item">
                <li>
                  <a href="#news" className="header__nav-link">Notícias</a>
                </li>
                <li>
                  <a href="#games" className="header__nav-link">
                    Jogos
                  </a>
                </li>
                <li>
                  <a href="#register" className="header__nav-link">
                    Increva-se
                  </a>
                </li>
              </ul>
            </nav>
            <img src={userIcon} alt="Usuário" />
          </div>
        </div>
      </div>
    </header>
  );
}
