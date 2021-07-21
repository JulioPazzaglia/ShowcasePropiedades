const express = require("express")
const app = express()
const db = require("./config/db")
const PORT = process.env.PORT || 3001
const passport = require("passport")
const sessions = require("express-session")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const localStrategy = require("passport-local").Strategy

const {User, Houses, Category} = require("./models")


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cookieParser())

app.use(sessions({ secret: "ecomerce", resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

passport.use(
  new localStrategy({ usernameField: "email", passwordField: "password" }, function (
    email,
    password,
    done
  ) {
    User.findOne({
      where: {
        email
      }
    })
      .then(user => {
        if (!user) {
          return done(null, false)
        }
        user.hash(password, user.salt).then(hash => {
          if (hash !== user.password) {
            return done(null, false)
          }
          done(null, user)
        })
      })
      .catch(done)
  })

)

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(function (id, done) {
  User.findByPk(id).then(user => done(null, user))
})

app.use("/api", require("./routes"))

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send(err)
})

db.sync({ force: false })
  .then(({ config }) => {
    console.log(`Successful database connection to => ${config.database}`)
    app.listen(PORT, () => console.log(`server listening at port ${PORT}`))
  })
  .catch(err => {
    console.log("DB sync failed", err)
})

module.exports = app