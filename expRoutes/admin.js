const express = require('express');
const router = express.Router();
const path = require('path');

//will reach for /admin/add-product => GET REQUEST
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../.', 'views', 'add-product.html'));
})

//will reach for /admin/add-product => POST REQUEST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;