const router = require("express").Router()
const {User, Houses} = require("../models")


router.put('/', (req, res, next)=>{
    const LoggedUserId = req.body.userId;
    const houseId = req.body.houseId;

    User.findByPk(LoggedUserId)
    .then(user => {
        Houses.findByPk(houseId)
        .then(house =>{
            house.addUser(user)
            .then(respuesta => res.send(respuesta))
        })
    })
    .catch(err => next(err))
})

router.get('/', (req, res, next)=>{
    const userID = req.body.userId

    Houses.findAll({
      include: [
        {
          model: User,
          where: { id: userID }
        }
      ]
    })
    .then(products => {
        res.status(200).send(products)
    })
        .catch(err => {
        next(err)
    })
})

router.delete('/', (req, res, next)=>{
    const LoggedUserId = req.body.userId;
    const houseId = req.body.houseId;

    User.findByPk(LoggedUserId)
    .then(user => {
        Houses.findByPk(houseId)
        .then(house =>{
            house.removeUser(user)
            .then(() => res.status(201).send("eliminado"))
        })
    })
    .catch(err => next(err))
})

module.exports = router