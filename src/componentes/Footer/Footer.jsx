import "./Footer.css";
import image from "../../assets/imagens/Github.png";
import image2 from "../../assets/imagens/Facebook.png";
import image3 from "../../assets/imagens/Reddit.png";
import image4 from "../../assets/imagens/Instagram.png";
import image5 from "../../assets/imagens/perfil.jpg";

function Footer() {
  return (
    <footer id="footer">
      <nav className="barrinha">
        <h1>Mais Informaões?
          <p>Acesse jossas redes socias</p>
        </h1>
        
        <div className="redes">
        <picture>
          <img src={image} alt="Github" className="Foto" />
        </picture>
        <picture>
          <img src={image2} alt="Facebook" className="Foto" />
        </picture>
        <picture>
          <img src={image3} alt="Reddit" className="Foto" />
        </picture>
        <picture>
          <img src={image4} alt="Instagram" className="Foto" />
        </picture>
        </div>
      </nav>

      <nav className="final">
        <picture>
        <img src={image5} alt="Perfil" className="Foto" />
        </picture>
        <h3>Produzido por: Vinicius Galindo dos Santos - 43998197293
          <p>IFPR Campus Ivaipora - Rua Max Arthur Greipel, nº 505 - Parque Industrial, Ivaiporã - PR, 86870-000</p>
        </h3>
        
      </nav>
    </footer>
  )
}

export default Footer;