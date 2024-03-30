import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Principal from './paginas/Principal/Principal'
import Cadastro from './paginas/Cadastro/Cadastro'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Principal />}/>
        <Route path='/cadastro' element={<Cadastro />}/>
      </Routes>
    </Router>
  )
}

export default App;