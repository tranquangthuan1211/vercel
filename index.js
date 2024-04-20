const express = require('express')
const app = express()
const port = 3000
const route = require('./Route/index')

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})