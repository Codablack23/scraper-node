const express = require('express')
const {handleApi,handleGetApi} = require('./controller/apiController')
const sequelize = require('./models/database')

const app = express()

app.set('view engine', 'ejs')
app.listen(5501)

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json({limit:'1mb'}))

sequelize.sync().then(() => {
    console.log('db has been created')
})


app.get('/', (req, res) => {
    res.render('home',{title:"Home"})
})
app.get('/api/',handleGetApi)
app.post('/api/',handleApi)
