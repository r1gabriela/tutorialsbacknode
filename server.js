
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./models')
require('./controller/tutorial.controller')(app);

db.sequelize.sync({ force: true}).then(() => {
  console.log('Drop and re-sync db')
})
app.use(cors)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

