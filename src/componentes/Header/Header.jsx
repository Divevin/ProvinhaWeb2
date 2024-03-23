import "./Header.css";
import image from "../../assets/imagens/IFPRLOGO.png";

function Header() {
  return (
    <header>
       <nav className="barra">
        <div className="logo-container">
            <picture>
                <img src={image} alt="Logo do Ifpr" className="Logo1" />
            </picture>
        </div>

        <ul className="menu">
            <li>
                <a href="inicio">Inicio</a>
            </li>
            <li>
                <a href="evento">Evento</a>
            </li>
            <li>
                <a href="palestrantes">Palestrantes</a>
            </li>
            <li>
                <a href="oficinas">Oficinas</a>
            </li>
            <li>
                <a href="cronograma">Cronograma</a>
            </li>
            <li>
                <a href="incricao">Inscrição</a>
            </li>
        </ul>
        </nav>
    </header>
  )
}

export default Header;