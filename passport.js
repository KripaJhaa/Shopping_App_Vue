const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const {User} = require('./db')

passport.serializeUser((user, done) => {
    if (user && user.id) {
        return done(null, user.id)
    }
    done(new Error("User or User ID not found"))

})

passport.deserializeUser((userId, done) => {
    User.findOne({
        where: {id: userId}
    }).then((user) => {
        if (user) {
            done(null, user)
        } else {
            done (new Error("No such user found"))
        }
    }).catch((err) => done(err))
})

passport.use(new LocalStrategy((username, password, done) => {

    User.findOne({
        where: {username: username}
    }).then((user) => {

        if (!user) {
            return done(null, false, {message: 'Username does not exist'})
        }

        if (user.password !== password) {
            return done(null, false, { message: 'Password is wrong' })
        }
        console.log("Verification Done"+user)
        done(null, user)

    }).catch((err) => done(err))

}))

module.exports = passport