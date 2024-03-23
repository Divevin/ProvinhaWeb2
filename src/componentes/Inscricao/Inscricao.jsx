import "./Iscricao.css";
import image from "../../assets/imagens/Serjo2.png";

function Inscricao() {
  return (
    <div id="incricao">
      <h1>Inscrições</h1>
      <div className="conteudo">
        <div className="card">
          <picture>
            <img src={image} alt="Serjao" className="Serjinho"/>
          </picture>
        </div>

        <header className="dados">
        <h1>Faça sua inscrição
          Não perca essa oportunidade</h1>
        <input type="text" name="Nome Completo" id="N" placeholder="Nome Completo" />
        <input type="text" name="Email" id="E" placeholder="Email" />
        <input type="text" name="CPF" id="C" placeholder="CPF" />
        <button>Inscrever</button>
      </header>

      </div>

      
    </div>
  )
}

export default Inscricao;