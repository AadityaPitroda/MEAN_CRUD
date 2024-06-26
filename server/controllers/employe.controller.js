// const express = require('express')
// const router = express.Router()

// const Employee = require('../models/employee.model')
// const { generateCrudMethods } = require('../services')
// const employeeCrud = generateCrudMethods(Employee)
// const { validateDbId, raiseRecord404Error } = require('../middlewares');


// router.get('/', (req, res, next) => {
//     employeeCrud.getAll()
//         .then(data => res.send(data))
//         .catch(err => next(err))
// })

// router.get('/:id', validateDbId, (req, res, next) => {
//     employeeCrud.getById(req.params.id)
//         .then(data => {
//             if (data) res.send(data)
//             else raiseRecord404Error(req, res)
//         })
//         .catch(err => next(err))
// })

// router.post('/', (req, res, next) => {
//     employeeCrud.create(req.body)
//         .then(data => res.status(201).json(data))
//         .catch(err => next(err))
// })

// router.put('/:id', validateDbId, (req, res) => {
//     employeeCrud.update(req.params.id, req.body)
//         .then(data => {
//             if (data) res.send(data)
//             else raiseRecord404Error(req, res)
//         })
//         .catch(err => next(err))
// })

// router.delete('/:id', validateDbId, (req, res) => {
//     employeeCrud.delete(req.params.id)
//         .then(data => {
//             if (data) res.send(data)
//             else raiseRecord404Error(req, res)
//         })
//         .catch(err => next(err))
// })


// module.exports = router











































// Old Code






const express = require('express')
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId

const Employee = require('../models/employe.model')

const { generateCrudMethods } = require('../services')
const employeeCrud = generateCrudMethods(Employee)
const { validateDbId, raiseRecord404Error } = require('../middlewares')

router.get('/',(req,res,next) => {
    employeeCrud.getAll()
        .then(data => res.send(data))
        .catch(err => next(err))
} )

router.get('/:id', validateDbId ,(req,res,next) => {
    employeeCrud.getById(req.params.id)
        .then(data => {
            if(data)
                res.send(data)
            else
            raiseRecord404Error(req, res)
        }) 
        .catch(err => next(err))
} )

router.post('/',(req,res,next) => {
    const newRecord = {
        fullname:req.body.fullname,
        position:req.body.position,
        location:req.body.location,
        salary:req.body.salary,
    }


    employeeCrud.create(newRecord)
        .then(data => res.status(201).json(data))
        .catch(err => next(err))

    // console.log(req.body);

} )

router.put('/:id', validateDbId, (req, res) => {

    const updateRecord = {
        fullname:req.body.fullname,
        position:req.body.position,
        location:req.body.location,
        salary:req.body.salary,
    }

    employeeCrud.update(req.params.id, updateRecord)
    .then(data => {
        if(data)
            res.send(data)
        else
        raiseRecord404Error(req, res)
    }) 
    .catch(err => next(err))
} )



router.delete('/:id', validateDbId, (req, res) => {
    employeeCrud.delete(req.params.id)
    .then(data => {
        if(data)
            res.send(data)
        else
        raiseRecord404Error(req, res)
    }) 
    .catch(err => next(err))
} )

module.exports = router
