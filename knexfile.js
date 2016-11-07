module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://auphecqh:L62hxHecYm1VgGWuDs3QgBloecgSVdL7@elmer.db.elephantsql.com:5432/auphecqh',
    pool: {
      min: 2,
      max: 10
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
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
}
