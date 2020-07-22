const mysql = require('mysql');
const dotenv = require('dotenv');
const connection = require('../db/config/config.js');

dotenv.config();

let instance = null;

class DbService {
	static getDbServiceInstance() {
		return instance ? instance : new DbService();
	}

	async getRecentData() {
		try {
			const response = await new Promise((resolve, reject) => {
				const query = 'SELECT * FROM calculations ORDER BY calculation_id DESC LIMIT 10;';

				connection.query(query, (err, results) => {
					if (err) {
						reject(new Error(err.message));
					}
					resolve(results);
				});
			});

			// console.log(response);
			return response;
		} catch (error) {
			console.log(error);
		}
	}

	async insertNewCalculation(calculation) {
		try {
			const response = await new Promise((resolve, reject) => {
				const query = 'INSERT INTO calculations (input, output, result) VALUES (?, ?, ?);';

				connection.query(
					query,
					[ calculation.input, calculation.output, calculation.calculation ],
					(err, result) => {
						if (err) {
							reject(new Error(err.message));
						}
						resolve(result);
					}
				);
			});
			// console.log(response.insertId);
			return {
				status: 200,
				calculation_id: response.insertId,
				input: calculation.input,
				output: calculation.output,
				result: calculation.calculation
			};
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = DbService;
