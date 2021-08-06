const router = require("express").Router()
const { User } = require("../models")

const isAdmin = (req, res, next) => {
  if (req.user.isAdmin) next()
  else res.sendStatus(401)
}

router.put("/edit/:id", isAdmin, (req, res, next)=>{
    User.findByPk(req.params.id)
    .then(user => {
      User.update({ isAdmin: !user.isAdmin },{
        where:{
          id:req.params.id
        }
      }).then(() => {
        res.status(200).send("Estado de admin cambiado")
      })
    })
    .catch(err => next(err))
})



router.delete("/:id", isAdmin, (req, res, next) => {
  console.log("delete")
    User.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.status(200).send("eliminado correctamente")
    })
})

module.exports = router