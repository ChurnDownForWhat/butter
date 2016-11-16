module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '159.203.127.229',
      user: 'abutterapp',
      password: 'churn',
      database: 'abutterapp'
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
