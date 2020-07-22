import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.json({ msg: 'Hello from the server' });
});

router.post('/', function(req, res, next) {});

module.exports = router;
