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

router.get('/:id', (req, res, next)=>{
    const userID = req.params.id

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

router.delete('/:user/:house', (req, res, next)=>{
    const LoggedUserId = req.params.user;
    const houseId = req.params.house;

    User.findByPk(LoggedUserId)
    .then(user => {
        Houses.findByPk(houseId)
        .then(house =>{
            house.removeUser(user)
            .then(() => res.status(201).send("eliminado"))
        })
        .catch(err => next(err))
    })
    .catch(err => next(err))
})

module.exports = router