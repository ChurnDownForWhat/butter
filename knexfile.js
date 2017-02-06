var pg = require('pg');
pg.defaults.ssl = true;

module.exports = {

 development: {
   client: 'pg',
   connection: process.env.DATABASE_URL,
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