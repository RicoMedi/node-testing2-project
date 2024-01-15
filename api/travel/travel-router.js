const router = require('express').Router()
const Travel= require('./travel-model')


router.get('/:travel_id', (req, res, next)=>{
    Travel.getTraveId(req.params.travel_id)
    .then(resource =>{
        res.status(200).json(resource)
    }).catch(next)
})


router.use((err, req, res, next) =>{//eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the travel router', 
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router