import "./styles.css";

export default function Footer() {
  return (
    <footer>
      <ul className="footer-social-network">
        <li>
          <a href="https://google.com">@dsplaygames</a>
        </li>
        <li>
          <a href="https://google.com">/dsplaygames</a>
        </li>
      </ul>
      <p>DS Play Games Ltda. Todos direitos reservados</p>
      <ul className="footer-social-terms">
        <li>
          <a href="https://google.com">Política de privacidade</a>
        </li>
        <li>
          <a href="https://google.com">Termos de uso</a>
        </li>
      </ul>
    </footer>
  );
}
