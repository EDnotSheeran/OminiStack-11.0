const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()

app.use(cors())
// app.use(cors({
//     origin: 'https://guitarblazze.com.br'
// }))
// diz que vamos receber o corpo das requisicoes em json 
app.use(express.json())
app.use(routes)

app.listen(3333)