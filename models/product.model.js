// utils
const { db, DataTypes } = require('../utils/database.util');

const Product = db.define('product', {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: DataTypes.INTEGER,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	url_image: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	price: {
		type: DataTypes.DECIMAL(10, 2),
		allowNull: false,
	},
	discount: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	category: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	status: {
		type: DataTypes.STRING,
		defaultValue: 'active',
	},
});

module.exports = { Product };
