import { Link } from "react-router-dom";
import "./Home.css";
import { GoArrowUpRight } from "react-icons/go";

function Home() {
  return (
    <div className="page">
      <div className="header">
        <div className="btns">
          <Link to="/">
            <span>Como usar</span>
          </Link>
          <Link to="/cadastrar">
            <span>Cadastrar</span>
          </Link>
          <Link to="/login">
            <span>Entrar</span>
          </Link>
        </div>
      </div>

      <div className="container">
            <img
            className="iaimg1"
            src="https://images.trustinnews.pt/uploads/sites/5/2021/12/211206_RoboAmecaEngineeredArts.png"
            alt=""
            />
        <h1>
          Enfrentando problemas?
          <br /> GEMINI é a resposta!
        </h1>
        <Link to="/login">
          <button className="pbtn">
            Conhecer a Gemini
            <GoArrowUpRight />
          </button>
        </Link>
      </div>

      
    </div>
  );
}

export default Home;
