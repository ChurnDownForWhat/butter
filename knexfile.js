module.exports = {

    // for elephant  connection: 'postgres://auphecqh:L62hxHecYm1VgGWuDs3QgBloecgSVdL7@elmer.db.elephantsql.com:5432/auphecqh',


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
