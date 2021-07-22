const router = require("express").Router()
const propiedades = require('./propiedades')
const user = require('./user')
const category = require('./category')
const find = require('./find')

router.use('/propiedades', propiedades)
router.use('/category', category)
router.use('/find', find)
router.use('/user', user)

router.get("/me", (req, res) => {
    if (!req.user) res.sendStatus(401)
    else res.send(req.user)
})

module.exports = router