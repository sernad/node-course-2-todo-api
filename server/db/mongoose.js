<<<<<<< HEAD
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp", {
  useMongoClient: true
});

module.exports = {
  mongoose
}
=======
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useMongoClient: true });

module.exports = {mongoose};
>>>>>>> agrgar validaciones por rutas /get y /post
