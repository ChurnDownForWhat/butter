var DefaultCards = require('../dbDefaultCards')


exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('Users', function(table){
      table.string('id').primary()
      table.string('firstName', 20).notNullable()
      table.string('lastName', 20).notNullable()
      table.string('email', 40)
      table.unique('email')
      table.integer('creditScore').nullable()
    }),

    knex.schema.createTableIfNotExists('Cards', function(table){
      table.string('id').primary()
      table.string('name', 80)
      table.string('user_id')
      table.foreign('user_id').references('Users.id')
      table.string('cardType')
      table.string('category')
      table.string('program')
      table.integer('balance')
      table.date('expiration')
      table.date('applicationDate')
      table.date('spendDeadline')
      table.integer('monthlyBilldate')
      table.date('annFeeDate')
      table.date('expCancelDate')
      table.integer('rewardsAmt')
      table.integer('last4digits')
      table.integer('spendTotal')
      table.string('benefit')
      table.integer('annFeeAmt')
      table.boolean('waivedFees')
      table.integer('creditLine')
      table.integer('signupBonus')
      table.integer('minSpend')
    }),

    knex.schema.createTableIfNotExists('DefaultCards', function(table){
      table.increments('id').primary()
      table.string('name', 80)
      table.string('cardType')
      table.string('category')
      table.string('program')
      table.string('benefit')
      table.integer('annFeeAmt')
      table.boolean('waivedFees')
      table.integer('signupBonus')
      table.integer('minSpend')
      table.string('cardImg')
    }),

    knex('DefaultCards').insert(DefaultCards)
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('Users'),
    knex.schema.dropTableIfExists('Cards'),
    knex.schema.dropTableIfExists('Categories')
  ])
}
