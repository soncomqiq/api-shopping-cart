const express = require('express')
const db = require('./models')
const bodyParser = require('body-parser');
const app = express()
const cors = require('cors')

app.use(cors())

db.sequelize.sync({ force: false }).then(() => {
  app.get('/', (req, res) => {
    res.send('hello')
  })

  app.get('/product', async (req, res) => {
    let productList = await db.Product.findAll()
    res.json(productList)
  })

  app.get('/product-category', async (req, res) => {
    let productCategoryList = await db.ProductCategory.findAll()
    res.json(productCategoryList)
  })

  app.listen(3030, () =>
    console.log("Server is running on http://localhost:3030."))
})