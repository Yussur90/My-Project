var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo/index.js')
var app = express();


app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/items", (req, res) => {
 console.log(req.body)
var data = req.body

 db.save(data,function(err,data){
 	if(err){
 		console.log('error')
 	}
 	res.send(data)
 })

});


app.get('/items', function (req, res) {
db.Item.find(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

