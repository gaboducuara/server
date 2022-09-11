const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
	dialect: 'mysql',
	host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
	username: 'bsale_test',
	password: 'bsale_test',
	port: 3306,
	database: 'bsale_test',
});

module.exports = { db, DataTypes };
