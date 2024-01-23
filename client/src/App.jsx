import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gemini from './Gemini/Gemini.jsx'
import Login from './login/Login.jsx';
import Cadastro from './cadastro/Cadastro.jsx';
import Home from './home/Home.jsx';
import Sobre from './pages/sobre/Sobre.jsx';
import Termos from './pages/termos/Termos.jsx';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/gemini" element={<Gemini />} />
      <Route path="/login" element={<Login />} />
      <Route path='/cadastrar' element={<Cadastro />} />
      <Route path='/' element={<Home />} />
      <Route path='/sobre' element={<Sobre />} />
      <Route path='/termos' element={<Termos />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
