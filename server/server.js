<<<<<<< HEAD
var Express = require("express");
var bodyParser = require("body-parser");
=======
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');
>>>>>>> agrgar validaciones por rutas /get y /post

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./modelos/todo");
var {Users} = require("./modelos/users");

var app = new Express();

//setear middleware
app.use(bodyParser.json());

app.post("/todos",(req,res)=>{
  var actividad = new Todo({
    text : req.body.text
  });

  actividad.save().then((doc)=>{
      res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
})

<<<<<<< HEAD
app.listen(3000,()=>{
  console.log("Conexion establecida");
=======
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
>>>>>>> agrgar validaciones por rutas /get y /post
});
