import express from 'express';
import dbService from '../db/dbService';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.json({ msg: 'Greetings from the insert router' });
});

router.post('/', function(req, res, next) {
	// console.log(req.body);
	const { input, output, calculation } = req.body;

	const db = dbService.getDbServiceInstance();

	const result = db.insertNewCalculation(req.body);

	result.then((data) => res.json({ data: data })).catch((err) => console.log(err));
});

module.exports = router;
