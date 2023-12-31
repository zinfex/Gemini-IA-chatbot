import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/Home.jsx'
import Login from './login/Login.jsx';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
