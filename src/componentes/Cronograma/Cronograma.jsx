import "./Cronograma.css";

function Cronograma() {
  return (
    <div id="cronograma">
      <h1>Cronograma</h1>
      <div className="Info">
      <table className="tabelona">
    <thead>
      <tr>
      <td>Horario/Dia</td>
        <th>06/05/2024</th>
        <th>07/05/2024</th>
        <th>08/05/2024</th>
        <th>09/05/2024</th>
        <th>10/05/2024</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>19:30</td>
        <th>Palestra</th>
        <th>Palestra</th>
        <th>Palestra</th>
        <th>Palestra</th>
        <th>Palestra</th>
      </tr>
      <tr>
      <td>20:30</td>
        <th>Intervalo</th>
        <th>Intervalo</th>
        <th>Intervalo</th>
        <th>Intervalo</th>
        <th>Intervalo</th>
      </tr>
      <tr>
        <td>21:00</td>
        <th>Oficina</th>
        <th>Oficina</th>
        <th>Oficina</th>
        <th>Oficina</th>
        <th>Oficina</th>
      </tr>
    </tbody>
  </table>
      </div>
    </div>
  )
}

export default Cronograma;