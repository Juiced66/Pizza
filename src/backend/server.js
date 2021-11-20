const Pizza = require('./models/Pizza.model') 
const express = require("express")
const mongoose = require("mongoose") 



mongoose
	.connect("mongodb://127.0.0.1:27017/PizzaPP", { useNewUrlParser: true })
	.then(err => console.log(err))
	.then(() => {
		const app = express()
		app.get('/', (req,res)=>{
			res.send('')
		})
		app.get('/pizzas', (req,res)=>{
			
			Pizza.find({}).exec((err,pizzas)=>{
				console.log(pizzas)
				res.json(pizzas)
			})

		})
		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})
