import "./Evento.css";
import image from "../../assets/imagens/Fisica 1.png";
import image2 from "../../assets/imagens/Fisica 2.png";
import image3 from "../../assets/imagens/Fisica 3.png";
import image4 from "../../assets/imagens/Patrocinadores.png";

function Evento() {
  return (
    <div id="evento">

      <div className="chama">
        <h1>O EVENTO</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non essedolorum vitae suscipit iure? Similique mollitia sed blanditiis, illum obcaecati ullam recusandae nemo consequatur tempora adipisci doloremque fuga, in cumque.</p>    
      </div>

      <div className="asfotos">
        <picture>
          <img src={image} alt="Evento do ifpr" className="foto1" />
        </picture>
        <picture>
          <img src={image2} alt="Evento do ifpr" className="foto2" />
        </picture>
        <picture>
          <img src={image3} alt="Evento do ifpr" className="foto3" />
        </picture>
      </div>

        
          <ul className="opicoes">
            <li>
              <p> Lorem ipsumit a assumenda quod earum! </p>
            </li>
            <li>
              <p> Lorem ipsum dt a assumenda quod earum! </p>
            </li>
            <li>
              <p> Lorem ipsum dolor  a assumenda quod earum! </p>
            </li>
            <li>
              <p> Lorem cere impedit a assumenda quod earum! </p>
            </li>
            <button>INSCREVA-SE</button>
          </ul>
        

          <h2 className="np">Nossas Parceiras</h2>
        <div className="parceiras">
        

          <picture>
            <img src={image4} alt="Patrocinadores" className="foto4" />
          </picture>
          <picture>
            <img src={image4} alt="Patrocinadores" className="foto4" />
          </picture>
          <picture>
            <img src={image4} alt="Patrocinadores" className="foto4" />
          </picture>
          <picture>
            <img src={image4} alt="Patrocinadores" className="foto4" />
          </picture>
        </div>
      </div>
    
  )
}

export default Evento;