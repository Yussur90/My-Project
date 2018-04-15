var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  

  username:String,
  weight:Number,
  date:Number

});

var Item = mongoose.model('Item', itemSchema);

var save = function(data , callback){
  var item = new Item(data)
    item.save(function (err, data) {
    if (err) {
      callback(err , null)
    }
    //console.log(data)
    callback(null , data);
  });
}


// var selectAll = function(callback) {
//   Item.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

module.exports.save = save;
module.exports.Item=Item;
