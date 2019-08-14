const express = require('express')
const nunjucks = require('nunjucks')
const User = require('./db/db')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

// const users = ['Yuri Canuto', 'Priscila Canuto', 'Leon Canuto']

app.get('/', (req, res) => {
  User.find()
    .then((users) => {
      return res.render('list', { users })
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

app.post('/create', (req, res) => {
  // users.push(req.body.user)
  console.log(req.body.user)
  User.create({ name: req.body.user })

  res.redirect('/')
})

app.listen(3000)
