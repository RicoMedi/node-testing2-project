const request = require("supertest")
const db = require("../../data/db-config")
const server = require('../server.js')
const Country = require('./travel-model.js')

const country1= {country: "colombia"}
const country2= {country: "panama"}

beforeAll(async ()=>{
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async ()=>{
    await db("country").truncate()
})

afterAll(async ()=>{
    await db.destroy()
})
it('correct env variable', ()=>{
    expect(process.env.NODE_ENV).toBe('testing')
})

describe('country model functions', ()=>{
    describe('create a country', ()=>{
        it('adds a country to the db', async ()=>{
            let countrys
            await Country.createCountry(country1)
            countrys= await db("country")
            expect(countrys).toHaveLength(1)

            await Country.createCountry(country2)
            countrys= await db("country")
            expect(countrys).toHaveLength(2)
        })
    })
})