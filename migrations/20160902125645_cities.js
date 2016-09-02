
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cities', (table) => {
    table.increments();
    table.string('name');
    table.integer('population');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cities')

};
