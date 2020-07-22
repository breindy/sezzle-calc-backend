const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
	host: 'us-cdbr-east-02.cleardb.com',
	user: 'b380eb6184ed5e',
	password: '7628e044',
	database: 'heroku_a34860b1d5f28ef',
	port: 3306
});

connection.connect((err) => {
	if (err) {
		console.log(err.message);
	}
	console.log('db ' + connection.state);
});

module.exports = connection;
