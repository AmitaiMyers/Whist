// const express = require("express")
// const app = express()
//
// const path = require("path")
// const http = require("http")
// const {Server} = require("socket.io")
//
// const server = http.createServer(app)
// const io = new Server(server)
//
// // app.use(express.static('public'))
// app.use(express.static(path.resolve("")))
//
// app.get("/",(req,res)=>{
//     return res.sendFile(__dirname+ "/index.html")
// })
//
// server.listen(3000,()=>{
//     console.log("prot is connected you crazy fucking genuis progremer you are, look at you sucssed")
// })

const express = require('express')
const app = express()

// socket.io setup
const http = require('http')
const server = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(server)

const {resolve} = require("path");
const port = 3000
app.use(express.static(resolve("")))
// app.use(express.static("public"))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

io.on('connection',(socket)=>{
    console.log('a user has connected')
})

server.listen(port,()=>{
    console.log(`app listing on port ${port}`)
})
