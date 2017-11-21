const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const  conexion = process.env.MONGO_URI || "mongodb://localhost:27017/TodoApp";
// mongoose.connect("mongodb://localhost:27017/TodoApp", {
//   useMongoClient: true
// });

mongoose.connect(conexion, {
  useMongoClient: true
});

module.exports = {
  mongoose
}
