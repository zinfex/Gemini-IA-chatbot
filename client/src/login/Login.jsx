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
import "./Login.css";
import axios from "axios";

function Login() {
  const [values, setValues] = useState();
  const [captcha, setCaptcha] = useState(Math.random().toString(36).substring(2, 8));

  async function SignIn() {

    if(values.rcaptcha == captcha) {
      try {
        await axios
          .post("http://localhost:3001/usuarios/login", {
            email: values.email,
            senha: values.senha,
          })
          .then((res) => {
            localStorage.setItem("token", res.data.data.token);
            location.href = "/gemini";
          });
      } catch (error) {
        alert("Email ou senha incorretos");
        console.log(error);
      }
    } else {
      alert('Captcha incorreto')
    }

  }

  function SignUp() {
    try {
      location.href = "/cadastrar";
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  return (
    <body className="login">

      <img className='iaimg2' src="https://www.hardware.com.br/static/wp/2023/04/03/ameca_transparent_1-e1638371642651-686x686-1.png?fm=png&ixlib=php-3.3.1" alt="" />

      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-dark text-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "400px" }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">
                  Entre na sua conta ou crie uma
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
                <p className="small pb-lg-2">
                  <a class="text-white-50" href="#!">
                    Esqueceu a senha?
                  </a>
                </p>

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
                  onClick={SignIn}
                >
                  Entrar
                </MDBBtn>

                <div>
                  <br />
                  <p className="mb-0">
                    Não tem uma conta?{" "}
                    <a href="#!" class="text-white-50 fw-bold" onClick={SignUp}>
                      Criar uma conta
                    </a>
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

export default Login;
