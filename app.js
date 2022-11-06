const express = require ("express");
const { connectToMongoDB } = require("./middleware/db");
require('dotenv').config()

const PORT=process.env.PORT
const app = express()

connectToMongoDB()

app.use(express.json())
app.get("/", (req, res) =>{
    res.status(400)
    res.send("Hello World!")
} )

app.listen(PORT, ()=> {
    console.log(`server started successfully at http://localhost:${PORT}`)
})

