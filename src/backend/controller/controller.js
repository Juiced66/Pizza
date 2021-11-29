var ProductDb = require('../models/Product.model');
var CategoryDb = require('../models/Category.model');
var FamilyDb = require('../models/Family.model');

// create and save new product
exports.createProd = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new product
    const product = new Product({
        name : req.body.name,
        payload : req.body.payload,
        family_id: req.body.family_id,
        img : req.body.img,
        _category : req.body._category
    })

    // save product in the database
    product
        .save(product)
        .then(data => {
            //res.send(data)
            res.redirect('/add-product');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all products/ retrive and return a single product
exports.findProd = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        ProductDb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found product with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving product with id " + id})
            })

    }else{
        ProductDb.find()
            .then(product => {
                res.send(product)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving product information" })
            })
    }

    
}

// Update a new idetified product by product id
exports.updateProd = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    ProductDb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update product with ${id}. Maybe product not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update product information"})
        })
}

// Delete a product with specified product id in the request
exports.deleteProd = (req, res)=>{
    const id = req.params.id;

    ProductDb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "Product was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete product with id=" + id
            });
        });
}


exports.createCat = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new category
    const category = new Category({
        name : req.body.name,
        products : req.body.products,
        family_id: req.body.family_id
    })

    // save category in the database
    category
        .save(category)
        .then(data => {
            //res.send(data)
            res.redirect('/add-category');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all categories / retrive and return a single category
exports.findCat = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        CategoryDb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found category with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving category with id " + id})
            })

    }else{
        CategoryDb.find()
            .then(product => {
                res.send(product)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving category information" })
            })
    }

    
}

// Update a new idetified category by category id
exports.updateCat = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    CategoryDb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update category with ${id}. Maybe category not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update category information"})
        })
}

// Delete a category with specified category id in the request
exports.deleteCat = (req, res)=>{
    const id = req.params.id;

    CategoryDb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "category was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete category with id=" + id
            });
        });
}


exports.createFam = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new family
    const family = new Family({
        name : req.body.name,
        categories : req.body.categories,
        columns: req.body.columns
    })

    // save category in the database
    family
        .save(family)
        .then(data => {
            //res.send(data)
            res.redirect('/add-family');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all products/ retrive and return a single product
exports.findFam = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        FamilyDb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found family with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving family with id " + id})
            })

    }else{
        FamilyDb.find()
            .then(product => {
                res.send(product)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving family information" })
            })
    }

    
}

// Update a new idetified family by family id
exports.updateFam = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    FamilyDb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update family with ${id}. Maybe family not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update family information"})
        })
}

// Delete a category with specified category id in the request
exports.deleteFam = (req, res)=>{
    const id = req.params.id;

    FamilyDb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "family was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete family with id=" + id
            });
        });
}