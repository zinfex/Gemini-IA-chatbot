import "./termos.css";
import { Link } from "react-router-dom";
import {
  MDBBtn,
} from "mdb-react-ui-kit";

function Termos() {
  return (
    <div className="pageterm">
      <div className="boxterms">
        <h6>Termos e Condições:</h6>
        <p>
          Aceitação dos Termos: Ao acessar e utilizar [Gemini], você concorda
          integralmente com estes Termos e Condições.
          Caso discorde de qualquer parte deste documento, recomendamos que pare
          imediatamente de usar nossos serviços. <br /> Uso Responsável: Você
          concorda em utilizar [Gemini] de maneira responsável e em conformidade
          com todas as leis e regulamentos aplicáveis. <br /> O uso indevido ou
          ilegal resultará na rescisão imediata de sua conta. Privacidade
          e Dados Pessoais: Comprometemo-nos a proteger sua privacidade. <br />{" "}
          Ao utilizar [Gemini], você consente a coleta e uso de informações de
          acordo com nossa Política de Privacidade. Propriedade
          Intelectual: Todo o conteúdo disponibilizado em [Gemini] é protegido
          por direitos autorais e outras leis de propriedade intelectual. <br />{" "}
          Você concorda em respeitar esses direitos e não reproduzir, distribuir
          ou criar obras derivadas sem permissão. Atualizações e
          Modificações: Reservamo-nos o direito de modificar estes Termos e
          Condições a qualquer momento. <br /> Encerramento da Conta:
          Podemos encerrar ou suspender sua conta a qualquer momento, por
          qualquer motivo, sem aviso prévio.
        </p>

        <Link to="/sobre">
          <MDBBtn>Aceitar</MDBBtn>
        </Link>
      </div>
    </div>
  );
}

export default Termos;
