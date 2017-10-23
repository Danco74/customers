var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.145.129/customers');

var app = express();
var Customer = require("./customerModel");


app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(8000, function () {
    console.log("yo yo yo, on 8000!!")
});


var handler = function (res, next) {
    return function (err, beer) {
        if (err) {
            return next(err);
        }
        res.send(beer);
    }
}


app.get('/customers', function (req, res, next) {
    Customer.find(function (error, customers) {
      if (error) {
        return next(error);
      } else {
        return res.send(customers);
      }
    });
  });

app.get('/customers/:id', function(req, res, next) {
    Customer.findById(req.params.id, handler(res, next));
  });
  

app.post('/customers', function (req, res, next) {

    Customer.create(req.body, handler(res, next));
});