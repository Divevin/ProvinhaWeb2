import "./Palestrantes.css";
import image from "../../assets/imagens/Felipe.png";
import image2 from "../../assets/imagens/Monark.png";
import image3 from "../../assets/imagens/Nando moura.png";

function Palestrantes() {
  return (
    <div id="palestrantes">
      <h1>Palestrantes</h1>
      <div className="Container1">

      <div className="t1">
        <picture>
          <img src={image} alt="Felipe neto" className="Foto" />
        </picture>
        <h1> HUMANS MUST DIE</h1>
        <h3> BLA BLA BLA</h3>
        <h5>Leran more</h5>
      </div>
        
        <div className="t2">
        <picture>
          <img src={image2} alt="Monark" className="Foto" />
        </picture>
        <h1> HUMANS MUST DIE</h1>
        <h3> BLA BLA BLA</h3>
        <h5>Leran more</h5>
        </div>
        
        <div className="t3">
        <picture>
          <img src={image3} alt="Nando Moura" className="Foto" />
        </picture>
        <h1> HUMANS MUST DIE</h1>
        <h3> BLA BLA BLA</h3>
        <h5>Leran more</h5>
      </div>
        
        
      </div>
      <button>CRONOGRAMA</button>
    </div>
  )
}

export default Palestrantes;