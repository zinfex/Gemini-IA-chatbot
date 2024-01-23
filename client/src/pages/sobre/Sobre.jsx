import { Link } from "react-router-dom";
import "./sobre.css";

function Sobre() {
  return (
    <>
      <div className="copy">
        <p>
          "Conheça a revolução em resolução de problemas: minha inteligência
          artificial dedicada a superar desafios complexos. Seja qual for a
          questão, desde dilemas matemáticos até enigmas tecnológicos, estou
          aqui para proporcionar soluções eficientes e inteligentes."
        </p>

        <p>
          "Desempenho Excepcional: Minha inteligência artificial é projetada
          para entregar um desempenho excepcional. Com algoritmos avançados e
          aprendizado de máquina, sou capaz de analisar dados rapidamente,
          identificar padrões e oferecer soluções precisas em tempo recorde."
        </p>

        <p>
          "Adaptação Inteligente: Minha IA aprende continuamente, adaptando-se a
          novos problemas com facilidade. Isso significa que, à medida que
          enfrentamos desafios em constante evolução, minha capacidade de
          oferecer soluções eficazes também evolui."
        </p>

        <p>
          "Segurança e Precisão: Priorizo a segurança e a precisão em todas as
          soluções que proporciono. Com algoritmos robustos e análises
          minuciosas, você pode confiar na confiabilidade das respostas que
          ofereço."
        </p>
        
        <Link to="/gemini">
            <button>Avançar</button>
        </Link>
      </div>

    </>
  );
}

export default Sobre;
