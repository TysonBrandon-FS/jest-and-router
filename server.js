const http = require("http");
require("dotenv").config()
const app = require("./app/app")

const server = http.createServer(app)

server.listen(process.env.PORT, () => {
    console.log("Listening on Port: ", process.env.PORT)
})