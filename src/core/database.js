const Sequelize = require('sequelize');

DATABASE_URL = 'postgres://postgres:12345@localhost:5432/erp';

const database = new Sequelize(DATABASE_URL);

module.exports = database;