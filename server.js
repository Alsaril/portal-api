/**
 * Created by ivan on 19.03.17.
 */

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9000;        // set our port

// ROUTES FOR OUR API
// =============================================================================

var feed = require('./routes/feed');
var users = require('./routes/users');
var blogs = require('./routes/blogs');
var schedule = require('./routes/schedule');



// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
app.use('/api/feed', feed);
app.use('/api/blogs', blogs);
app.use('/api/people', users);
app.use('/api/schedule', schedule);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);