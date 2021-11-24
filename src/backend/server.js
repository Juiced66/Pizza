const express = require("express")
const mongoose = require("mongoose") 
const Family = require('./models/Family.model')
const Product = require('./models/Product.model')
const Category = require('./models/Category.model')
const Menu = require('./models/Menu.model')
const { isElementOfType } = require("react-dom/test-utils")

async function getCategoryProducts(categoryId){
	const res = await Product.find({_category : categoryId})
	return res
}

async function getFamilyCategories(family_id){
	const res = await Category.find({family_id : family_id})
	return res
}

async function setMenuForVue(){

	const res = await Family
		.find().populate({path :'categories', populate : 'products'})

	return res
}

let res = setMenuForVue()


mongoose
	.connect("mongodb://127.0.0.1:27017/db", { useNewUrlParser: true })
	.then(err => console.log(err))
	.then(() => {
		const app = express()
		app.get('/', async (req,res)=>{
			const menu = await setMenuForVue()
			res.send(menu)
		})
		app.listen(5000, () => {
			console.log("Server has started!")	
		})
	})
