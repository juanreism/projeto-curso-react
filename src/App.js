import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Empresa from './components/pages/Empresa'
import Contato from './components/pages/Contato'
import NovoProjeto from './components/pages/NovoProjeto'
import Projeto from './components/pages/Projeto'
import Edicao from './components/pages/Edicao'


import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/empresa" element={<Empresa />}/>
          <Route path="/contato" element={<Contato />}/>
          <Route path="/projeto" element={<Projeto />}/>
          <Route path="/novoprojeto" element={<NovoProjeto />}/>
          <Route path="/edicao/:id" element={<Edicao />}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
