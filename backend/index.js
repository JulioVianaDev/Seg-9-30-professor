// bibliotecas
const express = require('express')
const cors = require('cors')

//app
const app = express()
app.use(cors())

porta = 3001;
app.listen(porta,()=>{
  console.log("api rodando")
})