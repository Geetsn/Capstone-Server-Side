/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    {
      id:'ac436c9a-b031-4758-bae5-1aa0800dad14',
      name:'Sam',
      last_name:'Hun',
      email:'sam.hun@universal.com',
      password:'123',
      is_admin:'true',
      phone:'+1 (888) 123 1234',
      address:'123 Robson Street',
      city:'vancouver',
      province:'BC',
      postal_code:'v1a 1a1',
      country:'Ca'
    },
    {
      id:'0612167c-2eef-4119-8e7c-ba34ee05db44',
      name:'Bob',
      last_name:'Ho',
      email:'bob.ho@universal.com',
      password:'111',
      is_admin:'false',
      phone:'+1 (123) 123 1111',
      address:'111 West End',
      city:'Toronto',
      province:'Ontario',
      postal_code:'v1v 1a1',
      country:'Ca'
    } 
  ]);
};
