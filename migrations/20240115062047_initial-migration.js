
exports.up = async function(knex) {
  await knex.schema 
  .createTable('country', table =>{
    table.increments()
  })
};

exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('country')
};
