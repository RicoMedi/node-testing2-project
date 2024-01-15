const db= require('../../data/db-config')

function getTraveId(travel_id) {
    return Promise.resolve(`awesome place to travel to with id ${travel_id}`)
}

async function createCountry(country){
const [id]=  await db('country').insert(country)

return db('country').where('country_id', id).first()
}

module.exports = {
    getTraveId,
    createCountry
}