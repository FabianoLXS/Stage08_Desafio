const {hash} = require("bcryptjs")
const hashedPassword = await hash(password,8)

class UsersController {


}

module.exports = UsersController