const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/todoApp", (err,db) => {
	if (err) {
		return console.log("No se pudo conectar a la bd");
	}

	console.log("Conexion a la bd establecida");

  // //BORRAR MULTIPLES REGISTROS
  // db.collection("Users").deleteMany({text:"Manuel se quiere ir a rumbear"}).then((r)=>{
  //   console.log(r);
  // });

  // //BORRAR 1 REGISTRO (Si existen varios borrar uno solo)
  // db.collection("Users").deleteOne({name:"Almer"}).then((r)=>{
  //   console.log(r);
  // });

  // // BORRAR 1 REGISTRO (Si existen varios borrar uno solo)
  // db.collection("Users").findOneAndDelete({name:"Guillermo"}).then((r)=>{
  //   console.log(r);
  // });

  // //borar multiples andres
  //
  // db.collection("Users").deleteMany({name:"Andres"}).then((r)=>{
  //   console.log(r);
  // },(err)=>{
  //   console.log(err);
  // });

  //  // bORRAR POR ID
  // var id = new ObjectID("5a0c882243d3150d9a02c947");
  // db.collection("Users").deleteMany({_id:id}).then((r)=>{
  //   console.log(r);
  // },(err)=>{
  //   console.log(err);
  // });

	db.close();
});
