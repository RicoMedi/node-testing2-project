const router = require('express').Router()
const Travel= require('./travel-model')


router.get('/', (req, res, next)=>{
    Travel.getCountrys()
    .then(result =>{
        res.status(200).json(result)
    }).catch(next)
})

router.delete('/:id', async(req, res)=>{
   const id= req.params.id
   const delCountry= await Travel.deleteCountry(id)
   res.status(200).json(delCountry)
})


router.use((err, req, res, next) =>{//eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the travel router', 
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router