const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/todoApp", (err,db) => {
	if (err) {
		return console.log("No se pudo conectar a la bd");
	}

	console.log("Conectado al servidor mongo");
	// //Mostrar todos los registros
	// db.collection("Prueba").find().toArray().then((docs) =>{
	// 	console.log("Coleccion Prueba");
	// 	console.log(JSON.stringify(docs,undefined,4));
	// },(err) => {
	// 	console.log("Problema para mostrar la info");
	// });

	// // Mostrar un registro en particular por el id
	// db.collection("Prueba")
	// 	.find({
	// 				_id : new ObjectID("5a0afaa0706b8e1d78343197")
	// 			})
	// 	.toArray().then((docs) =>{
	// 		console.log("Coleccion Prueba");
	// 		console.log(JSON.stringify(docs,undefined,4));
	// },(err) => {
	// 	console.log("Problema para mostrar la info");
	// });

	// //Contar registros
	// db.collection("Prueba")
	// 	.find()
	// 	.count()
	// 	.then((docs) =>{
	// 		console.log("Coleccion Prueba");
	// 		console.log(`Documentos ${docs}`);
	// },(err) => {
	// 	console.log("Problema para mostrar la info");
	// });

	//query users por el usuario que le pase
	db.collection("Users").find({name:"Guillermo"})
	.toArray()
	.then((docs) =>{
			console.log("Lista de usuarios");
			console.log(JSON.stringify(docs,undefined,4));
	},(err)=>{

	});

	// db.close();
});
