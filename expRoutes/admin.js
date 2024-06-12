const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');
const productsController = require('../controllers/products');


//creating array const for the managing the data of the title every time
const products = [];

//will reach for /admin/add-product => GET REQUEST
// router.get('/add-product', (req, res, next) => {
//     res.sendFile( 'add-product' ,{ pageTitle: 'Add-product', path: '/admin/add-product'}  );
// })

router.get('/add-product', productsController.getAddProduct);

//will reach for /admin/add-product => POST REQUEST
// router.post('/add-product', (req, res, next) => {
//     products.push({ title: req.body.title});
//     // console.log(req.body);
//     res.redirect('/');
// })
router.post('/add-product', productsController.postAddProduct);

exports.routes = router;
exports.products = products;