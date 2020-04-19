const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const login = require('./login.js')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req,res) => {
  const input = req.body  
  const isUser = login(input)
  if(isUser){
    res.render('login', {name: isUser})
  } 
  else{
    res.render('index', {message: 'Account or password is wrong'})
  }
})

app.listen(3000, () => {
  console.log('app is listening!')
})