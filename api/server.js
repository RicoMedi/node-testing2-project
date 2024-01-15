const express= require('express')
const travelRouter= require('./travel/travel-router')

const server= express()

server.use(express.json())

server.use('/api/travel', travelRouter)

server.use('*', (req, res)=>{
    res.json({api: 'up'})
})

module.exports = server