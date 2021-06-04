require('dotenv').config()
const express = require('express')
const cors = require('cors')

const server = express()

const PORT = process.env.PORT || 9000

server.use(express.json())
server.use(cors())

server.get('/api/hello', (req, res)=>{
    res.json({ message: "api is up!"})
})

server.use('e', (req, res) => {
    res.send(`<p>Hello World</p>`)
})

server.use((err, req, res, next) => {
    res.status(500).json({ 
        message: err.message,
        stack: err.stack,
    })
})

server.listen(PORT, () => {
    console.log('listening to', PORT)
})

