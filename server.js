var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var user = require('./schema/user');
var cors = require('cors');

var connection = mongoose.connect('mongodb://localhost/instagram', { useMongoClient: true });

app.use(bodyParser.json());
app.use(cors());

app.get('/api', function (req, res) {
    console.log('its working');
    user.find({}, function (err, data) {
        if (err) return err
        console.log(data);
    })
    res.send('jknjknjkn')
})

app.post('/api/user', function (req, res) {
    var usr = new user(req.body);
    usr.save(function (err, data) {
        if (err) return err
        res.json(data);
    })
})

app.listen(8088, function () {
    console.log('server is running @ 8088');
})