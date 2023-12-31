import React, {useState} from 'react';
import { FaRegPaperPlane } from "react-icons/fa";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import './Home.css'
import axios from 'axios'

function Home() {
  const [respostaIA, setResposaIA] = useState('Olá, qual sua dúvida?')
  const [values, setValues] = useState('');
  const [formData, setFormData] = useState()

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  async function handleButton() {
    try {
      setFormData()
      setResposaIA('...')

      if(values.texto == undefined) {
        setResposaIA('Como posso ajudar?')
      } else {
          await axios.post('http://localhost:3001/gemini', {
            texto: values.texto
          }).then((response) => {
            console.log(response)
            
            axios.get("http://localhost:3001/gemini").then(
              setResposaIA(response.data.resposta)
            )
          })
      }
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <body className='home'>
      <MDBContainer fluid className="bg-dark" style={{ backgroundColor: "#eee", height: "100%"}}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="6">
          <MDBCard id="chat2" style={{ borderRadius: "15px", height: "100vh"}} className='bg-dark text-light'>
            <MDBCardHeader className="d-flex justify-content-between align-items-center p-3">
              <h5 className="mb-0">Gemini chatbot</h5>
              <MDBBtn color="primary" size="sm" rippleColor="dark">
                Baixar o APP
              </MDBBtn>
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
                      style={{ backgroundColor: "#f5f6f7" }}
                    >
                    {respostaIA}
                    
                    </p>
                  </div>
                </div>

               
              </MDBCardBody>
            
            <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                alt="avatar 3"
                style={{ width: "45px", height: "100%" }}
              />

              <input
                type="text"
                class="form-control form-control-lg bg-dark text-light"
                id="exampleFormControlInput1"
                placeholder="Digite a mensagem"
                name='texto'
                onChange={handleChangeValues}
                value={formData}
              ></input>

              <a className="ms-1 text-muted" href="#!">
                <MDBIcon fas icon="paperclip" />
              </a>
              <a className="ms-3 text-muted" href="#!">
                <MDBIcon fas icon="smile" />
              </a>
              <a className="ms-3" href="#!">
                <MDBIcon fas icon="paper-plane" />
              </a>
              <button className='text-light btn' type='submit' style={{fontSize: "20px"}} onClick={handleButton}><FaRegPaperPlane /></button>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </body>
  )
}

export default Home