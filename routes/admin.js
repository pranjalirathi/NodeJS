// const express = require('express');
// const router = express.Router();
// // const path = require('path');
// // const rootDir = require('../utils/path');
// const productsController = require('../controllers/products');


// //creating array const for the managing the data of the title every time
// const products = [];

// //will reach for /admin/add-product => GET REQUEST
// // router.get('/add-product', (req, res, next) => {
// //     res.sendFile( 'add-product' ,{ pageTitle: 'Add-product', path: '/admin/add-product'}  );
// // })

// router.get('/add-product', productsController.getAddProduct);

// //will reach for /admin/add-product => POST REQUEST
// // router.post('/add-product', (req, res, next) => {
// //     products.push({ title: req.body.title});
// //     // console.log(req.body);
// //     res.redirect('/');
// // })
// router.post('/add-product', productsController.postAddProduct);

// // exports.routes = router;
// // exports.products = products;
// module.exports = router;




// ---------------------------------------------------------------------------------
const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;

