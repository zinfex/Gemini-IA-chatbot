import knex from "../Config/Connect.js"; 
import { hash, compare } from 'bcrypt'

class UsuariosModel {
    async findLogin(email, senha) {
        try {
            const usuarioCrypt = await knex.select("senha").from("usuarios").where("email", email).first()
            const senhaValida = await compare(senha, usuarioCrypt.senha)

            if (senhaValida) {
                return await knex.select().from("usuarios").where({
                    email: email,
                    senha: usuarioCrypt.senha
                })
            }
        } catch (error) {
            console.log(e)
            throw new Error("Não foi possível encontrar o login")
        }
    }

    async findAll() {
        try {
            return await knex.select().from("usuarios")
        } catch(e) {
            console.log(e)
            throw new Error("Não foi possível encontrar os usuários")
        }
    }

    async findOne(id) {
        try {
            return await knex.select().from("usuarios").where("id", id)
        } catch (error) {
            console.log(error)
            throw new Error("Não foi possível encontrar o usuário")
        }
    }

    async create(data) {
        try {
            const email = await knex.select().from("usuarios").where("email", data.email)
            const senha = data.senha

            if((email.length == 0) && (senha.length >= 5)) {
                const dados = {
                    email: data.email,
                    senha: await hash(senha, 5)
                }
                return await knex.insert(dados).from("usuarios")
            }
        } catch (error) {
            console.log(error)
            throw new Error("não foi possível criar o usuário")
        }
    }

    async delete(id) {
        try {
            return await knex("usuarios").where("id", id).del()
        } catch (error) {
            console.log(error)
            throw new Error("Não foi possível deletar o usuário")
        }
    }
}

export default UsuariosModel