const express = require('express')
const app = express()
port = 3000
 
app.get('/', function (req, res) {
  res.send('Khoa1468')
})
 
app.listen(port, ()     => { 
    return console.log(`Tại http://localhost:${port}`)
})