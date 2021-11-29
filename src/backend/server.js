const express = require("express")
const mongoose = require("mongoose")

mongoose
	.connect("mongodb://127.0.0.1:27017/db", { useNewUrlParser: true })
	//.then(err => console.log(err))
	.then(() => {

		const app = express()

		app.use(express.urlencoded({ extended: true }));
		app.use(express.json());

		app.use('/', require('./routes/CategoriesRoute'))
		app.use('/', require('./routes/FamiliesRoutes'))
		app.use('/', require('./routes/ProductsRoutes'))

		app.listen(5000, () => {
			console.log("Server has started!")	
		})
	})
