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
    .execute('get_all_customers')
  })
  .then((result) => {
    res.json(result.recordsets)
    res.status(200)
    sql.close()
  })
  .catch((err) => {
    console.log(err.message)
    sql.close()
  })
})

app.post('/createCustomer', function (req, res){
  let createUser =
  `
    INSERT INTO Customers (
      CustomerID,
      CompanyName,
      ContactName,
      ContactTitle,
      Address,
      City,
      Region,
      PostalCode,
      Country,
      Phone,
      Fax
    )
    VALUES (
      '${req.body.CustomerID}',
      '${req.body.CompanyName}',
      '${req.body.ContactName}',
      '${req.body.ContactTitle}',
      '${req.body.Address}',
      '${req.body.City}',
      '${req.body.Region}',
      '${req.body.PostalCode}',
      '${req.body.Country}',
      '${req.body.Phone}',
      '${req.body.Fax}'
    )
  `
  sql
  .connect(sqlConfig)
  .then((pool) => {
    return pool
    .request()
    .query(createUser)
  })
  .then((result) => {
    res.status(200)
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
    .input('CustomerID', sql.NVarChar, req.params.id)
    .execute('delete_customer')
  })
  .then((result) => {
    res.status(200)
    sql.close()
  })
  .catch((err) => {
    console.log(err.message)
    sql.close()
  })
})


app.post('/updateCustomer', function (req, res){
  let updateCustomer =
  `
    UPDATE Customers
    SET
      CompanyName = '${req.body.CompanyName}',
      ContactName = '${req.body.ContactName}',
      ContactTitle = '${req.body.ContactTitle}',
      Address = '${req.body.Address}',
      City = '${req.body.City}',
      Region = '${req.body.Region}',
      PostalCode = '${req.body.PostalCode}',
      Country = '${req.body.Country}',
      Phone = '${req.body.Phone}',
      Fax = '${req.body.Fax}'
    WHERE
      Customers.CustomerID = '${req.body.CustomerID}'
  `
  sql
  .connect(sqlConfig)
  .then((pool) => {
    return pool
    .request()
    .query(updateCustomer)
  })
  .then((result) => {
    res.status(200)
    sql.close()
  })
  .catch((err) => {
    console.log(err.message)
    sql.close()
  })
})

app.post('/makeOrder', function (req, res) {
  sql
  .connect(sqlConfig)
  .then((pool) => {
    return pool
    .request()
    .input('CustomerID', sql.NChar, req.body.CustomerID)
    .input('EmployeeID', sql.Int, parseInt(req.body.CustomerID))
    .input('OrderDate', sql.DateTime, req.body.OrderDate)
    .input('RequiredDate', sql.DateTime, req.body.RequiredDate)
    .input('ShippedDate', sql.DateTime, req.body.ShippedDate)
    .input('ShipVia', sql.Int, parseInt(req.body.ShipVia))
    .input('Freight', sql.Money, req.body.Freight)
    .input('ShipName', sql.NVarChar, req.body.ShipName)
    .input('ShipAddress', sql.NVarChar, req.body.ShipAddress)
    .input('ShipCity', sql.NVarChar, req.body.ShipCity)
    .input('ShipRegion', sql.NVarChar, req.body.ShipRegion)
    .input('ShipPostalCode', sql.NVarChar, req.body.ShipPostalCode)
    .input('ShipCountry', sql.NVarChar, req.body.ShipCountry)
    .execute('create_order')
  })
  .then((result) => {
    let orderId = result.recordset[0].OrderID
    res.json(result.recordsets)
    req.body.Products.forEach(
      function(currentValue) {
        sql
        .connect(sqlConfig)
        .then((pool) => {
          return pool
          .request()
          .input('OrderID', sql.Int, parseInt(orderId))
          .input('ProductID', sql.Int, parseInt(currentValue.ProductID))
          .input('UnitPrice', sql.Money, parseInt(currentValue.UnitPrice))
          .input('Quantity', sql.SmallInt, parseInt(currentValue.Quantity))
          .input('Discount', sql.Real, parseFloat(currentValue.Discount))
          .execute('connet_order_products')
        })
        .catch((err) => {
          console.log(err.message)
        })
      }
    )
  })
  .then(() => {
    res.status(200)
    sql.close()
  })
  .catch((err) => {
    console.log(err.message)
    sql.close()
  })

  
})

