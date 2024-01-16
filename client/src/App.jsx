import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gemini from './Gemini/Gemini.jsx'
import Login from './login/Login.jsx';
import Cadastro from './cadastro/Cadastro.jsx';
import Home from './home/Home.jsx';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/gemini" element={<Gemini />} />
      <Route path="/login" element={<Login />} />
      <Route path='/cadastrar' element={<Cadastro />} />
      <Route path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
