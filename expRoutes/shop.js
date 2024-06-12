const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');
const adminData = require('./admin');

const productsController = require('../controllers/products');



// <-------USED FOR shop.html as it is being static---->
// router.get('/', (req, res, next) => {
//     // res.sendFile('/views/shop.html') cannot be passed like this
//     console.log('shop.js', adminData.products);
//     res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// });



// <--------TO USE Shop.pug and render it here------>
//uses render whihc has a default templating engine
//using products for dynamic content
// router.get('/', (req, res, next) => {
//     const products = adminData.products;
//     res.render('shop', {prods: products, docTitle: 'Shop'});
// })
router.get('/', productsController.getProducts);


module.exports = router;