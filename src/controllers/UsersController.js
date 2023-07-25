const { hash } = require("bcryptjs")
const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body
    const database = await sqliteConnection()
    const hashedPassword = await hash(password, 8)

    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if (checkUserExists) {
      throw new AppError("Este e-mail já está em uso.")
    }

    await database.run("INSERT INTO users (name, email, password) VALUES (?,?,?)", [name, email, hashedPassword])
    
    return response.status(202).json()
  }

  async update(request, response) {
    const {name, email, password} = request.body
    const {id} = request.params
    const database = await sqliteConnection()
    
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id])

    if (!user){
      throw new AppError("Usuário não encontrado")
    }

  
   

  }


}

module.exports = UsersController
