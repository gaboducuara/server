const express = require('express');

//Utils
const { db } = require('./utils/database.util.js');

// init app
const app = express();

db.authenticate()
	.then(() => console.log('Database authenticacated'))
	.catch(err => console.log(err));

app.listen(5000, () => {
	console.log('Chekin app running on port 5000');
});
