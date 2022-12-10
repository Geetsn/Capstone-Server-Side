/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('order_product').del()
  await knex('order_product').insert([
    {
      id: '8ec47c3c-2e8c-4518-817f-b8780667b9ac',
      order_id: 'b008d7c5-8f21-4448-939d-c28455b4bc67',
      product_id:'8ec47c3c-2e8c-4518-817f-b8780667b9ac',
      product_qty: 1,
      product_price: 20
    },
   
  ]);
};
