// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json())
const port = 4000
const jwt = require('jsonwebtoken')


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


let refreashTokens = []

app.post('/login',(request, res) => {
 const username = request.body.username
const user = {name :username}
const access_token = genrateAccessToken(user)
const refreash_token = jwt.sign(user,'d102b8be68215b36b5e357a39a67074b42d4c896b7894f0dd2f60ec0a76287d82f802d30468f3b1e5571dae553aa0e9156454af78772a6976ef63420689cd64d',)
refreashTokens.push(refreash_token)
res.json({accessToken : access_token, refreashToken:refreash_token})
})

app.post('/token',(req,res) => {
const refreashToken = req.body.token
if(refreashToken == null ) return res.sendStatus(401)
if(!refreashTokens.includes(refreashToken)) return res.sendStatus(403)
jwt.verify(refreashToken,'d102b8be68215b36b5e357a39a67074b42d4c896b7894f0dd2f60ec0a76287d82f802d30468f3b1e5571dae553aa0e9156454af78772a6976ef63420689cd64d',(err,user)=>{

    if(err)        return res.sendStatus(403)
    const accessToken = genrateAccessToken({name : user.name})
    res.json({accessToken: accessToken})
})

})

app.delete('/logout',(req,res)=>{
    refreashTokens = refreashTokens.filter(token =>token !== req.body.token)
    res.sendStatus(204)
})


function genrateAccessToken(user){
 return jwt.sign(user,'d5b649888bb200f6ed5b4225ed4f7ef421a9ea8df2fce570bd4029c2c051e07422e1d053294da1a4c021f1d9aba8dc906e653a25d14e2681cadca6195be9805d',{expiresIn:'15s'})
}

// app.use('/v1', require('./routes/v1'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})