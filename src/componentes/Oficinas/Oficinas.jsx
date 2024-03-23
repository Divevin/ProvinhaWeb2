import "./Oficinas.css";
import image from "../../assets/imagens/Monark.png";
import image2 from "../../assets/imagens/Nando moura.png";
import image3 from "../../assets/icones/setinha.svg";
import image4 from "../../assets/icones/setinha2.svg";

function Oficinas() {
  return (
    <div id="oficinas">
      <h1>Oficinas</h1>
      <div className="Container2">

        <button> 
          <picture>
          <img src={image3} alt="Setinha" />
          </picture>
        </button>

        <div className="Boora">
        <h2> Oficina1</h2>
        <h4> Esta oficina e sobre dig din dig din</h4>
        <picture>
          <img src={image} alt="Monark" className="Foto" />
        </picture>
        <h1>Nome</h1>
        <h4>Profissão</h4>
        </div>
        
        <div className="Boora2">
        <h2> Oficina 2</h2>
        <h4> Esta oficina e sobre dig din dig din</h4>
        <picture>
          <img src={image2} alt="Nando moura" className="Foto" />
        </picture>
        <h1>Nome</h1>
        <h4>Profissão</h4>
        </div>
        
        <button> 
        <picture>
          <img src={image4} alt="Setinha" />
          </picture>
        </button>
        
    </div>
    </div>
  )
}

export default Oficinas;