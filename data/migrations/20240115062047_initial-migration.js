
exports.up = async function(knex) {
  await knex.schema 
  .createTable('country', table =>{
    table.increments("country_id")
    table.text('country').notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('country')
};

