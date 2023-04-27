
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// const redisClient = require('./redisClient')


app.use(bodyParser.json())
const port = 3000
const jwt = require('jsonwebtoken')

// redisClient.set
// app.get('/', authenticateToken,(req, res) => {
//   res.send('Hello World!')
// })

// function authenticateToken(req,res,next){
//     const authHeader = req.headers['authorization']
//     console.log(req.headers['authorization'],'req.headers')
//     // const token = authHeader && authHeader.split(' ')['1']
//     const token = authHeader
//     if (token== null){
//         return res.sendStatus(401)
//     }
//     jwt.verify(token,'d5b649888bb200f6ed5b4225ed4f7ef421a9ea8df2fce570bd4029c2c051e07422e1d053294da1a4c021f1d9aba8dc906e653a25d14e2681cadca6195be9805d',(err,user)=>{
//         if(err) return res.sendStatus(403)
//         req.user = user
//         next()
//     })

// }



app.use('/v1', require('./routes/v1'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get("/", (req,res)=>{
  res.send("Hello BE .......")
})