/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('payment').del()
  await knex('payment').insert([
    {
      id: '9bf9ca4d-6c64-4137-99a8-acff1364e99f',
      user_id: '0612167c-2eef-4119-8e7c-ba34ee05db44',
      card_name: 'Bob Ho',
      card_number: 1234567891,
      expiration_date: '10/2026',
      cvc: 101,
      payment_date: new Date ('2022/02/02'),
      amount: 20
    }
  ]);
};
