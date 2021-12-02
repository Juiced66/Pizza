require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const cookieParser = require('cookie-parser');

mongoose
	.connect("mongodb://127.0.0.1:27017/db", { useNewUrlParser: true })
	//.then(err => console.log(err))
	.then(() => {

		const app = express()
		app.use(express.urlencoded({ extended: true }));
		app.use(express.json());
		app.use(cors({
			origin: ['http://localhost:3000'],
			credentials: true,
			sameSite: 'none',
			secure:true
		}))
		app.use(cookieParser());
		app.use('/', require('./routes/CategoriesRoute'))
		app.use('/', require('./routes/FamiliesRoutes'))
		app.use('/', require('./routes/ProductsRoutes'))
		app.get('/', function(req, res){
			res.cookie('name', 'express').send('cookie set'); //Sets name = express
		 });
		app.use('/api/users', require('./routes/UserRoutes'))
		app.listen(5000, () => {
			console.log("Server has started!")	
		})
	})
