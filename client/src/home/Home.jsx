import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return(
        <>
            <div className="header">
                <div className="btns">
                    <Link to='/'><span>Conheça a Gemini</span></Link>
                    <Link to='/'><span>Como usar</span></Link>
                    <Link to='/cadastrar'><span>Cadastrar</span></Link>
                </div>
            </div>

            <div className="container">
                <h1>Bem vindo ao <br /> GEMINI</h1>

                <Link to='/login'><button className='btn entrar btn-primary'>Entrar</button></Link>
            </div>
        </>
    )
}

export default Home;