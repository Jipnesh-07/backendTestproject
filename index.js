const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT


app.get('/', (req,res) => {
    res.send('hello')
})

app.get('/login', (req,res) => {
    res.send("Login Sucess")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})