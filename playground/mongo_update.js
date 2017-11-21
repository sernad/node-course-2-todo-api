const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/todoApp", (err,db) => {
	if (err) {
		return console.log("No se pudo conectar a la bd");
	}

	console.log("Conexion a la bd establecida");

  // //UPDATE UN REGISTRO
	// db.collection("Users").findOneAndUpdate(
	// 	{_id:new ObjectID("5a0c882243d3150d9a02c946")},
	// 	{$set:{
	// 		age:22
	// 	}},
	// 	{
	// 		returnOriginal : false
	// 	}
	// ).then((res) => {
	// 	console.log(res);
	// });

	db.collection("Users").findOneAndUpdate(
			{name:"Nelson"},
			{$set:{name:"Andres"},
			$inc:{age:1}},
			{returnOriginal:false})
		.then((res)=>{
			console.log(res);
		},(err) => {
			console.log(err);
		});

	db.close();
});
