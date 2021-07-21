const router = require("express").Router()
const {Houses} = require("../models")

router.get('/', (req, res, next)=>{
    Houses.findAll()
    .then((propiedades)=>{
        res.status(200).send(propiedades)
    })
    .catch(err => next(err))
})

router.get('/:id', (req, res, next)=>{
    Houses.findByPk(req.params.id)
    .then((casa)=>{
        res.status(200).send(casa)
    })
    .catch(err => next(err))
})

router.post('/create', (req, res, next)=>{
    Houses.create(req.body)
    .then((casaCreada)=>{
        res.status(201).send(casaCreada)
    })
    .catch(err => next(err))
})

router.put('/edit/:id', (req, res, next)=>{
    const id = req.params.id
    Houses.update(req.body, { where: { id } })
    .then((propiedadUpdated)=>{
        res.status(200).send(propiedadUpdated)
    })
    .catch(err => next(err))
})

router.delete('/delete/:id', (req, res, next)=>{
    const id = req.params.id
    Houses.destroy({ where: { id } })
    .then(
        Houses.findAll()
        .then(propiedades => res.status(200).send(propiedades))
    )
    .catch(err => next(err))
})

router.get('/find', (req, res, next)=>{
    const comp = req.body;
    
    Houses.findAll({where: comp})
    .then((propiedades)=>{
        res.status(200).send(propiedades)
    })
    .catch(err => next(err))
})

module.exports = router