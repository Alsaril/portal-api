/**
 * Created by ivan on 19.03.17.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send("Here will be schedule soon");
});

module.exports = router;