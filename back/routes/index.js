const router = require("express").Router()
const propiedades = require('./propiedades')
const user = require('./user')
const category = require('./category')
const find = require('./find')
const admin = require('./admin')
const favorites = require('./favorites')

router.use('/propiedades', propiedades)
router.use('/category', category)
router.use('/find', find)
router.use('/user', user)
router.use('/admin', admin)
router.use('/favorites', favorites)

router.get("/me", (req, res) => {
    if (!req.user) res.send("Unauthorized")
    else res.send(req.user)
})

module.exports = router