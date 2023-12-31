import * as dotenv from "dotenv"
import UsuariosModel from "../Models/UsuariosModel.js"

dotenv.config()

class AuthController {
    
    async VerifyLogin(req, res) {
        try {
            const model = new UsuariosModel()
            const data = await model.findLogin(req.body.email, req.body.senha)
    
            if(data[0] !== undefined) {
                res.status(200).json({
                    message: 'Login realizado com sucesso',
                })
            } else {
                res.status(401).json({
                    message: "Login ou senha inválido"
                })
            }
        } catch(e) {
            console.log(e)
            res.status(500).json({
                message: error.message
            })
        }
    }
}

export default AuthController