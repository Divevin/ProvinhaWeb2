import "./Inicio.css";
import image from "../../assets/imagens/Serjao.png";

function Inicio() {
  return (
    <div id="inicio">
      <header className="Chama">
        <h1>Semana Da Física</h1>
        <p>Inscreva-se para Participar</p>
        <button>Inscreva-se</button>
      </header>

      <div className="fotinha">
        <picture>
          <img src={image} alt="Serjao Foguetes" className="cerjo" />
        </picture>
      </div>
    </div>
  )
}

export default Inicio;