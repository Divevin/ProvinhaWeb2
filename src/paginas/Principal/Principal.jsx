import Header from "../../componentes/Header/Header.jsx";
import Inicio from "../../componentes/Inicio/Inicio.jsx";
import Evento from "../../componentes/Evento/Evento.jsx";
import Palestrantes from "../../componentes/Palestrantes/Palestrantes.jsx";
import Oficinas from "../../componentes/Oficinas/Oficinas.jsx";
import Cronograma from "../../componentes/Cronograma/Cronograma.jsx";
import Inscricao from "../../componentes/Inscricao/Inscricao.jsx";
import Footer from "../../componentes/Footer/Footer.jsx";
import './Principal.css';

function Principal() {
  return (
    <main>
      <Header />
      <Inicio />
      <Evento />
      <Palestrantes />
      <Oficinas />
      <Cronograma />
      <Inscricao />
      <Footer />
    </main>
  )
}

export default Principal