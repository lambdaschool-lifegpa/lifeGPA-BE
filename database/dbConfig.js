const knex = require('knex');
const knexConfig = require('../knexfile.js');

const dbEnv = process.env.DB_ENV || 'texting';

module.exports = knex(knexConfig[dbEnv]);
