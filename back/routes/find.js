const router = require("express").Router()
const {Houses, User} = require("../models")


router.get('/:place', (req, res, next)=>{
    const location = req.params.place
    Houses.findAll({
        include: [
          {
            model: User,
        }
        ],
        where: { location: location }
    })
    .then(propiedades => {
        res.status(200).send(propiedades)
    })
    .catch(err => {
        next(err)
    })
})

module.exports = router