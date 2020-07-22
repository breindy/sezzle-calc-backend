import express from 'express';
import dbService from '../db/dbService';
var router = express.Router();

/* GET home page. */
/*
    Get 10 most recent calculations
    in order by most recent
*/
router.get('/', function(req, res, next) {
	// console.log('get 10 most recent calculations!');
	const db = dbService.getDbServiceInstance();

	const result = db.getRecentData();

	result.then((data) => res.json({ data: data })).catch((err) => console.log(err));
});

module.exports = router;
