import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.json([ { id: 1, username: 'Agent 000' }, { id: 2, username: 'Agent 012' } ]);
});

module.exports = router;
