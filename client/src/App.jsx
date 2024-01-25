import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login/Login.jsx';
import Cadastro from './cadastro/Cadastro.jsx';
import Home from './pages/Home/Home.jsx';
import Sobre from './pages/sobre/Sobre.jsx';
import Termos from './pages/termos/Termos.jsx';
import Gemini from './pages/Gemini/Gemini.jsx';

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
