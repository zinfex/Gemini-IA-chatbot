import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import "./Login.css"
import axios from 'axios';

function Login() {

    // function SignIn() {
    //     try {
            
    //     } catch (error) {
            
    //     }
    // }

    // function SignUp() {
    //     try {
            
    //     } catch (error) {
            
    //     }
    // }

    return(
        <body className="login">
            <MDBContainer fluid>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                        <p className="text-white-50 mb-5">Entre na sua conta ou crie uma</p>

                        <MDBInput  className='text-light' wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Endereço de E-mail' id='formControlLg' type='email' size="lg"/>
                        <MDBInput className='text-light' wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Senha' id='formControlLg' type='password' size="lg"/>

                        <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Esqueceu a senha?</a></p>
                        <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>Entrar</MDBBtn>

                        <div className='d-flex flex-row mt-3 mb-5'>
                            <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                            <MDBIcon fab icon='facebook-f' size="lg"/>
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                            <MDBIcon fab icon='twitter' size="lg"/>
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                            <MDBIcon fab icon='google' size="lg"/>
                            </MDBBtn>
                        </div>

                        <div>
                            <p className="mb-0">Não tem uma conta? <a href="#!" class="text-white-50 fw-bold">Criar uma conta</a></p>

                        </div>
                        </MDBCardBody>
                    </MDBCard>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </body>
    )
}

export default Login