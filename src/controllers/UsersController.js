const { hash } = require("bcryptjs")
const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body
    // const database = await sqliteConnection()
    // const hashedPassword = await hash(password, 8)

    // const checkUserExists = await database.get(
    //   "SELECT * FROM users WHERE email = (?)",
    //   [email]
    // )
    response.json({ name, email, password })
  }

  // if(checkUserExists) {
  //   throw new AppError("Este e-mail já está em uso.")
  // }
}

module.exports = UsersController
