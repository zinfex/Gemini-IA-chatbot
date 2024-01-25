import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegPaperPlane } from "react-icons/fa";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./Gemini.css";
import Api from "../../config/Api.jsx";

function Gemini() {
  // async function initpage() {
  // }

  useEffect(() => {
    // initpage();

    const token = localStorage.getItem("token");
    if (token == (null || undefined)) {
      location.href = "/login";
    }
  }, []);

  const [respostaIA, setResposaIA] = useState("Olá, qual sua dúvida?");
  const [values, setValues] = useState("");
  const [formData, setFormData] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  async function handleButton() {
    try {
      setFormData('');
      setResposaIA("...");

      if (values.texto == undefined) {
        setResposaIA("Como posso ajudar?");
      } else {
        await Api.post("gemini", {
          texto: values.texto,
        }).then((response) => {
          console.log(response);

          Api.get("gemini").then(setResposaIA(response.data.resposta));
        });
      }
      setFormData()
    } catch (e) {
      console.log(e);
    }
  }

  function handleKeyPress(event) {
    if (event.key == "Enter") {
      handleButton();
    }
  }

  return (
    <body className="home">
      <MDBContainer
        fluid
        className="bg-dark"
        style={{ backgroundColor: "#eee", height: "100%" }}
      >
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="10" lg="8" xl="6">
            <MDBCard
              id="chat2"
              style={{ borderRadius: "15px", height: "100vh" }}
              className="bg-dark text-light"
            >
              <MDBCardHeader className="d-flex justify-content-between align-items-center p-3">
                <h5 className="mb-0">Gemini chatbot</h5>

                <div id="headerBtns">
                  <Link to="/">
                    <MDBBtn
                      id="baixaroapp"
                      color="primary"
                      size="sm"
                      rippleColor="dark"
                      className="btn"
                    >
                      Baixar o APP
                    </MDBBtn>
                  </Link>

                  <Link to="/">
                    <MDBBtn
                      id="baixaroapp"
                      color="primary"
                      size="sm"
                      rippleColor="dark"
                      className="btn"
                    >
                      Início
                    </MDBBtn>
                  </Link>
                </div>
              </MDBCardHeader>

              <MDBCardBody>
                <div className="d-flex flex-row justify-content-start">
                  <img
                    src="https://img.freepik.com/fotos-premium/robo-futurista-gerado-pela-inteligencia-artificial-ai_1417-19664.jpg?w=360"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />

                  <div>
                    <p
                      className="small p-2 ms-3 mb-1 rounded-3 bg-dark text-light"
                      style={{ backgroundColor: "#f5f6f7", fontSize: 20 }}
                    >
                      {respostaIA}
                    </p>
                  </div>
                </div>
              </MDBCardBody>

              <MDBCardFooter className="text-muted d-flex justify-content-center p-3">
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Mensagem Gemini"
                    name="texto"
                    onChange={handleChangeValues}
                    value={formData}
                    onKeyDown={handleKeyPress}
                  />

                  <button
                    className="btn btn-primary"
                    type="submit"
                    style={{
                      fontSize: "20px",
                      paddingInline: 15,
                      paddingBlock: 0,
                    }}
                    onClick={handleButton}
                  >
                    <FaRegPaperPlane />
                  </button>
                </div>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </body>
  );
}

export default Gemini;
