const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/todoApp", (err,db) => {
	if (err) {
		return console.log("No se pudo conectar a la bd");
	}

	console.log("Conexion a la bd establecida");

	// db.collection("Prueba").insertOne({
	// 	text:"Texto 2",
	// 	completed:false
	// },(err,r) => {
	// 	if (err) {
	// 		return console.log("No se pudo agregar la informacion");
	// 	}
	// 	console.log(r);
	// 	// console.log(JSON.stringify(r.ops, undefined, 2));
	// });

	// inser new doc en Users (name,age,location)

	db.collection("Users").insertOne({
		name:"Nelson",
		age:23,
		location:"La pista"
	},(err , resp) => {
		if (err) {
			return console.log("No se pudo agregar la informacion");
		}
		console.log(JSON.stringify(resp.ops, undefined, 2));
	});

	db.close();
});
