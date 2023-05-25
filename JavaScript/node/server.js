console.log('May Node be with you')
const bodyParser = require('body-parser')
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()

MongoClient.connect('mongodb-connection-string', (err, client) => {
    // ... do something here
  })

app.listen(3000, function() {
    console.log('listening on 3000')
})

app.use(bodyParser.urlencoded({ extended: true}))

app.get(`/`, (req, res) =>{
    res.sendFile('/Users/johnhealy/Desktop/GitHub/Star-Quotes/HTML/index.html')
})

app.post(`/quotes`, (req, res) =>{
    console.log(req.body)
})