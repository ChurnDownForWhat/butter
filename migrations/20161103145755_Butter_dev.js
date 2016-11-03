
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table){
      table.increments('id').primary()
      table.string('firstName', 20).notNullable()
      table.string('lastName', 20).notNullable()
      table.string('email', 40)
      table.unique('email')
      table.integer('creditScore').nullable()
    }),

    knex.schema.createTable('cards', function(table){
      table.increments('id').primary()
      table.string('cardName', 80)
      table.integer('user_id')
      table.foreign('user_id').references('users.id')
      table.integer('categ_id')
      table.foreign('categ_id').references('categories.id')
      table.integer('balance')
      table.date('expiration')
      table.date('issued')
      table.integer('rewards')
      table.integer('cardNumber')
    }),

    knex.schema.createTable('categories', function(table){
      table.increments('id')
      table.string('category', 30).notNullable()
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('users'),
    knex.schema.dropTableIfExists('cards'),
    knex.schema.dropTableIfExists('categories')
  ])
}
