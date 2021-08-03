const router = require("express").Router()
const {Houses, Category, User} = require("../models")

router.get('/', (req, res, next)=>{
    Category.findAll()
    .then((propiedades)=>{
        res.status(200).send(propiedades)
    })
    .catch(err => next(err))
})

router.post('/create', (req, res, next)=>{
    Category.create(req.body)
    .then((catCreada)=>{
        res.status(201).send(catCreada)
    })
    .catch(err => next(err))
})

router.post('/link',(req, res, next)=>{
    const propiedadId = req.body.id
    const categoria = req.body.category

    Houses.findByPk(propiedadId)
    .then(casa => {
        Category.findAll({where: {name: categoria }})
        .then(categ =>{
            casa.addCategory(categ[0])
            .then(respuesta=> res.send(respuesta))
        })
    })
    .catch(err => next(err))
})

router.get('/:category', (req, res, next)=>{
    const category = req.params.category

    Houses.findAll({
      include: [
        {
          model: Category,
        //   model: User,
          where: { name: category }
        },
        {
            model: User,
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

router.delete('/link', (req, res, next)=>{
    const propiedadId = req.body.id
    const categoria = req.body.category

    Houses.findByPk(propiedadId)
    .then(house => {
        Category.findByPk(categoria)
        .then(category =>{
            category.removeUser(house)
            .then(() => res.status(201).send("deslinkeado"))
        })
    })
    .catch(err => next(err))
})

module.exports = router