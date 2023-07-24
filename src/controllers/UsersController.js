const {hash} = require("bcryptjs")
const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")

class UsersController {
  async create(request, response){
    const {name, email, password} = request.body
    const database = await sqliteConnection()
    const hashedPassword = await hash(password,8)

  }
  

}

module.exports = UsersController