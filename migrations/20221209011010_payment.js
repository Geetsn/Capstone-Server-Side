/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('payment', (table) =>{
    table.uuid('id').primary();
    table
    .uuid('user_id')
    .references('user.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    table.string('card_name');
    table.integer('card_number');
    table.string('expiration_date');
    table.integer('cvc');
    table.dateTime('payment_date');
    table.integer('amount');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('payment');
};
