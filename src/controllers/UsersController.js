const {hash} = require("bcryptjs")
const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")



const hashedPassword = await hash(password,8)

class UsersController {


}

module.exports = UsersController