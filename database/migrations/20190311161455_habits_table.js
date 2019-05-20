exports.up = function(knex, Promise) {
  return knex.schema.createTable('habits', tbl => {
    tbl.increments();

    tbl.string('habitTitle');
    tbl.boolean('completed').defaultTo(false);
    tbl.integer('completionPoints').defaultTo(0);
    tbl
      .integer('userId')
      .notNullable()
      .references('id')
      .inTable('users');

    
    tbl
      .integer('categoryId')
      .notNullable()
      .foreign('categoryId')
      .references('id')
      .inTable('category');
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('habits');
};
