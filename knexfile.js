module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DOIP,
      user: process.env.DBUSER,
      password: process.env.DBPASS,
      database: process.env.DBNAME
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: 'Butter_test'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations'
    }
  },
}
