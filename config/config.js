require('dotenv').config()

const PORT = process.env.PORT

const MDB_URI = process.env.NODE_ENV === 'test' 
  ? process.env.TEST_MDB_URI
  : process.env.MDB_URI

module.exports = {
  MDB_URI,
  PORT
}