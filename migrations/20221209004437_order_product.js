/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {order_product
  return knex.schema.createTable('', (table)=>{
    table.uuid('id').primary();
    table
    .uuid('order_id')
    .references('order.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    table
    .uuid('product_id')
    .references('products.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    table.integer('product_qty').notNullable();
    table.integer('product_price').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('order_product');
};
