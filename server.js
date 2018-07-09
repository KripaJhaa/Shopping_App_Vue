const express = require('express')
const path = require('path')
const User = require('./db').User
const session = require('express-session')
const passport = require('./passport')



const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//
app.use(session({
    secret: 'some very very secret thing',
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())


app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require('./common_routes').route)
app.use('/api', require('./routes/api').route)


app.listen(8080, () => console.log('Server started at http://localhost:8080'))