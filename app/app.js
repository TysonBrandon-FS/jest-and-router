const express = require("express");
const app = express()
const router = require("./routes/")

// for post
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({
        message: "GET - root",
        metadata: {
            hostname: req.hostname, 
            method: req.method
        }
    })
})


// localhost:3000/api
app.use("/api", router)




module.exports = app;