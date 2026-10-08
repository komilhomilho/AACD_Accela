import express from 'express'
import rotas from './Routes/Routers.js'

const log = console.log
const app = express()
const port = 3000
app.use(express.json())
app.use('', rotas)

app.listen(port, () =>{
    log(`http://localhost:3000`)
})
