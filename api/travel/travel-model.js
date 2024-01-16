const db = require("../../data/db-config");

async function getCountrys(){
    return await db('country')
}

async function createCountry(country) {
  const [id] = await db("country").insert(country);
  return db("country").where("country_id", id).first();
}

async function deleteCountry(id) {
    const country= await db('country').where("country_id", id).first()
    await db('country').where('country_id', id).del()
    return country
}
module.exports = {
    getCountrys,
  createCountry,
  deleteCountry,
};
