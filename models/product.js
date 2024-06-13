// // <------READING A FILE AND APPENDING THE DATA TO IT------>



// const fs = require('fs');
// const path = require('path');
// // const rootDir = require('../utils/path');


// // const products = [];

// // module.exports = class Product{
// //     constructor(t){
// //         this.title = t;
// //     }

// //     save(){
// //         // products.push(this);
// //         //passing the data folder
// //         //passing the products.json in that data folder
// //         // const p =path.dirname(require.main.filename , 'data', 'products.json');
// //         const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

// //         fs.readFile(p, (err, fileContent) => {
// //             let products =[];
// //             if(!err){
// //                 products = JSON.parse(fileContent);
// //             }
// //             products.push(this);
// //             fs.writeFile(p, JSON.stringify(products), (err) => {
// //                 console.log(err);
// //             })
// //         });
// //     }

// //     static fetchAll(cb) {
// //         fs.readFile(p, (err, fileContent) => {
// //             if( err){
// //                cb([]);
// //             }
// //             cb(JSON.parse(fileContent));
// //         })
// //     }

// // }

// const p = path.join(
//     path.dirname(require.main.filename),
//     'data',
//     'products.json'
//   );
  
//   const getProductsFromFile = cb => {
//     fs.readFile(p, (err, fileContent) => {
//       if (err) {
//         cb([]);
//       } else {
//         cb(JSON.parse(fileContent));
//       }
//     });
//   };
  
//   module.exports = class Product {
//     constructor(t) {
//       this.title = t;
//     }
  
//     save() {
//       getProductsFromFile(products => {
//         products.push(this);
//         fs.writeFile(p, JSON.stringify(products), err => {
//           console.log(err);
//         });
//       });
//     }
  
//     static fetchAll(cb) {
//       getProductsFromFile(cb);
//     }
//   };



// <----------------------------------------------------------------------------------------------------\
const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb){
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product)
    })
  }
};
