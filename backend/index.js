// bibliotecas
const express = require('express')
const cors = require('cors')
const oiRoute = require('./routes/oi')
const noteRoutes = require('./routes/NoteRoutes')
//app
const app = express()
app.use(cors())
app.use(express.json())
porta = 3001;

app.use("/",oiRoute);
app.use("/notes",noteRoutes);
app.listen(porta,()=>{
  console.log("api rodando")
})