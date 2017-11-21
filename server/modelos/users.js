var mongoose = require("mongoose");
var users =  mongoose.model("Challange",{
  nombre:{
    type : String
  },
  email:{
    type : String,
    trim : true,
    minlength : 1,
    required: true
  }
});

module.exports = {users}
