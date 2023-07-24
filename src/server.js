const express = require("express")
const app = express()
const migrationsRun = require("./database/sqlite/migrations")

const PORT = 3333

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))

app.get("/", (request, response) => {
  response.send("Hello World")
})