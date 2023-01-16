/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('products', (table) =>{
    table.uuid('id').primary();
    table
    .uuid('user_id')
    .references('user.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    table.string('product_name').notNullable();
    table.string('product_image').default();
    table.string('description').notNullable();
    table.string('category').notNullable();
    table.string('color').notNullable();
    table.integer('size').notNullable();
    table.integer('quantity').notNullable();
    table.integer('price').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
