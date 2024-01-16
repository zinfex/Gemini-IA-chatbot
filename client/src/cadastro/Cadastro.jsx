import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import "../login/Login.jsx";
import axios from "axios";
import '../login/Login.css'

function Cadastro() {

    const [values, setValues] = useState();
    const [captcha, setCaptcha] = useState('ifjcyz');

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
          ...prevValue,
          [value.target.name]: value.target.value,
        }));
      };

    function SignUp() {

      if(values.rcaptcha == captcha) {
        if(values.senha !== values.senha2) {
          alert('Senhas não conrespondem')
        } else {
          try {
            axios
              .post("http://localhost:3001/usuarios", {
                email: values.email,
                senha: values.senha,
              })
              .then((res) => {' '
                alert("Conta criada");
                location.href = "/login";
              });
          } catch (error) {
            console.log(error);
          }
        } 
      } else {
        alert('Verificação inválida')
      }
    } 

    return (
        <body className="login">
          <MDBContainer fluid>
            <MDBRow className="d-flex justify-content-center align-items-center h-100">
              <MDBCol col="12">
                <MDBCard
                  className="bg-dark text-white my-5 mx-auto"
                  style={{ borderRadius: "1rem", maxWidth: "400px" }}
                >
                  <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                    <h2 className="fw-bold mb-2 text-uppercase">Cadastro</h2>
                    <p className="text-white-50 mb-5">
                      Crie uma conta ou faça login
                    </p>
    
                    <MDBInput
                      className="text-light"
                      wrapperClass="mb-4 mx-5 w-100"
                      labelClass="text-white"
                      label="Endereço de E-mail"
                      id="formControlLg"
                      type="email"
                      size="lg"
                      name="email"
                      onChange={handleChangeValues}
                    />
                    <MDBInput
                      className="text-light"
                      wrapperClass="mb-4 mx-5 w-100"
                      labelClass="text-white"
                      label="Senha"
                      id="formControlLg"
                      type="password"
                      size="lg"
                      name="senha"
                      onChange={handleChangeValues}
                    />
                    <MDBInput
                      className="text-light"
                      wrapperClass="mb-4 mx-5 w-100"
                      labelClass="text-white"
                      label="Repita a senha"
                      id="formControlLg"
                      type="password"
                      size="lg"
                      name="senha2"
                      onChange={handleChangeValues}
                    />

                    <div className="captcha">
                      <div className="info">{captcha}</div>
                      <input
                        type="text" 
                        className="res" 
                        name="rcaptcha" 
                        onChange={handleChangeValues}
                        placeholder="Digite caracteres acima"
                      />
                    </div>           
    
                    <MDBBtn
                      outline
                      className="mx-2 px-5"
                      color="white"
                      size="lg"
                      onClick={SignUp}
                    >
                      Criar conta
                    </MDBBtn>
    
                    <div>
                      <br />
                      <p className="mb-0">
                        Senha no mínimo 5 caracteres{" "}
                      </p>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </body>
    );
}

export default Cadastro