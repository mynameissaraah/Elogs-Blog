const mongoose = require('mongoose');
require("dotenv").config();

const MDB_URL = process.env.MDB_URL

function connectToMongoDB() {
    mongoose.connect(MDB_URL)

    mongoose.connection.on('connected', ()=>{
        console.log("Connected to Mongodb successfully")
    })
}

mongoose.connection.on('error', (err)=>{
    console.log(err)
    console.log('Error connecting to Mongodb')
})
module.exports = {connectToMongoDB }