var DefaultCards = require('../dbDefaultCards')


exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('Users', function(table){
      table.string('id').primary()
      table.string('firstName', 20).notNullable()
      table.string('lastName', 20).notNullable()
      table.string('email', 40).unique().notNullable()
      table.integer('creditScore').nullable()
    }),

    knex.schema.createTableIfNotExists('Cards', function(table){
      table.string('id').primary()
      table.string('name', 80).notNullable()
      table.string('user_id')
      table.foreign('user_id').references('Users.id')
      table.string('cardType').defaultTo('None Entered')
      table.string('category').defaultTo('Misc')
      table.string('program').defaultTo('Misc')
      table.integer('balance').defaultTo(0)
      table.date('expiration').notNullable()
      table.date('applicationDate').notNullable()
      table.date('spendDeadline').notNullable()
      table.integer('monthlyBilldate').notNullable()
      table.date('annFeeDate').notNullable()
      table.date('expCancelDate').notNullable()
      table.integer('rewardsAmt').defaultTo(0)
      table.integer('last4digits').defaultTo(0)
      table.integer('spendTotal').defaultTo(0)
      table.string('benefit').defaultTo('None Entered')
      table.integer('annFeeAmt').defaultTo(0)
      table.boolean('waivedFees').defaultTo(false);
      table.integer('creditLine').defaultTo(0)
      table.integer('signupBonus').defaultTo(0)
      table.integer('minSpend').defaultTo(0)
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

    knex.schema.createTableIfNotExists('RewardLinks', function(table){
      table.increments('id').primary()
      table.string('programName')
      table.string('portalLink')
    }),

    knex('DefaultCards').insert(DefaultCards)
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('Users'),
    knex.schema.dropTableIfExists('Cards')
  ])
}
