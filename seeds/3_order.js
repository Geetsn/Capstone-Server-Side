/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('order').del()
  await knex('order').insert([
    {
      id: 'b008d7c5-8f21-4448-939d-c28455b4bc67',
      user_id: '0612167c-2eef-4119-8e7c-ba34ee05db44'
    }
   
  ]);
};
