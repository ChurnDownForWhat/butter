
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
      table.integer('category_id')
      table.foreign('category_id').references('Categories.id')
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
      table.string('annBenefit')
      table.integer('annFeeAmt')
      table.boolean('waivedFees')
      table.integer('creditLine')
      table.integer('signupBonus')
      table.integer('minSpend')
    }),

    knex.schema.createTableIfNotExists('Categories', function(table){
      table.increments('id')
      table.string('category', 30).notNullable()
      table.string('program', 30)
    }),

    knex.schema.createTableIfNotExists('DefaultCards', function(table){
      table.increments('id').primary()
      table.string('name', 80)
      table.string('cardType')
      table.integer('category_id')
      table.foreign('category_id').references('Categories.id')
      table.string('annBenefit')
      table.integer('annFeeAmt')
      table.boolean('waivedFees')
      table.integer('signupBonus')
      table.integer('minSpend')

    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('Users'),
    knex.schema.dropTableIfExists('Cards'),
    knex.schema.dropTableIfExists('Categories')
  ])
}
