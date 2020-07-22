import express from 'express';
const router = express.Router();

router.get('/', function(req, res, next) {
	res.json([
		{ id: 1, calculation: '5+2-1 = 6' },
		{ id: 2, calculation: '1+2+3 = 6' },
		{ id: 3, calculation: '9+10*2 = 29' }
	]);
});

module.exports = router;
