
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./model')

app.use(cors)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

db.sequelize.sync();