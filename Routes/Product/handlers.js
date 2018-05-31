const Product = require('../../Models/product/Product');

exports.getProductList = (req,res)=>{
    Product.find({},function(err,products){
        if(err) res.status(500).send("Problem on server");
        else res.status(200).send(products)
    })
};
