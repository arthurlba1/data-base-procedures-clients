const express = require('express')
const app = express()
const cors = require('cors')
const sql = require('mssql')
const { request } = require('express')

app.use(cors())
app.use(express.json())
app.listen(process.env.PORT || 3000)

require('dotenv').config()
const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: 'localhost',
  port: 1433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    trustServerCertificate: true
  }
}

sql.on('error', err => {
  console.log(err.message)
})

app.get('/getCustomers', function (req, res){
  sql
  .connect(sqlConfig)
  .then((pool) => {
    return pool
    .request()
    .query("select CustomerID, CompanyName, ContactName, ContactTitle, Country, Phone from Customers")
  })
  .then((result) => {
    res.json(result.recordsets)
    sql.close()
  })
  .catch((err) => {
    console.log(err.message)
    sql.close()
  })
})

app.post('/createCustomer', function (req, res){
  var data = (req.body)
  let createUser = "insert into Customers (CustomerID, CompanyName) values ('"+req.body.CustomerID+"', '"+req.body.CompanyName+"')"
  sql
  .connect(sqlConfig)
  .then((pool) => {
    return pool
    .request()
    .query(createUser)
  })
  .then((result) => {
    res.json(result.recordsets)
    sql.close()
  })
  .catch((err) => {
    console.log(err.message)
    sql.close()
  })
})

app.delete('/deleteCustomer/:id', function (req, res){
  sql
  .connect(sqlConfig)
  .then((pool) => {
    return pool
    .request()
    .input('customerId', sql.NVarChar, req.params.id)
    .query("delete from Customers where CustomerID = @customerId")
  })
  .then((result) => {
    res.json(result.recordsets)
    sql.close()
  })
  .catch((err) => {
    console.log(err.message)
    sql.close()
  })
})

