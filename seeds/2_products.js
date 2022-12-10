/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      id: '78f823f4-8b96-4980-8e36-0cd513faa804',
      user_id: 'ac436c9a-b031-4758-bae5-1aa0800dad14',
      product_name:'sweater',
      product_image:'images/sweater3.jpeg',
      description:'knit and cozy',
      category:'women',
      color:'green',
      size: 2,
      quantity: 200,
      price:30
    },
    {
      id: '24092e15-7d9e-42c8-b424-fac856f0b414',
      user_id: 'ac436c9a-b031-4758-bae5-1aa0800dad14',
      product_name:'sweater',
      product_image:'images/sweater5.jpeg',
      description:'wool',
      category:'women',
      color:'blue',
      size: 4,
      quantity: 100,
      price: 35
    },
    {
      id: '8ec47c3c-2e8c-4518-817f-b8780667b9ac',
      user_id: 'ac436c9a-b031-4758-bae5-1aa0800dad14',
      product_name:'sweater',
      product_image:'images/sweater4.jpeg',
      description:'high neck',
      category:'women',
      color:'aqua',
      size: 2,
      quantity:150,
      price: 20
    }
    
  ]);
};
