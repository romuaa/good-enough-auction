const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://auction:auction@localhost:5432/auction';

function makeid(n) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < n; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

/* GET home page.  */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/bids', (req, res, next) => {
    
    var batchid = makeid(10);
    console.log(batchid);
  
    const results = [];
    const data = {name: req.body.name, 
		  email: req.body.email,
		  value: parseInt(req.body.value),
		  batchid: batchid};

    pg.connect(connectionString, (err, client, done) => {
	
	if (err) {
	    done();
	    console.log(err);
	    return res.status(500).json({success: false, data: err});
	}

	client.query('INSERT INTO bids (name, email, value, batchid) values ($1, $2, $3, $4)',
		    [data.name, data.email, data.value, data.batchid]);

	return res.status(200).json({success: true});
	
    });

});


module.exports = router;
